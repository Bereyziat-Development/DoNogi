import Image from 'next/image'

function Navigation() {
  return (
    <header className="fixed inset-x-0 z-[999] bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="relative px-10 py-2 sm:py-0 md:container lg:px-4 mx-auto flex items-center gap-4 justify-between">
        <div className="block absolute top-2 left-[17%] sm:left-[2%] md:-left-[7%] w-[70px] sm:w-[55px] md:w-[100px] aspect-square">
          <Image 
            src="/images/desktop/LeftPawsGroup.svg" 
            alt="left paws group"
            fill={true}
            className="object-contain"
          />
        </div>
        <div className="block absolute top-2 right-[17%] sm:right-[2%] md:-right-[7%] w-[70px] sm:w-[55px] md:w-[100px] aspect-square">
          <Image 
            src="/images/desktop/RightPawsGroup.svg" 
            alt="left paws group"
            fill={true}
            className="object-contain"
          />
        </div>
        <div className="relative w-[121px] h-[71px] md:w-[168px] md:h-[99px] mx-auto sm:mx-0">
          <Image 
            src="/images/desktop/DoNogi_Logo_Horizontal.svg" 
            alt="logo"
            fill={true}
            className="object-contain"
          />
        </div>
        <div className="hidden md:block relative">
          <button className="btn-gradient px-6 py-2">
            Download Do Nogi app now!
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navigation
