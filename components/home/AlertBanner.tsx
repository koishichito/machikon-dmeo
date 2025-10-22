'use client';

import { useState } from 'react';
import Link from 'next/link';

interface AlertBannerProps {
  message: string;
  linkUrl?: string;
  linkText?: string;
  dismissible?: boolean;
}

export default function AlertBanner({
  message,
  linkUrl,
  linkText = '詳細を見る',
  dismissible = true,
}: AlertBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-brand-pink text-white py-3 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <span className="text-sm md:text-base">{message}</span>
          {linkUrl && (
            <Link
              href={linkUrl}
              className="text-sm font-medium underline hover:no-underline whitespace-nowrap"
            >
              {linkText} »
            </Link>
          )}
        </div>
        {dismissible && (
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 text-white hover:opacity-80 transition-opacity"
            aria-label="閉じる"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
