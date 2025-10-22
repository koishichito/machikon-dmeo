import Link from 'next/link';

interface Genre {
  id: string;
  name: string;
  slug: string;
  icon?: string;
}

const genres: Genre[] = [
  { id: '1', name: '趣味コン', slug: 'hobby', icon: '🎨' },
  { id: '2', name: '32歳〜45歳', slug: 'age-32-45', icon: '👥' },
  { id: '3', name: '婚活パーティー', slug: 'marriage-party', icon: '💑' },
  { id: '4', name: 'お見合いパーティー', slug: 'omiai-party', icon: '👔' },
  { id: '5', name: 'グルメコン', slug: 'gourmet', icon: '🍽️' },
  { id: '6', name: 'アニメコン', slug: 'anime', icon: '🎬' },
  { id: '7', name: 'スポーツコン', slug: 'sports', icon: '⚽' },
  { id: '8', name: '恋活パーティー', slug: 'love-party', icon: '💕' },
];

export default function GenreCarousel() {
  return (
    <section className="py-12 bg-white">
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
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-brand-pink hover:shadow-lg transition-all text-center">
                  <div className="text-4xl mb-3">{genre.icon}</div>
                  <h3 className="font-medium text-gray-800 text-sm">
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
