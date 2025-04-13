'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">
              Alto do Pegado
              <span className="text-sm font-normal ml-2 text-text/80">Nova Fase</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-text hover:text-primary transition-colors"
              >
                Infraestrutura
              </a>
              <a
                href="#gallery"
                className="text-text hover:text-primary transition-colors"
              >
                O Projeto
              </a>
              <a
                href="#lots"
                className="text-text hover:text-primary transition-colors"
              >
                Lotes
              </a>
              <a
                href="#location"
                className="text-text hover:text-primary transition-colors"
              >
                Área Privilegiada
              </a>
              <a
                href="#contact"
                className="btn-primary"
              >
                Agende sua Visita
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-text hover:text-primary"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
