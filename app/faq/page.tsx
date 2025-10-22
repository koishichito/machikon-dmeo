'use client';

import { useState } from 'react';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    category: '参加について',
    question: '初めてでも参加できますか？',
    answer: 'はい、もちろんです！初めての方も安心してご参加いただけるよう、スタッフがサポートいたします。多くの参加者が初めての方ですので、お気軽にお越しください。',
  },
  {
    id: '2',
    category: '参加について',
    question: '一人でも参加できますか？',
    answer: 'はい、お一人での参加も大歓迎です。むしろお一人での参加の方が多いイベントもございます。新しい出会いを求めている方同士で楽しい時間をお過ごしいただけます。',
  },
  {
    id: '3',
    category: '参加について',
    question: '服装はどのようなものが良いですか？',
    answer: 'イベントによって異なりますが、基本的にはカジュアルな服装で問題ありません。各イベントページにドレスコードが記載されている場合がありますので、ご確認ください。',
  },
  {
    id: '4',
    category: '予約・支払い',
    question: 'キャンセルはできますか？',
    answer: 'イベント開催日の3日前までキャンセルが可能です。ただし、キャンセル料が発生する場合がございます。詳しくはキャンセルポリシーをご確認ください。',
  },
  {
    id: '5',
    category: '予約・支払い',
    question: '支払い方法は何がありますか？',
    answer: 'クレジットカード、コンビニ決済、銀行振込をご利用いただけます。クレジットカードの場合は即時決済、その他の場合は事前決済となります。',
  },
  {
    id: '6',
    category: '予約・支払い',
    question: '予約確認メールが届きません',
    answer: '迷惑メールフォルダをご確認ください。それでも見つからない場合は、メールアドレスが正しく登録されているかマイページでご確認いただくか、お問い合わせください。',
  },
  {
    id: '7',
    category: '当日について',
    question: '遅刻してしまった場合はどうなりますか？',
    answer: 'イベント開始後30分までは受付可能ですが、それ以降は参加できない場合がございます。また、遅刻による返金は承っておりませんので、時間に余裕を持ってお越しください。',
  },
  {
    id: '8',
    category: '当日について',
    question: '本人確認書類は必要ですか？',
    answer: 'はい、必須です。運転免許証、パスポート、マイナンバーカードなど、顔写真付きの公的身分証明書をご持参ください。',
  },
];

const categories = Array.from(new Set(faqData.map((item) => item.category)));

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (id: string) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(id)) {
      newOpenQuestions.delete(id);
    } else {
      newOpenQuestions.add(id);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const filteredFAQ = activeCategory
    ? faqData.filter((item) => item.category === activeCategory)
    : faqData;

  return (
    <div className="py-12 bg-brand-gray-light min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          よくある質問
        </h1>
        <p className="text-center text-gray-600 mb-8">
          お客様からよくいただく質問をまとめました
        </p>

        {/* カテゴリフィルター */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === null
                ? 'bg-brand-pink text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            すべて
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-brand-pink text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ アコーディオン */}
        <div className="space-y-3">
          {filteredFAQ.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => toggleQuestion(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start space-x-4 flex-1">
                  <span className="bg-brand-pink text-white px-3 py-1 rounded text-sm font-medium flex-shrink-0">
                    Q
                  </span>
                  <span className="font-medium text-gray-800">
                    {item.question}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openQuestions.has(item.id) ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openQuestions.has(item.id) && (
                <div className="px-6 pb-4 pt-0">
                  <div className="flex items-start space-x-4 pl-0">
                    <span className="bg-brand-navy text-white px-3 py-1 rounded text-sm font-medium flex-shrink-0">
                      A
                    </span>
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* お問い合わせセクション */}
        <div className="mt-12 bg-white rounded-lg p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            解決しない場合は
          </h2>
          <p className="text-gray-600 mb-6">
            お探しの情報が見つからない場合は、お気軽にお問い合わせください
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-pink text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            お問い合わせフォーム
          </a>
        </div>
      </div>
    </div>
  );
}
