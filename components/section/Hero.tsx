import Image from 'next/image';
import React, { useState } from 'react';
import WaitingListForm from '@/components/WaitingListForm';
import { PageTypes } from '@/@types/page-types';
import Translation from '@/components/Translation';
import { useTranslation } from '@/app/i18n/client';

function Hero(props: PageTypes['params']) {
  const { lng } = props;
  const [waitingListInput, setWaitingListInput] = useState<string>('');

  const { t } = useTranslation(lng);

  const isWebsitePublished = process.env.NEXT_PUBLIC_PUBLISH_WEBSITE === 'true';

  return (
    <section className="lg:container mx-auto md:pt-10 sm:pt-0 md:py-20 xl:py-10">
      <div className="hidden md:block absolute w-[60%] top-0 right-0 aspect-square">
        <Image
          src="/images/desktop/HeroShapes.svg"
          alt="hero-shape"
          fill={true}
          className="object-top"
        />
      </div>
      <div className="block md:hidden absolute w-full top-0 right-0 aspect-square">
        <Image
          src="/images/tablet-v/HeroShapes.svg"
          alt="hero-shape"
          fill={true}
          className="object-top"
        />
      </div>
      <div className="px-8 md:py-20 w-full relative flex flex-col-reverse items-center md:grid grid-cols-2">
        <div className="max-w-[537px] mt-16 lg:mt-0 md:max-w-none space-y-2 md:space-y-6 md:px-8 flex flex-col justify-center z-50">
          <h1 className="text-gradient text-5xl lg:text-6xl font-bold leading-[150%]">
            <Translation locales={lng} text="hero_section.title" />
          </h1>
          <p className="text-paragraph text-lg md:text-xl leading-[150%]">
            <Translation locales={lng} text="hero_section.description" />
          </p>
          <div className="pt-4 md:pt-0">
            {isWebsitePublished ? (
              <button className="btn-gradient box-shadow-gradient px-6 py-3.5 font-semibold">
                {t('buttons.cta')}
              </button>
            ) : (
              <WaitingListForm
                locale={lng}
                inputValue={waitingListInput}
                setInputValue={setWaitingListInput}
                inputWidth="w-full md:w-[380px]"
                titleContent={
                  <span className="w-full text-paragraph text-lg md:text-xl">
                    <span className="text-gradient text-lg md:text-xl font-semibold">
                      {t('donogi_on_its_way')}
                    </span>{' '}
                    {t('join_waiting_list')}
                  </span>
                }
              />
            )}
          </div>
        </div>
        <div className="w-full aspect-square mt-10 sm:mt-0 overflow-x-hidden">
          <div className="w-full sm:w-[90%] md:w-[72%] right-[50%] translate-x-[50%] md:translate-x-0 md:-right-[18%] md:-top-[20px] xl:-top-[100px] absolute aspect-square overflow-x-hidden">
            <Image
              src="/images/desktop/HeroImage.png"
              alt="logo"
              fill={true}
              className="object-contain drop-shadow-[0.5rem_2rem_1.5rem_var(--primary)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
