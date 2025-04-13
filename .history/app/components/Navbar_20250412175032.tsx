import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-playfair font-bold text-primary">
            Alto do Pegado
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-text hover:text-primary transition-colors">
              Início
            </Link>
            <Link href="/areas/contemplativa" className="text-text hover:text-primary transition-colors">
              Área Contemplativa
            </Link>
            <Link href="/areas/gourmet" className="text-text hover:text-primary transition-colors">
              Espaço Gourmet
            </Link>
            <Link href="/areas/lazer" className="text-text hover:text-primary transition-colors">
              Área de Lazer
            </Link>
            <Link href="/staff" className="text-text hover:text-primary transition-colors">
              Nossa Equipe
            </Link>
            <Link href="/#contato" className="btn-primary">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 