import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container-custom h-full">
        <div className="flex flex-col items-center space-y-6 py-8">
          <Link href="/" className="text-2xl font-bold text-primary flex flex-col items-center" onClick={onClose}>
            Alto do Pegado
            <span className="text-sm font-normal mt-1 text-text/80">Nova Fase - Expandindo um Legado</span>
          </Link>
          <a
            href="#features"
            className="text-text hover:text-primary transition-colors"
            onClick={onClose}
          >
            Infraestrutura Integrada
          </a>
          <a
            href="#gallery"
            className="text-text hover:text-primary transition-colors"
            onClick={onClose}
          >
            O Projeto
          </a>
          <a
            href="#lots"
            className="text-text hover:text-primary transition-colors"
            onClick={onClose}
          >
            Lotes Premium
          </a>
          <a
            href="#location"
            className="text-text hover:text-primary transition-colors"
            onClick={onClose}
          >
            Localização Privilegiada
          </a>
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
}