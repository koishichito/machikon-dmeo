'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* ロゴ */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <div className="relative">
              <div className="bg-white px-4 py-2 rounded-lg" style={{
                boxShadow: '0 0 0 3px #ef4444, 0 0 0 6px #f59e0b, 0 0 0 9px #10b981, 0 0 0 12px #3b82f6, 0 0 0 15px #8b5cf6'
              }}>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-xl">❤</span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-wider" style={{
                    background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    ALICE
                  </h1>
                </div>
              </div>
            </div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              ホーム
            </Link>
            <Link href="/video-generator" className="text-gray-700 hover:text-purple-600 font-medium transition-colors flex items-center gap-2">
              <span className="text-xl">🎬</span>
              動画生成
            </Link>
            <Link href="/guide" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              ご利用ガイド
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              よくある質問
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              お問い合わせ
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors">
                ホーム
              </Link>
              <Link href="/video-generator" className="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors flex items-center gap-2">
                <span className="text-xl">🎬</span>
                動画生成
              </Link>
              <Link href="/guide" className="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors">
                ご利用ガイド
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors">
                よくある質問
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors">
                お問い合わせ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

