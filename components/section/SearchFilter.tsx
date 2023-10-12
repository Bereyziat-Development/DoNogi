import Image from 'next/image'
import React from 'react'

function SearchFilter() {
  return (
    <section className="relative mt-24 md:mt-0">
      <div className="px-4 lg:container mx-auto">
        <div className="hidden md:block absolute w-[80%] -top-[37vw] -right-[17vw] aspect-square">
          <Image
            src="/images/shapes/FiltersShapes.svg"
            alt="logo"
            fill={true}
            className="object-right-top -z-[1]"
          />
        </div>
        <div className="block sm:hidden absolute inset-0 -mt-4">
          <Image
            src="/images/mobile/FiltersPaws.svg"
            alt="logo"
            fill={true}
            className="object-top -z-[1]"
          />
        </div>
        <div className="relative w-full flex flex-col-reverse sm:grid grid-cols-2 px-4">
          <div className="justify-self-end space-y-2 md:space-y-6 flex flex-col justify-center max-w-[559px]">
            <h1 className="text-gradient text-4xl lg:text-5xl font-bold leading-[150%]">
              Enhanced Search Filters
            </h1>
            <p className="text-paragraph text-xl lg:text-2xl leading-[150%] max-w-[650px]">
              Thanks to our customizable search filters, find your pet faster based on specific criteria such as breed, size, color and location.
            </p>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/desktop/FiltersImage.png"
              alt="logo"
              fill={true}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchFilter
