'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div ref={menuRef} className="fixed right-0 top-0 h-full w-80 bg-background shadow-xl">
        <div className="flex flex-col items-center space-y-6 p-8">
          <div className="flex w-full items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary" onClick={onClose}>
              Alto do Pegado
            </Link>
            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-gray-100"
              aria-label="Fechar menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <span className="text-sm font-normal text-text/80">Nova Fase - Expandindo um Legado</span>
          
          <Link
            href="#infraestrutura"
            className="w-full text-text hover:text-primary transition-colors py-2"
            onClick={onClose}
          >
            Infraestrutura Integrada
          </Link>
          <Link
            href="#projeto"
            className="w-full text-text hover:text-primary transition-colors py-2"
            onClick={onClose}
          >
            O Projeto
          </Link>
          <Link
            href="#lotes"
            className="w-full text-text hover:text-primary transition-colors py-2"
            onClick={onClose}
          >
            Lotes Disponíveis
          </Link>
          <Link
            href="#localizacao"
            className="w-full text-text hover:text-primary transition-colors py-2"
            onClick={onClose}
          >
            Área Privilegiada
          </Link>
          <a
            href="#contact"
            className="btn-primary w-full text-center"
            onClick={onClose}
          >
            Agende sua Visita
          </a>
          <div className="flex flex-col items-center space-y-4 mt-4 text-sm text-text/70">
            <Link href="/politica-de-privacidade" className="hover:text-primary transition-colors" onClick={onClose}>
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="hover:text-primary transition-colors" onClick={onClose}>
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MobileMenu };