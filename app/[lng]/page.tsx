'use client';

import DownloadNowFixed from '@/components/layout/DownloadNowFixed';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import DetailPageProfiles from '@/components/section/DetailedPetProfiles';
import DownloadNow from '@/components/section/DownloadNow';
import FriendlyInterface from '@/components/section/FriendlyInterface';
import Hero from '@/components/section/Hero';
import Localisation from '@/components/section/Localisation';
import RapidAlertSystem from '@/components/section/RapidAlertSystem';
import SearchFilter from '@/components/section/SearchFilter';
import Image from 'next/image';
import { PageTypes } from '@/@types/page-types';
import { useTranslation } from '@/app/i18n/client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home(props: PageTypes) {
  const {
    params: { lng },
  } = props;

  const { i18n } = useTranslation(lng);
  const router = useRouter();

  useEffect(() => {
    function getDefaultLanguage() {
      // Check if the browser has a list of preferred languages
      if (
        Array.isArray(window.navigator.languages) &&
        window.navigator.languages.length
      ) {
        // Find if the user's browser preferences include English or Polish
        const preferredLanguage = window.navigator.languages.find(
          (lang) => lang.startsWith('en') || lang.startsWith('pl'),
        );
        // If English or Polish is found, return the first two characters (language code)
        // Otherwise, default to Polish
        return preferredLanguage ? preferredLanguage.split('-')[0] : 'pl';
      }
      // If window.navigator.languages is not available, check the browser's primary language
      const browserLanguage = window.navigator.language;
      // Return the language code if it's English or Polish, default to Polish otherwise
      return browserLanguage.startsWith('en') ||
        browserLanguage.startsWith('pl')
        ? browserLanguage.split('-')[0]
        : 'pl';
    }

    const defaultLanguage = getDefaultLanguage();

    console.log(defaultLanguage);
    if (i18n.language !== defaultLanguage) {
      i18n.changeLanguage(defaultLanguage); // Change the i18n language to the detected or default language
      router.push(`/${defaultLanguage}`); // Redirect to the correct locale
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full">
      <DownloadNowFixed lng={lng} />
      <Navigation />
      <Hero lng={lng} />
      <div className="relative">
        <div className="hidden sm:block absolute w-full h-full -top-[5%]">
          <Image
            src="/images/desktop/PawsPath.svg"
            alt="wave"
            fill
            className="object-contain"
          />
        </div>
        <div className="-mt-6 xl:-mt-48">
          <RapidAlertSystem lng={lng} />
          <DetailPageProfiles lng={lng} />
          <Localisation lng={lng} />
          <SearchFilter lng={lng} />
          <FriendlyInterface lng={lng} />
          <DownloadNow lng={lng} />
        </div>
      </div>
      <Footer lng={lng} />
    </div>
  );
}
