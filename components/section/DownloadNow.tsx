import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import WaitingListForm from '@/components/WaitingListForm';
import { PageTypes } from '@/@types/page-types';
import { useTranslation } from '@/app/i18n/client';

function DownloadNow(props: PageTypes['params']) {
  const { lng } = props;
  const [waitingListInput, setWaitingListInput] = useState<string>('');

  const { t } = useTranslation(lng);

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
        <div className="hidden xl:block absolute xl:-left-16 top-0 inset-y-0 lg:aspect-square xl:aspect-video">
          <Image
            src="/images/desktop/PhoneMockupsImage.png"
            alt="phone mockup"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="absolute xl:hidden w-full left-0 top-0 aspect-[2/3]">
          <Image
            src="/images/tablet-v/PhoneMockupsImage.png"
            alt="phone mockup"
            fill={true}
            className="object-contain object-top"
          />
        </div>
        <div className="hidden xl:block absolute right-0 -bottom-8 inset-y-0 lg:aspect-[1/2.4] xl:aspect-[2/3.5] lg:translate-y-24 xl:translate-y-12 translate-x-14">
          <Image
            src="/images/desktop/LostDogImage.png"
            alt="lost dog"
            fill={true}
            className="object-contain"
          />
        </div>

        <div className="block xl:hidden w-full aspect-video" />

        <div className="relative sm:max-w-[405px] md:max-w-[505px] mx-auto px-2 sm:px-10 xl:px-0 mt-10 xl:mt-0 xl:translate-x-44 xl:mr-[22rem]">
          <h1 className="text-gradient font-bold text-4xl sm:text-5xl xl:text-6xl text-center md:text-left whitespace-nowrap">
            {t('download_now_section.title')}
          </h1>
          <p className="text-lg md:text-xl leading-[150%] mt-8 text-secondary">
            {t('download_now_section.description')}
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
                locale={lng}
                inputValue={waitingListInput}
                setInputValue={setWaitingListInput}
                inputWidth="w-full md:w-[362px]"
                titleContent={
                  <span className="w-full text-paragraph text-lg md:text-xl">
                    {t('join_waiting_list')}
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
