'use client';

import { useState } from 'react';

export default function VideoGeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [operationName, setOperationName] = useState('');
  const [status, setStatus] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('プロンプトを入力してください');
      return;
    }

    setLoading(true);
    setError('');
    setStatus('動画生成を開始しています...');

    try {
      const response = await fetch('/api/generate-video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '動画生成に失敗しました');
      }

      setOperationName(data.operationName);
      setStatus('動画を生成中です。完了までお待ちください...');
      
      // ポーリングで状態を確認
      pollStatus(data.operationName);

    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  const pollStatus = async (opName: string) => {
    const checkStatus = async () => {
      try {
        const response = await fetch('/api/check-video-status', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ operationName: opName }),
        });

        const data = await response.json();

        if (data.done) {
          if (data.response && data.response.generatedVideos && data.response.generatedVideos[0]) {
            const videoUri = data.response.generatedVideos[0].video.uri;
            setStatus('動画生成が完了しました！');
            setVideoUrl(videoUri);
            setLoading(false);
          } else if (data.error) {
            setError('動画生成中にエラーが発生しました: ' + JSON.stringify(data.error));
            setLoading(false);
          }
        } else {
          // まだ完了していない場合、10秒後に再確認
          setTimeout(() => checkStatus(), 10000);
        }
      } catch (err: any) {
        setError('ステータス確認中にエラーが発生しました: ' + err.message);
        setLoading(false);
      }
    };

    checkStatus();
  };

  const handleDownload = async () => {
    if (!videoUrl) return;

    try {
      const response = await fetch('/api/download-video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileUri: videoUrl }),
      });

      if (!response.ok) {
        throw new Error('ダウンロードに失敗しました');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'generated-video.mp4';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err: any) {
      setError('ダウンロード中にエラーが発生しました: ' + err.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          AI動画生成
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-3 text-gray-700">
              動画の説明を入力してください
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="例: 美しい夕日の下で踊る人々、映画のようなリアリズム、8秒間"
              className="w-full h-32 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none resize-none text-gray-700"
              disabled={loading}
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className={`w-full py-4 rounded-lg font-bold text-white text-lg transition-all ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
            }`}
          >
            {loading ? '生成中...' : '動画を生成'}
          </button>
        </div>

        {status && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
            <p className="text-blue-700 font-medium">{status}</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded">
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        )}

        {videoUrl && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">生成された動画</h2>
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">動画URI: {videoUrl}</p>
            </div>
            <button
              onClick={handleDownload}
              className="w-full py-4 rounded-lg font-bold text-white text-lg bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all"
            >
              動画をダウンロード
            </button>
          </div>
        )}

        <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">使い方</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>テキストボックスに生成したい動画の説明を入力します</li>
            <li>「動画を生成」ボタンをクリックします</li>
            <li>生成が完了するまで待ちます（数分かかる場合があります）</li>
            <li>完了したら「動画をダウンロード」ボタンで動画を保存できます</li>
          </ol>
          
          <div className="mt-6 p-4 bg-white rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">プロンプトのヒント</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              <li>具体的なシーンや動作を記述する</li>
              <li>カメラアングルや照明を指定する</li>
              <li>スタイル（映画的、アニメ風など）を明記する</li>
              <li>音声やセリフを含める場合は詳細に記述する</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

