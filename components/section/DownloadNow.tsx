import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import WaitingListForm from '@/components/WaitingListForm';

function DownloadNow() {
  const isWebsitePublished = process.env.NEXT_PUBLIC_PUBLISH_WEBSITE === 'true';

  return (
    <section className="my-20 mb-4 md:mb-40 sm:mt-0 md:container mx-auto pt-20 px-6 md:px-16">
      <div
        className="relative rounded-[60px] border-[3px] border-white bg-yellow py-8 md:py-14 px-4 overflow-hidden"
        style={{
          boxShadow:
            '40px 40px 64px 0px rgba(255, 216, 40, 0.30), 10px 10px 40px 0px rgba(214, 106, 28, 0.50)',
        }}
      >
        <div className="hidden lg:block absolute left-0 top-0 inset-y-0 lg:aspect-square xl:aspect-video">
          <Image
            src="/images/desktop/PhoneMockupsImage.png"
            alt="phone mockup"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="absolute lg:hidden w-full left-0 top-0 aspect-[2/3]">
          <Image
            src="/images/tablet-v/PhoneMockupsImage.png"
            alt="phone mockup"
            fill={true}
            className="object-contain object-top"
          />
        </div>
        <div className="hidden lg:block absolute right-0 -bottom-8 inset-y-0 lg:aspect-[2/3] translate-y-3 translate-x-14">
          <Image
            src="/images/desktop/LostDogImage.png"
            alt="lost dog"
            fill={true}
            className="object-contain"
          />
        </div>

        <div className="block lg:hidden w-full aspect-video" />

        <div className="relative md:max-w-[405px] xl:max-w-[505px] mx-auto px-2 sm:px-10 md:px-0 mt-10 lg:mt-0 xl:mr-[22rem]">
          <h1 className="text-gradient font-bold text-4xl sm:text-5xl xl:text-6xl text-center md:text-left whitespace-nowrap">
            Download Now!
          </h1>
          <p className="text-lg md:text-xl leading-[150%] mt-8 text-secondary">
            Join our community of pet lovers in Warsaw, and help bring joy and
            relief to countless families by reuniting them with their furry
            companions.
          </p>
          {isWebsitePublished ? (
            <div className="w-full flex items-center justify-between gap-4 mt-10">
              <Link
                href="/"
                className="relative w-full aspect-[3/1] md:max-w-[180px] xl:max-w-[211px]"
              >
                <Image
                  src="/images/app-store.png"
                  alt="app store badge"
                  fill={true}
                  className="object-contain"
                />
              </Link>
              <Link
                href="/"
                className="relative w-full max-w-[160px] aspect-[3/1] md:max-w-[180px] xl:max-w-[211px]"
              >
                <Image
                  src="/images/google-play.png"
                  alt="google play badge"
                  fill={true}
                  className="object-contain"
                />
              </Link>
            </div>
          ) : (
            <div className="mt-10">
              <WaitingListForm
                inputWidth="w-full md:w-[362px]"
                titleContent={
                  <span className="w-full text-paragraph text-lg md:text-xl">
                    Join our waiting list!
                  </span>
                }
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default DownloadNow;
