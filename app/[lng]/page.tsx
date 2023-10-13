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

// TODO: Hero, Detailed Pet, Enhanced Search Filters shapes

export default function Home(props: PageTypes) {
  const {
    params: { lng },
  } = props;

  return (
    <div className="w-full">
      <DownloadNowFixed />
      <Navigation />
      <Hero />
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
          <RapidAlertSystem />
          <DetailPageProfiles />
          <Localisation />
          <SearchFilter />
          <FriendlyInterface />
          <DownloadNow />
        </div>
      </div>
      <Footer />
    </div>
  );
}
