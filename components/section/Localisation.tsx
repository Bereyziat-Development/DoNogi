import Image from 'next/image';
import React from 'react';
import { LanguageEnum, PageTypes } from '@/@types/page-types';
import { useTranslation } from '@/app/i18n/client';

function Localisation(props: PageTypes['params']) {
  const { lng } = props;

  const { t } = useTranslation(lng);
  const isLocalePL = lng === LanguageEnum.PL;

  return (
    <section className="relative mt-24 md:mt-0">
      <div className="px-4 md:container mx-auto">
        <div className="hidden sm:block absolute w-full md:w-[65%] -top-[40%] md:-top-[10%] -left-[30%] md:-left-[10%] aspect-square">
          <Image
            src="/images/shapes/LocalisationShapes.svg"
            alt="logo"
            fill={true}
            className="object-top -z-[1]"
          />
        </div>
        <div className="block sm:hidden absolute w-full aspect-[1/2] -top-[5%] left-0">
          <Image
            src="/images/mobile/LocalisationShapesPaws.svg"
            alt="logo"
            fill={true}
            className="object-top -z-[1] object-contain"
          />
        </div>
        <div className="relative w-full flex flex-col sm:grid grid-cols-2 px-4">
          <div className="relative aspect-square">
            <Image
              src={`/images/desktop/LocalisationImage${
                isLocalePL ? 'PL' : ''
              }.png`}
              alt="logo"
              fill={true}
              className="object-contain z-10"
            />
          </div>
          <div className="sm:-mt-32 space-y-2 md:space-y-6 sm:px-4 flex flex-col justify-center max-w-[559px] z-10">
            <h1
              className={`text-gradient ${
                isLocalePL ? 'h-[3.5rem] transform translate-y-2' : ''
              } text-4xl lg:text-5xl font-bold leading-[150%]`}
            >
              {t('localization_section.title')}
            </h1>
            <p className="text-paragraph text-xl lg:text-2xl leading-[150%]">
              {t('localization_section.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Localisation;
