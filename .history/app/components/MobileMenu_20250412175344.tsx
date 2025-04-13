'use client';

import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="p-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-text hover:text-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <nav className="mt-8 space-y-4">
            <a
              href="#features"
              className="block py-2 text-text hover:text-primary transition-colors"
              onClick={onClose}
            >
              Diferenciais
            </a>
            <a
              href="#gallery"
              className="block py-2 text-text hover:text-primary transition-colors"
              onClick={onClose}
            >
              Galeria
            </a>
            <a
              href="#lots"
              className="block py-2 text-text hover:text-primary transition-colors"
              onClick={onClose}
            >
              Lotes
            </a>
            <a
              href="#location"
              className="block py-2 text-text hover:text-primary transition-colors"
              onClick={onClose}
            >
              Localização
            </a>
            <a
              href="#contact"
              className="btn-primary w-full text-center"
              onClick={onClose}
            >
              Entre em Contato
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}; 