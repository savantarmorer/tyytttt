'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Alto do Pegado
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-text hover:text-primary transition-colors">
              Diferenciais
            </a>
            <a href="#gallery" className="text-text hover:text-primary transition-colors">
              Galeria
            </a>
            <a href="#lots" className="text-text hover:text-primary transition-colors">
              Lotes
            </a>
            <a href="#location" className="text-text hover:text-primary transition-colors">
              Localização
            </a>
            <a href="#contact" className="btn-primary">
              Entre em Contato
            </a>
          </div>

          <button className="md:hidden text-text hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 nav-link"
                onClick={closeMenu}
              >
                Diferenciais
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 nav-link"
                onClick={closeMenu}
              >
                Galeria
              </a>
              <a
                href="#lots"
                className="block px-3 py-2 nav-link"
                onClick={closeMenu}
              >
                Lotes
              </a>
              <a
                href="#location"
                className="block px-3 py-2 nav-link"
                onClick={closeMenu}
              >
                Localização
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 nav-button mx-3"
                onClick={closeMenu}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 