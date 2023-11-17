import Image from 'next/image';
import React from 'react';
import { PageTypes } from '@/@types/page-types';
import { useTranslation } from '@/app/i18n/client';

function FriendlyInterface(props: PageTypes['params']) {
  const { lng } = props;

  const { t } = useTranslation(lng);

  return (
    <section className="relative my-24 md:mt-0">
      <div className="container mx-auto">
        <div className="hidden sm:block absolute w-full max-w-[650px] md:max-w-none md:w-[40%] aspect-square rotate-180 md:rotate-0">
          <Image
            src="/images/shapes/InterfaceShapes.svg"
            alt="logo"
            fill={true}
            className="object-top"
          />
        </div>
        <div className="sm:hidden absolute left-0 -top-[12%] w-full aspect-[3/5]">
          <Image
            src="/images/mobile/InterfaceShapesPaws.svg"
            alt="logo"
            fill={true}
            className="object-contain"
          />
        </div>
        <div className="relative w-full flex flex-col items-center md:grid grid-cols-2 px-4 xl:translate-y-14">
          <div className="relative w-full aspect-square max-w-[680px]">
            <Image
              src="/images/desktop/NewFriends.png"
              alt="logo"
              fill={true}
              className="object-contain"
            />
          </div>
          <div className="-mt-10 md:-mt-20 space-y-2 md:space-y-6 px-4 flex flex-col justify-center max-w-[500px] md:max-w-[559px]">
            <h1 className="text-gradient text-4xl lg:text-5xl font-bold leading-[150%] z-50">
              {t('friendly_interface_section.title')}
            </h1>
            <p className="text-paragraph text-xl lg:text-2xl leading-[150%]">
              {t('friendly_interface_section.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FriendlyInterface;
