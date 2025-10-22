import Link from 'next/link';

export default function GuidePage() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          初めての方へ
        </h1>
        <p className="text-center text-gray-600 mb-12">
          街コン・婚活イベントへの参加が初めての方でも安心してご利用いただけます
        </p>

        {/* 街コンとは */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-brand-pink to-pink-400 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">街コンとは？</h2>
            <p className="text-lg leading-relaxed mb-6">
              街コンは、地域活性化と出会いの場を提供するイベントです。
              同じ趣味や興味を持つ人々が集まり、カジュアルな雰囲気の中で新しい出会いを楽しむことができます。
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="font-bold text-lg mb-2">気軽な出会い</h3>
                <p className="text-sm opacity-90">
                  カジュアルな雰囲気で、気軽に参加できます
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold text-lg mb-2">多様なジャンル</h3>
                <p className="text-sm opacity-90">
                  趣味や年齢層に合わせたイベントが豊富
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="font-bold text-lg mb-2">安心・安全</h3>
                <p className="text-sm opacity-90">
                  本人確認を実施し、安全に配慮しています
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 参加の流れ */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            参加の流れ
          </h2>
          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'イベントを探す',
                description: 'エリア、ジャンル、日程から気になるイベントを見つけましょう',
                icon: '🔍',
              },
              {
                step: '2',
                title: '予約・決済',
                description: '参加したいイベントを見つけたら、オンラインで予約・決済を完了させます',
                icon: '💳',
              },
              {
                step: '3',
                title: '確認メール受信',
                description: '予約完了後、確認メールが届きます。当日必要な情報を確認しましょう',
                icon: '📧',
              },
              {
                step: '4',
                title: 'イベント参加',
                description: '本人確認書類を持って会場へ。スタッフがご案内いたします',
                icon: '🎉',
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-pink text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="bg-brand-gray-light rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{item.icon}</span>
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* よくある不安 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            よくある不安にお答えします
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: '一人で参加しても大丈夫？',
                a: 'はい！多くの方がお一人で参加されています。スタッフがサポートしますのでご安心ください。',
              },
              {
                q: '話すのが苦手なんですが...',
                a: 'スタッフが会話のきっかけを作ったり、ゲーム形式のイベントもあるので自然に話せます。',
              },
              {
                q: '年齢制限はありますか？',
                a: 'イベントによって対象年齢が設定されています。同年代の方と出会えるので安心です。',
              },
              {
                q: 'キャンセルできますか？',
                a: 'イベント開催日の3日前までキャンセル可能です。詳しくはキャンセルポリシーをご確認ください。',
              },
            ].map((item, index) => (
              <div key={index} className="bg-brand-gray-light rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-start gap-2">
                  <span className="text-brand-pink">Q.</span>
                  {item.q}
                </h3>
                <p className="text-gray-600 flex items-start gap-2">
                  <span className="text-brand-navy font-bold">A.</span>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 持ち物チェックリスト */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            当日の持ち物チェックリスト
          </h2>
          <div className="bg-brand-gray-light rounded-lg p-8">
            <ul className="space-y-4">
              {[
                '本人確認書類（運転免許証、パスポート、マイナンバーカードなど）',
                '予約確認メール（印刷またはスマートフォンで表示）',
                '参加費（現地決済の場合）',
                '名刺（お持ちの方）',
                '筆記用具',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-brand-pink flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-brand-pink to-pink-400 text-white rounded-2xl p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            さあ、素敵な出会いを見つけましょう！
          </h2>
          <p className="text-lg mb-8 opacity-90">
            全国各地で毎日開催中。あなたにぴったりのイベントがきっと見つかります
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search"
              className="bg-white text-brand-pink px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-shadow inline-block"
            >
              イベントを探す
            </Link>
            <Link
              href="/faq"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-brand-pink transition-colors inline-block"
            >
              FAQを見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
