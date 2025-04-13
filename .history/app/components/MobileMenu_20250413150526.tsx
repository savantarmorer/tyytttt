'use client';

import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container-custom h-full">
        <div className="flex flex-col items-center space-y-6 py-8">
          <Link href="/" className="text-2xl font-bold text-primary flex flex-col items-center" onClick={onClose}>
            Alto do Pegado
            <span className="text-sm font-normal mt-1 text-text/80">Nova Fase - Expandindo um Legado</span>
          </Link>
          <Link
            href="/areas/contemplativa"
            className="text-text hover:text-primary transition-colors"
            onClick={onClose}
          >
            Área Contemplativa
          </Link>
          <Link
            href="/areas/gourmet"
            className="text-text hover:text-primary transition-colors"
            onClick={onClose}
          >
            Espaço Gourmet
          </Link>
          <Link
            href="/areas/lazer"
            className="text-text hover:text-primary transition-colors"
            onClick={onClose}
          >
            Área de Lazer
          </Link>
          <Link
            href="/staff"
            className="text-text hover:text-primary transition-colors"
            onClick={onClose}
          >
            Nossa Equipe
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