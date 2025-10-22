import Link from 'next/link';

interface Genre {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  borderColor: string;
  bgColor: string;
}

const genres: Genre[] = [
  { id: '1', name: '趣味コン', slug: 'hobby', icon: '🎨', borderColor: 'border-blue-400', bgColor: 'bg-blue-50' },
  { id: '2', name: '32歳〜45歳', slug: 'age-32-45', icon: '👥', borderColor: 'border-green-400', bgColor: 'bg-green-50' },
  { id: '3', name: '婚活パーティー', slug: 'marriage-party', icon: '💑', borderColor: 'border-purple-400', bgColor: 'bg-purple-50' },
  { id: '4', name: 'お見合いパーティー', slug: 'omiai-party', icon: '👔', borderColor: 'border-teal-400', bgColor: 'bg-teal-50' },
  { id: '5', name: 'グルメコン', slug: 'gourmet', icon: '🍽️', borderColor: 'border-pink-400', bgColor: 'bg-pink-50' },
  { id: '6', name: 'アニメコン', slug: 'anime', icon: '🎬', borderColor: 'border-indigo-400', bgColor: 'bg-indigo-50' },
  { id: '7', name: 'スポーツコン', slug: 'sports', icon: '⚽', borderColor: 'border-orange-400', bgColor: 'bg-orange-50' },
  { id: '8', name: '恋活パーティー', slug: 'love-party', icon: '💕', borderColor: 'border-cyan-400', bgColor: 'bg-cyan-50' },
];

export default function GenreCarousel() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          ジャンルから探す
        </h2>

        <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex md:grid md:grid-cols-4 gap-4 pb-4 md:pb-0">
            {genres.map((genre) => (
              <Link
                key={genre.id}
                href={`/search?genre=${genre.slug}`}
                className="flex-shrink-0 w-40 md:w-auto"
              >
                <div className={`${genre.bgColor} border-4 ${genre.borderColor} rounded-lg p-6 hover:shadow-lg transition-all text-center h-full`}>
                  <div className="text-4xl mb-3">{genre.icon}</div>
                  <h3 className="font-bold text-gray-800 text-sm">
                    {genre.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

