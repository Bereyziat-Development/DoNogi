import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="relative py-10 mt-24 xl:mt-0">
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
      <div className="px-4 relative lg:container mx-auto md:grid grid-cols-3 gap-10">
        <div className="hidden w-full md:flex flex-col justify-end lg:justify-center">
          <div className="relative lg:w-[347px] aspect-square">
            <Image
              src="/images/qrcode.png" 
              alt="phone mockup" 
              fill={true}
              className="object-contain"
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
          <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-center md:justify-between gap-4 mt-10">
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
          <span className="hidden md:block text-center mt-10 text-brown">
            © 2023 <b>Bereyziat Development</b>, All rights reserved.
          </span>
        </div>
        <div className="w-full flex flex-col justify-end lg:justify-center mt-10 md:mt-0">
          <h3 className="text-center max-w-[272px] mx-auto leading-[150%] xl:leading-[200%] tracking-[8px] text-brown lg:text-xl">
            Follow us <br className="block sm:hidden" />on social media
          </h3>
          <div className="grid grid-cols-3 gap-4 mt-10 max-w-[373px] mx-auto">
            <Link href="/" className="text-center text-brown flex flex-col items-center gap-4">
              <div className="max-w-[50px] sm:max-w-[64px] relative w-full aspect-square group">
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
              <span>Do Nogi</span>
            </Link>
            <div className="relative w-full aspect-square">
              <Image
                src="/images/desktop/FooterWhitePaw.svg" 
                alt="white paw" 
                fill={true}
                className="object-contain"
              />
            </div>
            <Link href="/" className="text-center text-brown flex flex-col items-center gap-4">
              <div className="max-w-[50px] sm:max-w-[64px] relative w-full aspect-square group">
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
          <div className="block md:hidden relative w-full sm:max-w-[197px] mx-auto aspect-square mt-10 mb-5">
            <Image
              src="/images/qrcode.png" 
              alt="phone mockup" 
              fill={true}
              className="object-contain hidden sm:block"
            />
            <Image
              src="/images/mobile/FooterDog.png" 
              alt="phone mockup" 
              fill={true}
              className="object-contain block sm:hidden scale-110"
            />
          </div>
          <span className="block md:hidden text-center text-brown mb-14">
            © 2023 <b className="underline">Bereyziat Development</b>,
            <br />All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer