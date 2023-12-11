import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { PageTypes } from '@/@types/page-types';

export default function TermsAndConditionLayout({
  children,
  params: { lng },
}: PageTypes) {
  return (
    <div className="w-full">
      <Navigation />
      {children}
      <Footer lng={lng} />
    </div>
  );
}
