import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section className="px-8 md:px-0 lg:container mx-auto md:pt-10 sm:pt-0 md:py-20 xl:py-10">
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
      <div className="md:py-20 w-full relative flex flex-col-reverse items-center md:grid grid-cols-2">
        <div className="max-w-[537px] md:max-w-none space-y-2 md:space-y-6 md:px-8 flex flex-col justify-center">
          <h1 className="text-gradient text-5xl lg:text-6xl font-bold leading-[140%]">
            Find Your Lost Pet with Ease in Warsaw!
          </h1>
          <p className="text-paragraph text-lg md:text-xl leading-[150%]">
            Welcome to our app designed to reunite pet owners with their beloved furry friends in the bustling city of Warsaw! We understand the heartbreak and worry that comes with losing a pet, which is why we&apos;ve created the app to make the search for lost pets quicker, easier, and more effective than ever before.
          </p>
          <div className="pt-4 md:pt-0">
              <button className="btn-gradient px-6 py-3.5 font-semibold ">
              Download Do Nogi app now!
              </button>
          </div>
        </div>
        <div className="w-full aspect-square mt-10 sm:mt-0 overflow-x-hidden">
          <div className="w-full sm:w-[90%] md:w-[72%] right-[50%] translate-x-[50%] md:translate-x-0 md:-right-[18%] md:-top-[20px] xl:-top-[100px] absolute aspect-square overflow-x-hidden" >
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
  )
}

export default Hero
