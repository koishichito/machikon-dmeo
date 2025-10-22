// ユーザー型
export interface User {
  id: string;
  name: string;
  nameKana: string;
  gender: 'male' | 'female' | 'other';
  birthDate: string;
  email: string;
  phone: string;
  prefecture: string;
  occupation?: string;
  profileImage?: string;
  identityStatus: 'unverified' | 'pending' | 'verified';
}

// 主催者型
export interface Organizer {
  id: string;
  brandName: string;
  contact: string;
  description: string;
  socialLinks: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  rating: number;
}

// 会場型
export interface Venue {
  id: string;
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  accessInfo: string;
  capacity: number;
}

// イベントステータス
export type EventStatus = 'draft' | 'published' | 'paused' | 'sold_out' | 'cancelled' | 'archived';

// バッジタイプ
export type BadgeType = 'female_priority' | 'sold_out' | 'few_seats' | 'new' | 'popular';

// イベントバッジ
export interface EventBadge {
  id: string;
  eventId: string;
  badgeType: BadgeType;
  displayText: string;
  rule?: string;
}

// チケットタイプ
export interface TicketType {
  id: string;
  eventId: string;
  label: string; // 男性 / 女性 / その他
  price: number;
  earlyBirdPrice?: number;
  currency: string;
  quota: number;
  sold: number;
  waitlistSize: number;
}

// イベント型
export interface Event {
  id: string;
  organizerId: string;
  organizer?: Organizer;
  venueId: string;
  venue?: Venue;
  title: string;
  slug: string;
  summaryPoints: [string, string, string]; // 3つの要点
  descriptionRichText: string;
  genreIds: string[];
  tags: string[];
  startAt: string;
  endAt: string;
  receptionOpenAt: string;
  applicationDeadlineAt: string;
  status: EventStatus;
  heroMediaId: string;
  minAge?: number;
  maxAge?: number;
  dressCode?: string;
  paymentMethods: string[];
  cancellationPolicyId: string;
  badges?: EventBadge[];
  ticketTypes?: TicketType[];
}

// 予約ステータス
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'waitlisted';
export type PaymentStatus = 'unpaid' | 'paid' | 'refunded' | 'failed';

// 予約型
export interface Booking {
  id: string;
  userId: string;
  eventId: string;
  ticketTypeId: string;
  quantity: number;
  amount: number;
  paymentStatus: PaymentStatus;
  bookingStatus: BookingStatus;
  checkinCode: string;
}

// 決済型
export interface Payment {
  id: string;
  bookingId: string;
  method: 'credit_card' | 'convenience_store' | 'bank_transfer';
  providerReference: string;
  status: PaymentStatus;
  expiresAt?: string;
}

// 記事タイプ
export type ArticleType = 'report' | 'column' | 'voice' | 'staff';

// 記事型
export interface Article {
  id: string;
  type: ArticleType;
  title: string;
  slug: string;
  excerpt: string;
  bodyRichText: string;
  heroMediaId: string;
  authorId: string;
  publishedAt: string;
  tags: string[];
  seoMeta: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// メディアアセット型
export interface MediaAsset {
  id: string;
  filePath: string;
  altText: string;
  credit?: string;
  width: number;
  height: number;
  focalPoint?: {
    x: number;
    y: number;
  };
}

// FAQエントリー型
export interface FAQEntry {
  id: string;
  category: string;
  question: string;
  answerRichText: string;
  order: number;
}

// アラート型
export interface Alert {
  id: string;
  message: string;
  linkUrl?: string;
  activeFrom: string;
  activeUntil: string;
  priority: number;
  dismissible: boolean;
}

// 都道府県型
export interface Prefecture {
  id: string;
  slug: string;
  name: string;
  regionId: string;
  order: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

// 地域型
export interface Region {
  id: string;
  slug: string;
  name: string;
  order: number;
}

// ジャンル型
export interface Genre {
  id: string;
  slug: string;
  name: string;
  icon?: string;
  order: number;
}
