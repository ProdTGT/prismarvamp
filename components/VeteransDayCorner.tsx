'use client'

import Image from 'next/image'
import { openVeteransDayModal } from './VeteransDayModal'

export default function VeteransDayCorner() {
  return (
    <button
      type="button"
      onClick={openVeteransDayModal}
      aria-label="Open Veterans Day message"
      className="fixed bottom-4 right-2 z-[9998] w-[150px] appearance-none border-0 bg-transparent p-0 shadow-none transition-transform duration-300 hover:scale-[1.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 max-md:bottom-[88px] max-md:right-1 max-md:w-[120px] sm:bottom-6 sm:right-4 sm:w-[180px]"
    >
      <Image
        src="/assets/images/veterans-day-corner.png"
        alt="Thank you Veterans"
        width={1024}
        height={445}
        unoptimized
        className="h-auto w-full bg-transparent object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
        style={{ backgroundColor: 'transparent' }}
        priority={false}
      />
    </button>
  )
}
