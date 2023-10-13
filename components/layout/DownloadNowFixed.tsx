import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import useScrollDirectionToUp from '@/hooks/useScrollDirectionToUp';

function DownloadNowFixed() {
  const isWebsitePublished = process.env.NEXT_PUBLIC_PUBLISH_WEBSITE === 'true';

  const [closeDisplay, setCloseDisplay] = useState(false);
  const controls = useAnimation();
  const scrollUp = useScrollDirectionToUp();

  const handleClose = async () => {
    await controls.start({ opacity: 0 });

    setTimeout(() => {
      setCloseDisplay(true);
    }, 600);
  };

  useEffect(() => {
    if (!closeDisplay) {
      if (scrollUp) {
        controls.start({ y: 0 });
      } else {
        controls.start({ y: '140%' });
      }
    }
  }, [controls, scrollUp, closeDisplay]);

  if (closeDisplay) return;

  return (
    <motion.div
      initial={{ y: '140%' }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className={`${isWebsitePublished ? 'block' : 'hidden'} ${
        isWebsitePublished && 'sm:hidden'
      } fixed left-0 bottom-0 w-full z-[999]`}
      style={{
        boxShadow: '0px 0px 15px -1px rgba(0,0,0,0.75)',
      }}
    >
      <div className="relative py-10 px-8 bg-white bg-opacity-60 backdrop-blur">
        <div className="absolute -top-[70px] left-[50%] -translate-x-[50%] w-[77px] h-[79px]">
          <Image
            src="/images/mobile/DogIconNew.svg"
            alt="dog peek"
            fill={true}
            className="object-contain"
          />
        </div>
        <button
          onClick={handleClose}
          className="absolute -top-[15px] right-1 active:scale-95 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 48 47"
            fill="none"
          >
            <circle cx="24.0662" cy="23.6846" r="23.2168" fill="#857369" />
            <path
              d="M33.077 16.6764C33.6306 16.1228 33.6306 15.2276 33.077 14.6799C32.5234 14.1322 31.6282 14.1263 31.0805 14.6799L24.0722 21.6882L17.058 14.674C16.5044 14.1204 15.6092 14.1204 15.0615 14.674C14.5138 15.2276 14.5079 16.1228 15.0615 16.6705L22.0698 23.6788L15.0556 30.693C14.502 31.2466 14.502 32.1418 15.0556 32.6895C15.6092 33.2372 16.5044 33.2431 17.0521 32.6895L24.0604 25.6812L31.0746 32.6954C31.6282 33.249 32.5234 33.249 33.0711 32.6954C33.6188 32.1418 33.6247 31.2466 33.0711 30.6989L26.0628 23.6906L33.077 16.6764Z"
              fill="white"
            />
          </svg>
        </button>
        <h1 className="text-xl text-brown tracking-[8px] text-center">
          Download Now!
        </h1>
        <div className="w-full flex items-center justify-between gap-4 mt-4">
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
      </div>
    </motion.div>
  );
}

export default DownloadNowFixed;
