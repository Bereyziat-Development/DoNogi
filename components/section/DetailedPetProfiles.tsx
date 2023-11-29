import Image from 'next/image';
import React from 'react';
import { LanguageEnum, PageTypes } from '@/@types/page-types';
import { useTranslation } from '@/app/i18n/client';

function DetailPageProfiles(props: PageTypes['params']) {
  const { lng } = props;

  const { t } = useTranslation(lng);
  const isLocalePL = lng === LanguageEnum.PL;

  return (
    <section className="relative mt-24 md:mt-0">
      <div className="px-4 md:container mx-auto">
        <div className="hidden md:block absolute w-[55%] -top-[15%] -right-[10%] aspect-square">
          <Image
            src="/images/shapes/PetProfileShapes.svg"
            alt="logo"
            fill={true}
            className="object-right-top -z-[1]"
          />
        </div>
        <div className="block sm:hidden absolute inset-0 -mt-14">
          <Image
            src="/images/mobile/PetProfilePaws.svg"
            alt="logo"
            fill={true}
            className="object-top -z-[1]"
          />
        </div>
        <div className="relative w-full flex flex-col-reverse gap-y-10 sm:grid grid-cols-2 px-4">
          <div className="justify-self-end space-y-2 md:space-y-6 flex flex-col justify-center max-w-[559px]">
            <h1 className="text-gradient text-4xl lg:text-5xl font-bold leading-[150%]">
              {t('detailed_pet_section.title')}
            </h1>
            <p className="text-paragraph text-xl lg:text-2xl leading-[150%]">
              {t('detailed_pet_section.description')}
            </p>
          </div>
          <div className="relative aspect-square">
            <Image
              src={`/images/desktop/PetProfileImage${
                isLocalePL ? 'PL' : ''
              }.png`}
              alt="logo"
              fill={true}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailPageProfiles;
