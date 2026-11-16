
'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

export const THANKSGIVING_MODAL_EVENT = 'open-thanksgiving-modal';

export function openThanksgivingModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent(THANKSGIVING_MODAL_EVENT)
    );
  }
}

export default function ThanksgivingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const closeModal = useCallback(() => {
    setIsVisible(false);

    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    });
  }, []);

  const handleQuoteClick = useCallback(() => {
    closeModal();

    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent('open-prismatech-lead')
      );
    }, 320);
  }, [closeModal]);

  // Show popup whenever this component mounts
  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      openModal();
    }, 600);

    return () => clearTimeout(timer);
  }, [openModal]);

  // Allow opening popup from other components
  useEffect(() => {
    const handleOpen = () => openModal();

    window.addEventListener(
      THANKSGIVING_MODAL_EVENT,
      handleOpen
    );

    return () => {
      window.removeEventListener(
        THANKSGIVING_MODAL_EVENT,
        handleOpen
      );
    };
  }, [openModal]);

  // Close popup with Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeModal]);

  // Prevent background scrolling
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        position: 'fixed',
        isolation: 'isolate',
      }}
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="thanksgiving-modal-title"
    >
      <div
        data-dialog="modal-xl"
        className={`relative w-[min(992px,calc(100vw-2rem))] overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] transition-all duration-300 ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          data-dialog-close="true"
          onClick={closeModal}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#0b1b4a] text-white shadow-md transition-colors hover:bg-[#16306e] focus:outline-none"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Responsive Black Friday banner */}
        <div className="overflow-hidden leading-none">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/images/banner/black-friday-mobile.png"
            />

            <Image
              src="/images/banner/black-friday.png"
              alt="Black Friday promotion from PrismaTech"
              width={2879}
              height={1307}
              className="block h-auto w-full object-contain"
              priority
            />
          </picture>
        </div>

        {/* Popup footer */}
        <div className="flex flex-col gap-2 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-7 sm:py-5">
          <div className="min-w-0 flex-1 text-left">
            <p
              id="thanksgiving-modal-title"
              className="mb-1 text-xs font-bold uppercase tracking-[0.08em] text-[#1a237e] sm:text-sm"
            >
              HAPPY BLACK FRIDAY!
            </p>

            <p className="m-0 whitespace-normal break-words text-sm leading-snug text-[#2f3a4a] sm:text-[15px]">
              Big deals, busy counters — stay ready for every sale with a reliable terminal.
            </p>
          </div>

          <button
            type="button"
            onClick={handleQuoteClick}
            className="inline-flex shrink-0 items-center justify-center self-start whitespace-nowrap rounded-full bg-[#bc13fe] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90 sm:self-center sm:text-[15px]"
          >
            Get my free quote
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
