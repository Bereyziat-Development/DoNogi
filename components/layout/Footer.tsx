import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import WaitingListForm from '@/components/WaitingListForm';
import { PageTypes } from '@/@types/page-types';
import { useTranslation } from '@/app/i18n/client';
import Translation from '@/components/Translation';

function Footer(props: PageTypes['params']) {
  const { lng } = props;

  const [waitingListInput, setWaitingListInput] = useState<string>('');

  const { t } = useTranslation(lng);

  const isWebsitePublished = process.env.NEXT_PUBLIC_PUBLISH_WEBSITE === 'true';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-10 mt-4 xl:mt-0">
      <div className="absolute inset-0 bottom-0">
        <Image
          src="/images/desktop/FooterDeskopShape.svg"
          alt="wave"
          fill={true}
          className="object-cover hidden md:block"
        />
        <Image
          src="/images/tablet-v/FooterTVerticalShape.svg"
          alt="wave"
          fill={true}
          className="object-cover block md:hidden object-[0_65px]"
        />
      </div>
      <div className="absolute w-full h-[80px] bottom-0">
        <Image
          src="/images/desktop/FooterPawsDividerDeskop.svg"
          alt="wave"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="relative lg:container mx-auto md:grid grid-cols-3 gap-12 md:px-16">
        <div className="hidden w-full md:flex flex-col justify-end lg:justify-center -translate-x-[10rem]">
          <div className="relative w-[500px] h-[347px]">
            <Image
              src="/images/mobile/FooterDogQR.png"
              alt="phone mockup"
              fill={true}
              className="absolute object-contain object-center"
            />
          </div>
        </div>
        <div className="relative xl:-top-[80px]">
          <div className="relative w-full md:max-w-none max-w-[274px] mx-auto aspect-video">
            <Image
              src="/images/desktop/DoNogi_Logo_Horizontal.svg"
              alt="logo footer"
              fill={true}
              className="object-contain"
            />
          </div>
          {isWebsitePublished ? (
            <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-center md:justify-between gap-4 mt-10">
              <Link
                href="/"
                className="relative w-full max-w-[211px] aspect-[3/1]"
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
                className="relative w-full max-w-[211px] aspect-[3/1]"
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
            <div className="mt-10 px-6">
              <WaitingListForm
                locale={lng}
                inputValue={waitingListInput}
                setInputValue={setWaitingListInput}
                inputWidth="w-full md:w-[362px]"
                titleContent={
                  <span className="w-full text-paragraph text-lg md:text-xl">
                    <span className="gradient-text text-lg md:text-xl font-semibold">
                      {t('donogi_on_its_way')}
                    </span>{' '}
                    {t('join_waiting_list')}
                  </span>
                }
              />
            </div>
          )}
          <span className="hidden md:block text-center mt-10 text-brown">
            © {currentYear} <b>Bereyziat Development</b>,{' '}
            {t('footer_section.all_rights_reserved')}
          </span>
        </div>
        <div className="w-full flex flex-col justify-end lg:justify-center mt-10 md:mt-0">
          <h3 className="text-center leading-[200%] mx-auto tracking-[8px] text-brown md:text-sm lg:text-xl">
            <Translation text="footer_section.follow_us" locales={lng} />
          </h3>
          <div className="flex flex-row gap-8 md:gap-14 xl:grid items-center xl:grid-cols-3 xl:gap-4 mt-10 max-w-[375px] mx-auto">
            <Link
              href="/"
              className="text-center text-brown flex flex-col items-center gap-4"
            >
              <div className="max-w-[30px] lg:max-w-[64px] relative w-full aspect-square group">
                <Image
                  src="/images/social-media/FacebookActiveFalse.svg"
                  alt="facebook"
                  fill={true}
                  className="object-contain group-hover:opacity-0 transition-all duration-200"
                />
                <Image
                  src="/images/social-media/FacebookActiveTrue.svg"
                  alt="facebook"
                  fill={true}
                  className="object-contain opacity-0 group-hover:opacity-100 transition-all duration-200 scale-[1.45]"
                />
              </div>
              <span className="whitespace-nowrap">Do Nogi</span>
            </Link>
            <div className="hidden xl:block relative w-full aspect-square">
              <Image
                src="/images/desktop/FooterWhitePaw.svg"
                alt="white paw"
                fill={true}
                className="object-contain"
              />
            </div>
            <Link
              href="/"
              className="text-center text-brown flex flex-col items-center gap-4"
            >
              <div className="max-w-[30px] lg:max-w-[64px] relative w-full aspect-square group">
                <Image
                  src="/images/social-media/InstagramActiveFalse.svg"
                  alt="instagram"
                  fill={true}
                  className="object-contain group-hover:opacity-0 transition-all duration-200"
                />
                <Image
                  src="/images/social-media/InstagramActiveTrue.svg"
                  alt="instagram"
                  fill={true}
                  className="object-contain opacity-0 group-hover:opacity-100 transition-all duration-200 scale-[1.45]"
                />
              </div>
              <span>@donogi.app</span>
            </Link>
          </div>
          <div className="block md:hidden relative w-full sm:max-w-[197px] aspect-square mt-10 mb-5">
            {/*<Image*/}
            {/*  src="/images/qrcode.png"*/}
            {/*  alt="phone mockup"*/}
            {/*  fill={true}*/}
            {/*  className="object-contain hidden sm:block"*/}
            {/*/>*/}
            <Image
              src="/images/mobile/FooterDog.png"
              alt="phone mockup"
              fill={true}
              className="object-contain block sm:hidden w-full"
            />
          </div>
          <span className="block md:hidden text-center text-brown mb-14">
            © {currentYear} <b className="underline">Bereyziat Development</b>,
            <br />
            {t('footer_section.all_rights_reserved')}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
