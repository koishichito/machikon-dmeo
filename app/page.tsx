import Link from 'next/link';
import AlertBanner from '@/components/home/AlertBanner';
import HeroSlider from '@/components/home/HeroSlider';
import GenreCarousel from '@/components/home/GenreCarousel';
import AreaSelector from '@/components/home/AreaSelector';

export default function Home() {
  return (
    <>
      {/* 告知バナー */}
      <AlertBanner
        message="【新機能】AI動画生成機能を追加しました！テキストから簡単に動画を作成できます。"
        linkUrl="/video-generator"
        linkText="今すぐ試す"
      />

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              AI動画生成プラットフォーム
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              最新のAI技術を使って、テキストから高品質な動画を簡単に生成
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/video-generator"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all text-lg"
              >
                🎬 動画を生成する
              </Link>
              <Link 
                href="/guide"
                className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all text-lg border-2 border-purple-600"
              >
                使い方を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 機能紹介セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            主な機能
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 機能カード1 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-shadow border-2 border-purple-200">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3 text-purple-900">
                テキストから動画生成
              </h3>
              <p className="text-gray-700">
                説明文を入力するだけで、AIが自動的に高品質な動画を生成します。
              </p>
            </div>

            {/* 機能カード2 */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 hover:shadow-xl transition-shadow border-2 border-pink-200">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-3 text-pink-900">
                映画品質のリアリズム
              </h3>
              <p className="text-gray-700">
                最新のVeo 3.1モデルを使用し、驚くほどリアルな映像を生成します。
              </p>
            </div>

            {/* 機能カード3 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-shadow border-2 border-blue-200">
              <div className="text-5xl mb-4">🔊</div>
              <h3 className="text-2xl font-bold mb-3 text-blue-900">
                音声・セリフ生成
              </h3>
              <p className="text-gray-700">
                動画に合わせた音声や会話も自動的に生成されます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            生成例
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            AIが生成した動画の例をご覧ください。様々なスタイルやシーンに対応しています。
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                  <span className="text-6xl">🎥</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2">サンプル動画 {i}</h3>
                  <p className="text-sm text-gray-600">AI生成による高品質な動画</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            今すぐ始めましょう
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            無料で動画生成を体験できます。アイデアを形にしましょう。
          </p>
          <Link 
            href="/video-generator"
            className="inline-block px-10 py-5 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all text-xl"
          >
            動画生成を始める →
          </Link>
        </div>
      </section>

      {/* 従来のコンテンツ */}
      <HeroSlider />
      <GenreCarousel />
      <AreaSelector />

      {/* 特集セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            特集・コンテンツ
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/report" className="group">
              <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow border-4 border-pink-300">
                <div className="h-48 bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
                  <span className="text-6xl">📝</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink-500 transition-colors">
                    街コンレポート
                  </h3>
                  <p className="text-gray-600">
                    実際に参加したイベントのレポートをご紹介
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/column" className="group">
              <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow border-4 border-purple-300">
                <div className="h-48 bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                  <span className="text-6xl">💡</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-500 transition-colors">
                    婚活コラム
                  </h3>
                  <p className="text-gray-600">
                    婚活に役立つ情報やテクニックをお届け
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

