'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Prefecture {
  id: string;
  name: string;
  slug: string;
  borderColor: string;
}

const regions = [
  {
    id: '1',
    name: '関東',
    prefectures: [
      { id: '1', name: '東京都', slug: 'tokyo', borderColor: 'border-blue-400' },
      { id: '2', name: '神奈川県', slug: 'kanagawa', borderColor: 'border-orange-400' },
      { id: '3', name: '千葉県', slug: 'chiba', borderColor: 'border-purple-400' },
      { id: '4', name: '埼玉県', slug: 'saitama', borderColor: 'border-teal-400' },
      { id: '5', name: '茨城県', slug: 'ibaraki', borderColor: 'border-pink-400' },
      { id: '6', name: '栃木県', slug: 'tochigi', borderColor: 'border-indigo-400' },
      { id: '7', name: '群馬県', slug: 'gunma', borderColor: 'border-orange-400' },
    ],
  },
  {
    id: '2',
    name: '関西',
    prefectures: [
      { id: '8', name: '大阪府', slug: 'osaka', borderColor: 'border-cyan-400' },
      { id: '9', name: '兵庫県', slug: 'hyogo', borderColor: 'border-green-400' },
      { id: '10', name: '京都府', slug: 'kyoto', borderColor: 'border-purple-400' },
      { id: '11', name: '奈良県', slug: 'nara', borderColor: 'border-pink-400' },
      { id: '12', name: '滋賀県', slug: 'shiga', borderColor: 'border-blue-400' },
      { id: '13', name: '和歌山県', slug: 'wakayama', borderColor: 'border-orange-400' },
    ],
  },
  {
    id: '3',
    name: '中部',
    prefectures: [
      { id: '14', name: '愛知県', slug: 'aichi', borderColor: 'border-orange-400' },
      { id: '15', name: '静岡県', slug: 'shizuoka', borderColor: 'border-green-400' },
      { id: '16', name: '岐阜県', slug: 'gifu', borderColor: 'border-purple-400' },
      { id: '17', name: '三重県', slug: 'mie', borderColor: 'border-pink-400' },
      { id: '18', name: '長野県', slug: 'nagano', borderColor: 'border-blue-400' },
      { id: '19', name: '新潟県', slug: 'niigata', borderColor: 'border-teal-400' },
      { id: '20', name: '富山県', slug: 'toyama', borderColor: 'border-indigo-400' },
      { id: '21', name: '石川県', slug: 'ishikawa', borderColor: 'border-cyan-400' },
      { id: '22', name: '福井県', slug: 'fukui', borderColor: 'border-orange-400' },
      { id: '23', name: '山梨県', slug: 'yamanashi', borderColor: 'border-pink-400' },
    ],
  },
  {
    id: '4',
    name: 'その他',
    prefectures: [
      { id: '24', name: '北海道', slug: 'hokkaido', borderColor: 'border-blue-400' },
      { id: '25', name: '宮城県', slug: 'miyagi', borderColor: 'border-green-400' },
      { id: '26', name: '福岡県', slug: 'fukuoka', borderColor: 'border-purple-400' },
      { id: '27', name: '広島県', slug: 'hiroshima', borderColor: 'border-orange-400' },
      { id: '28', name: '沖縄県', slug: 'okinawa', borderColor: 'border-pink-400' },
    ],
  },
];

export default function AreaSelector() {
  const [activeRegion, setActiveRegion] = useState(regions[0].id);

  const currentRegion = regions.find((r) => r.id === activeRegion);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          エリアから探す
        </h2>

        {/* 地域タブ */}
        <div className="flex justify-center mb-6 space-x-2 overflow-x-auto">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                activeRegion === region.id
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* 都道府県グリッド */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {currentRegion?.prefectures.map((prefecture) => (
            <Link
              key={prefecture.id}
              href={`/search?area=${prefecture.slug}`}
              className={`bg-white border-4 ${prefecture.borderColor} rounded-lg p-4 text-center hover:shadow-lg transition-all`}
            >
              <span className="text-gray-800 font-bold">
                {prefecture.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

