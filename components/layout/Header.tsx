'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* シンプルなロゴのみのヘッダー */}
        <div className="flex items-center justify-center h-24 py-4">
          {/* ロゴ */}
          <Link href="/" className="flex items-center">
            <div className="relative inline-block">
              {/* レインボーボーダー効果 */}
              <div className="bg-white px-6 py-3 rounded-lg relative" style={{
                boxShadow: '0 0 0 4px #ef4444, 0 0 0 8px #f59e0b, 0 0 0 12px #10b981, 0 0 0 16px #3b82f6, 0 0 0 20px #8b5cf6'
              }}>
                <div className="flex items-center gap-3">
                  {/* ハートアイコン */}
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-2xl">❤</span>
                  </div>
                  {/* ALICEテキスト */}
                  <h1 className="text-4xl font-bold tracking-wider" style={{
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
        </div>
      </div>
    </header>
  );
}

