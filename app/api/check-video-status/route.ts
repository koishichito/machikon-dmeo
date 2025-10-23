import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { operationName } = await request.json();

    if (!operationName) {
      return NextResponse.json(
        { error: 'オペレーション名が必要です' },
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

    // オペレーションの状態を確認
    const checkUrl = `https://generativelanguage.googleapis.com/v1beta/${operationName}`;
    
    const response = await fetch(`${checkUrl}?key=${apiKey}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: 'ステータス確認に失敗しました', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    return NextResponse.json({
      done: data.done || false,
      response: data.response,
      error: data.error,
    });

  } catch (error) {
    console.error('ステータス確認エラー:', error);
    return NextResponse.json(
      { error: 'ステータス確認中にエラーが発生しました' },
      { status: 500 }
    );
  }
}

