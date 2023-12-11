'use client';

import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { PageTypes } from '@/@types/page-types';

export default function TermsAndConditionLayout({
  children,
  lng,
}: {
  children: React.ReactNode;
} & PageTypes['params']) {
  return (
    <div className="w-full">
      <Navigation />
      {children}
      <Footer lng={lng} />
    </div>
  );
}
