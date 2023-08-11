import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DownloadNow() {
  return (
    <section className="mt-20 sm:mt-0 md:container mx-auto pt-20 px-4">
      <div
        className="relative rounded-[60px] border-[3px] border-white bg-yellow py-14 px-4 overflow-hidden"
        style={{
          boxShadow:
            '40px 40px 64px 0px rgba(255, 216, 40, 0.30), 10px 10px 40px 0px rgba(214, 106, 28, 0.50)',
        }}
      >
        <div className="hidden md:block absolute left-0 top-0 inset-y-0 aspect-video">
          <Image 
            src="/images/desktop/PhoneMockupsImage.png" 
            alt="phone mockup" 
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="absolute md:hidden w-full left-0 top-0 aspect-[3/4]">
          <Image 
            src="/images/tablet-v/PhoneMockupsImage.png" 
            alt="phone mockup" 
            fill={true}
            className="object-contain object-top"
          />
        </div>
        <div className="hidden md:block absolute right-0 inset-y-0 aspect-[3.2/4] translate-y-3">
          <Image 
            src="/images/desktop/LostDogImage.png" 
            alt="lost dog" 
            fill={true}
            className="object-contain"
          />
        </div>

        <div className="block md:hidden w-full aspect-video" />

        <div className="relative md:max-w-[505px] mx-auto px-4 sm:px-10 md:px-0 mt-10 md:mt-0">
          <h1 className="text-gradient font-bold text-4xl sm:text-5xl lg:text-6xl text-center md:text-left">
            Download Now!
          </h1>
          <p className="text-lg md:text-xl leading-[150%] mt-8 text-secondary">
            Join our community of pet lovers in Warsaw, and help bring joy and relief to countless families by reuniting them with their furry companions.z
          </p>
          <div className="w-full flex items-center justify-between gap-4 mt-10">
            <Link href="/" className="relative w-full max-w-[211px] aspect-[3/1]">
              <Image 
                src="/images/app-store.png" 
                alt="app store badge" 
                fill={true}
                className="object-contain"
              />
            </Link>
            <Link href="/" className="relative w-full max-w-[211px] aspect-[3/1]">
              <Image 
                src="/images/google-play.png" 
                alt="google play badge" 
                fill={true}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadNow