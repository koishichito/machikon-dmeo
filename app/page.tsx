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
        message="【街コンアリス終了及び新サービス開始のお知らせ】このたび 街コンALICE は2024年4月30日をもちましてサービスの提供を終了いたしました。"
        linkUrl="/info"
        linkText="詳細を見る"
      />

      {/* ヒーロースライダー */}
      <HeroSlider />

      {/* ジャンル選択 */}
      <GenreCarousel />

      {/* エリア選択 */}
      <AreaSelector />

      {/* 特集セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            特集・コンテンツ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
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

