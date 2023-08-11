'use client'

import DownloadNowFixed from '@/components/layout/DownloadNowFixed'
import Footer from '@/components/layout/Footer'
import Navigation from '@/components/layout/Navigation'
import DetailPageProfiles from '@/components/section/DetailedPetProfiles'
import DownloadNow from '@/components/section/DownloadNow'
import FriendlyInterface from '@/components/section/FrienldyInterface'
import Hero from '@/components/section/Hero'
import Localisation from '@/components/section/Localisation'
import RapidAlertSystem from '@/components/section/RapidAlertSystem'
import SearchFilter from '@/components/section/SearchFilter'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <DownloadNowFixed />
      <Navigation />
      <Hero />
      <div className="relative">
        <div className="hidden sm:block absolute w-full h-full -top-[5%]">
          <Image
            src="/images/desktop/PawsPath.svg" 
            alt="wave" 
            fill={true}
            className="object-contain"
          />
        </div>
        <RapidAlertSystem />
        <div className="relative xl:-top-[200px]">
          <DetailPageProfiles />
          <Localisation />
          <SearchFilter />
          <FriendlyInterface />
          <DownloadNow />
        </div>
      </div>
      <Footer />
    </>
  )
}
