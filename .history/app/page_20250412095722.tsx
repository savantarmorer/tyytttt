import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg"
            alt="Alto do Pegado - Vista aérea"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-hero-pattern"></div>
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="heading-xl mb-6">
              Alto do Pegado
              <span className="block text-2xl md:text-3xl mt-2 font-montserrat font-light">
                Seu refúgio na natureza
              </span>
            </h1>
            <p className="text-content text-white/90 mb-8">
              Um condomínio exclusivo cercado pela Mata Atlântica, onde luxo e natureza se encontram em perfeita harmonia.
            </p>
            <Link href="#contato" className="btn-primary">
              Agende uma visita
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">
            Um lugar único para viver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/icons/nature.svg"
                  alt="Natureza"
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4">
                Natureza Preservada
              </h3>
              <p className="text-text/80">
                Cercado pela exuberante Mata Atlântica, oferecendo uma experiência única de vida em harmonia com a natureza.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/icons/security.svg"
                  alt="Segurança"
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4">
                Segurança 24h
              </h3>
              <p className="text-text/80">
                Sistema de segurança avançado com monitoramento 24 horas e controle de acesso rigoroso.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/icons/location.svg"
                  alt="Localização"
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4">
                Localização Privilegiada
              </h3>
              <p className="text-text/80">
                Situado na Estrada do Secretário, 1830, combinando tranquilidade com fácil acesso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Localização Estratégica</h2>
              <p className="text-content mb-8">
                O Alto do Pegado está localizado em uma das áreas mais valorizadas da região, oferecendo fácil acesso e ao mesmo tempo o privilégio de viver em meio à natureza.
              </p>
              <address className="not-italic text-lg text-text/80">
                <strong>Endereço:</strong><br />
                Estrada do Secretário, 1830<br />
                Rio de Janeiro - RJ
              </address>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/map.jpg"
                alt="Localização Alto do Pegado"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Entre em Contato</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Alto do Pegado</h3>
              <p className="text-white/80">
                Seu refúgio exclusivo na natureza.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <p className="text-white/80">
                Tel: (21) 99999-9999<br />
                Email: contato@altodopegado.com.br
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-white/80 hover:text-white">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} Alto do Pegado. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
