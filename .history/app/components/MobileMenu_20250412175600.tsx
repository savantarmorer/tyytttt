import { FC } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Menu Content */}
      <div className="absolute right-0 h-full w-64 bg-white shadow-xl">
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-text hover:text-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col space-y-4 p-4">
          <a
            href="#features"
            className="text-text hover:text-primary transition-colors"
            onClick={onClose}
          >
            Diferenciais
          </a>
          <a
            href="#gallery"
            className="text-text hover:text-primary transition-colors"
            onClick={onClose}
          >
            Galeria
          </a>
          <a
            href="#lots"
            className="text-text hover:text-primary transition-colors"
            onClick={onClose}
          >
            Lotes
          </a>
          <a
            href="#location"
            className="text-text hover:text-primary transition-colors"
            onClick={onClose}
          >
            Localização
          </a>
          <a
            href="#contact"
            className="btn-primary text-center"
            onClick={onClose}
          >
            Entre em Contato
          </a>
        </nav>
      </div>
    </div>
  );
};
