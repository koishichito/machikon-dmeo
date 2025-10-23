import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { fileUri } = await request.json();

    if (!fileUri) {
      return NextResponse.json(
        { error: 'ファイルURIが必要です' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'APIキーが設定されていません' },
        { status: 500 }
      );
    }

    // ファイルをダウンロード
    const downloadUrl = `https://generativelanguage.googleapis.com/v1beta/${fileUri}`;
    
    const response = await fetch(`${downloadUrl}?key=${apiKey}&alt=media`, {
      method: 'GET',
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'ダウンロードに失敗しました' },
        { status: response.status }
      );
    }

    const videoBuffer = await response.arrayBuffer();
    
    return new NextResponse(videoBuffer, {
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Disposition': 'attachment; filename="generated-video.mp4"',
      },
    });

  } catch (error) {
    console.error('ダウンロードエラー:', error);
    return NextResponse.json(
      { error: 'ダウンロード中にエラーが発生しました' },
      { status: 500 }
    );
  }
}

