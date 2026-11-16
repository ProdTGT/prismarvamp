
'use client';

import Image from 'next/image';
import { openThanksgivingModal } from './ThanksgivingModal';

export default function ThanksgivingCorner() {
  return (
    <button
      type="button"
      onClick={openThanksgivingModal}
      aria-label="Open Black Friday promotion"
      className="fixed bottom-4 right-2 z-[9998] w-[150px] appearance-none border-0 bg-transparent p-0 shadow-none transition-transform duration-300 hover:scale-[1.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 max-md:bottom-[88px] max-md:right-1 max-md:w-[120px] sm:bottom-6 sm:right-4 sm:w-[180px]"
    >
      <picture>
        <Image
          src="/images/banner/black-friday.png"
          alt="Black Friday promotion from PrismaTech"
          width={1024}
          height={445}
          unoptimized
          className="block h-auto w-full rounded-2xl bg-transparent object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
          style={{ backgroundColor: 'transparent' }}
          priority={false}
        />
      </picture>
    </button>
  );
}
