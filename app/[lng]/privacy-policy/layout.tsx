import { PageTypes } from '@/@types/page-types';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';

export default function PrivacyPolicyLayout({
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
