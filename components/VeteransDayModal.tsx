'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

const STORAGE_KEY = 'soiree_veterans_day_modal_closed';
export const VETERANS_DAY_MODAL_EVENT = 'open-veterans-day-modal';

export function openVeteransDayModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(VETERANS_DAY_MODAL_EVENT));
  }
}

export default function VeteransDayModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const closeModal = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch (_) {}
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    });
  }, []);

  useEffect(() => {
    setMounted(true);

    try {
      const alreadySeen = sessionStorage.getItem(STORAGE_KEY);
      if (!alreadySeen) {
        const timer = setTimeout(() => {
          openModal();
        }, 600);
        return () => clearTimeout(timer);
      }
    } catch (_) {
      const timer = setTimeout(() => {
        openModal();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [openModal]);

  useEffect(() => {
    const handleOpen = () => openModal();
    window.addEventListener(VETERANS_DAY_MODAL_EVENT, handleOpen);
    return () => window.removeEventListener(VETERANS_DAY_MODAL_EVENT, handleOpen);
  }, [openModal]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ position: 'fixed', isolation: 'isolate' }}
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-label="Veterans Day"
    >
      <div
        data-dialog="modal-xl"
        className={`relative w-[95%] md:w-[85%] max-w-5xl rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          type="button"
          data-dialog-close="true"
          onClick={closeModal}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white transition-all shadow-md focus:outline-none"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ONLY IMAGE */}
        <Image
          src="/assets/images/veterans-day-banner.png"
          alt="Veterans Day — Thank You, Veterans. Let's Keep Your Business Moving."
          width={1024}
          height={576}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>,
    document.body
  );
}
