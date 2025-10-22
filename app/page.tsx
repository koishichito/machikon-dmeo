import Link from 'next/link';
import AlertBanner from '@/components/home/AlertBanner';
import GenreCarousel from '@/components/home/GenreCarousel';
import AreaSelector from '@/components/home/AreaSelector';

export default function Home() {
  return (
    <>
      {/* 告知バナー */}
      <AlertBanner
        message="🎉 新規会員登録で500円分のポイントプレゼント！"
        linkUrl="/signup"
        linkText="今すぐ登録"
      />

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-brand-pink to-pink-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            素敵な出会いが待っている
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            全国の街コン・婚活イベント情報をお届け
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/search"
              className="bg-white text-brand-pink px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-shadow"
            >
              イベントを探す
            </Link>
            <Link
              href="/guide"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-brand-pink transition-colors"
            >
              初めての方へ
            </Link>
          </div>
        </div>
      </section>

      {/* ジャンル選択 */}
      <GenreCarousel />

      {/* エリア選択 */}
      <AreaSelector />

      {/* 特集セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            特集・コンテンツ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/report" className="group">
              <div className="bg-brand-gray-light rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
                  <span className="text-6xl">📝</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-pink transition-colors">
                    街コンレポート
                  </h3>
                  <p className="text-gray-600">
                    実際に参加したイベントのレポートをご紹介
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/column" className="group">
              <div className="bg-brand-gray-light rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                  <span className="text-6xl">💡</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-pink transition-colors">
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
