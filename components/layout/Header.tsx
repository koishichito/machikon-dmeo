import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* トップバー */}
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-brand-pink">
              Machikon ALICE
            </h1>
          </Link>

          {/* ナビゲーション */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/search"
              className="text-gray-700 hover:text-brand-pink transition-colors"
            >
              イベントを探す
            </Link>
            <Link
              href="/report"
              className="text-gray-700 hover:text-brand-pink transition-colors"
            >
              街コンレポート
            </Link>
            <Link
              href="/column"
              className="text-gray-700 hover:text-brand-pink transition-colors"
            >
              婚活コラム
            </Link>
            <Link
              href="/guide"
              className="text-gray-700 hover:text-brand-pink transition-colors"
            >
              初めての方へ
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-brand-pink transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA ボタン */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="hidden md:block text-gray-700 hover:text-brand-pink transition-colors"
            >
              ログイン
            </Link>
            <Link
              href="/search"
              className="bg-brand-pink text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium"
            >
              イベント検索
            </Link>
            {/* モバイルメニューボタン */}
            <button className="md:hidden text-gray-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
