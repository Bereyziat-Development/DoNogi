import Image from 'next/image'
import React from 'react'

function RapidAlertSystem() {
  return (
    <section className="relative mt-24 md:mt-0">
      <div className="md:container mx-auto">
        <div className="hidden md:block absolute w-[70%] -top-[50%] -left-[10%] aspect-square">
          <Image
            src="/images/shapes/RapidAlertShapes.svg"
            alt="alert shape"
            fill={true}
            className="object-top -z-[1]"
          />
        </div>
        <div className="hidden sm:block md:hidden absolute -top-[60%] right-0 w-full aspect-square">
          <Image
            src="/images/tablet-v/RapidAlertShapes.svg"
            alt="alert shape"
            fill={true}
            className="object-top -z-[1]"
          />
        </div>
        <div className="block sm:hidden absolute w-full aspect-[3/6]">
          <Image
            src="/images/mobile/AlertShapesPaws.svg"
            alt="alert shape"
            fill={true}
            className="object-top -z-[1] object-contain"
          />
        </div>
        <div className="relative w-full flex flex-col gap-y-3 sm:grid grid-cols-2 px-4 xl:translate-y-24">
          <div className="relative aspect-[3/4.3] sm:aspect-square">
            <Image
              src="/images/desktop/AlertImage.png"
              alt="logo"
              fill={true}
              className="object-contain"
            />
          </div>
          <div className="-mt-20 space-y-2 md:space-y-6 px-4 flex flex-col justify-center max-w-[559px]">
            <h1 className="text-gradient text-4xl lg:text-5xl font-bold leading-[150%]">
              Rapid Alert System
            </h1>
            <p className="text-paragraph text-xl lg:text-2xl leading-[150%]">
              Our app helps find missing pets by alerting nearby pet lovers, increasing the chances of locating your lost companion quickly. Owners are also notified when a matching pet is found.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RapidAlertSystem
