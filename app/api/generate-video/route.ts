import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { prompt, image } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'プロンプトが必要です' },
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

    // Gemini APIを使用して動画生成を開始
    const generateUrl = 'https://generativelanguage.googleapis.com/v1beta/models/veo-3.1-generate-preview:generateVideos';
    
    const requestBody: any = {
      prompt: prompt,
    };

    if (image) {
      requestBody.image = image;
    }

    const response = await fetch(`${generateUrl}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: 'API呼び出しに失敗しました', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // オペレーション名を返す
    return NextResponse.json({
      operationName: data.name,
      message: '動画生成を開始しました。完了までお待ちください。',
    });

  } catch (error) {
    console.error('動画生成エラー:', error);
    return NextResponse.json(
      { error: '動画生成中にエラーが発生しました' },
      { status: 500 }
    );
  }
}

