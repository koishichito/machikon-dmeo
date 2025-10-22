import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Machikon ALICE</h3>
            <p className="text-sm text-gray-300">
              全国の街コン・婚活イベント情報を掲載。
              <br />
              素敵な出会いをサポートします。
            </p>
            <div className="mt-4 text-sm text-gray-300">
              <p>お問い合わせ</p>
              <p className="font-medium text-white">03-XXXX-XXXX</p>
              <p className="text-xs">受付時間: 10:00-18:00</p>
            </div>
          </div>

          {/* サービス */}
          <div>
            <h4 className="font-bold mb-4">サービス</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/search" className="text-gray-300 hover:text-white transition-colors">
                  イベント検索
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-gray-300 hover:text-white transition-colors">
                  初めての方へ
                </Link>
              </li>
              <li>
                <Link href="/flow" className="text-gray-300 hover:text-white transition-colors">
                  ご利用の流れ
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  よくある質問
                </Link>
              </li>
            </ul>
          </div>

          {/* コンテンツ */}
          <div>
            <h4 className="font-bold mb-4">コンテンツ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/report" className="text-gray-300 hover:text-white transition-colors">
                  街コンレポート
                </Link>
              </li>
              <li>
                <Link href="/column" className="text-gray-300 hover:text-white transition-colors">
                  婚活コラム
                </Link>
              </li>
              <li>
                <Link href="/voices" className="text-gray-300 hover:text-white transition-colors">
                  参加者の声
                </Link>
              </li>
              <li>
                <Link href="/staff" className="text-gray-300 hover:text-white transition-colors">
                  スタッフ紹介
                </Link>
              </li>
            </ul>
          </div>

          {/* 法務・その他 */}
          <div>
            <h4 className="font-bold mb-4">その他</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/special-commercial-code" className="text-gray-300 hover:text-white transition-colors">
                  特定商取引法に基づく表記
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-gray-300 hover:text-white transition-colors">
                  主催者募集
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 Machikon ALICE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
