'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    bookingNumber: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: 実際のAPI呼び出しを実装
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-12 bg-brand-gray-light min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-lg p-8 text-center shadow-lg">
            <div className="text-6xl mb-4">✓</div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              送信完了
            </h2>
            <p className="text-gray-600 mb-6">
              お問い合わせいただきありがとうございます。
              <br />
              担当者より2営業日以内にご連絡いたします。
            </p>
            <a
              href="/"
              className="inline-block bg-brand-pink text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              ホームに戻る
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-brand-gray-light min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          お問い合わせ
        </h1>
        <p className="text-center text-gray-600 mb-8">
          ご質問・ご要望がございましたら、お気軽にお問い合わせください
        </p>

        {/* 連絡先情報 */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-2 text-gray-800">電話でのお問い合わせ</h3>
              <p className="text-2xl font-bold text-brand-pink mb-1">03-XXXX-XXXX</p>
              <p className="text-sm text-gray-600">受付時間: 10:00-18:00（平日）</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-2 text-gray-800">メールでのお問い合わせ</h3>
              <p className="text-lg text-brand-pink mb-1">support@machikon-alice.example.com</p>
              <p className="text-sm text-gray-600">2営業日以内に返信いたします</p>
            </div>
          </div>
        </div>

        {/* お問い合わせフォーム */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">お問い合わせフォーム</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* お名前 */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent"
                placeholder="山田 太郎"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent"
                placeholder="example@email.com"
              />
            </div>

            {/* お問い合わせカテゴリ */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                お問い合わせカテゴリ <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent"
              >
                <option value="">選択してください</option>
                <option value="event">イベントについて</option>
                <option value="booking">予約・キャンセルについて</option>
                <option value="payment">支払いについて</option>
                <option value="account">アカウントについて</option>
                <option value="technical">技術的な問題</option>
                <option value="other">その他</option>
              </select>
            </div>

            {/* 予約番号（任意） */}
            <div>
              <label htmlFor="bookingNumber" className="block text-sm font-medium text-gray-700 mb-2">
                予約番号（お持ちの場合）
              </label>
              <input
                type="text"
                id="bookingNumber"
                name="bookingNumber"
                value={formData.bookingNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent"
                placeholder="BK-XXXXXXXX"
              />
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent resize-none"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            {/* 送信ボタン */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-pink text-white px-12 py-3 rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '送信中...' : '送信する'}
              </button>
            </div>
          </form>
        </div>

        {/* 注意事項 */}
        <div className="mt-6 text-sm text-gray-600 text-center">
          <p>
            お問い合わせいただいた内容は、2営業日以内に担当者よりご連絡いたします。
            <br />
            土日祝日にいただいたお問い合わせは、翌営業日以降の対応となります。
          </p>
        </div>
      </div>
    </div>
  );
}
