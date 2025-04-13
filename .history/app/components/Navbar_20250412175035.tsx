import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Alto do Pegado</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="nav-link">Diferenciais</a>
            <a href="#gallery" className="nav-link">Galeria</a>
            <a href="#lots" className="nav-link">Lotes</a>
            <a href="#location" className="nav-link">Localização</a>
            <a href="#contact" className="nav-button">Contato</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-text" />
            ) : (
              <Menu className="h-6 w-6 text-text" />
            )}
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
} 