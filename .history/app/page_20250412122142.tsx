import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&h=1080"
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
                Condomínio de Luxo em Petrópolis
              </span>
            </h1>
            <p className="text-content text-white/90 mb-8">
              Localizado em uma das áreas mais privilegiadas de Petrópolis, o Alto do Pegado oferece lotes a partir de 1.000m² em meio à exuberante Mata Atlântica, com vista panorâmica para as montanhas.
            </p>
            <Link href="#contato" className="btn-primary">
              Agende sua visita
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
                Cercado pela Mata Atlântica preservada, com nascentes naturais e vista privilegiada para as montanhas de Petrópolis.
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
                Portaria com controle de acesso, monitoramento por câmeras e ronda 24 horas para sua tranquilidade.
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
                A apenas 15 minutos do Centro Histórico de Petrópolis, com fácil acesso pela Estrada do Secretário, 1830.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-secondary/5">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Conheça o Empreendimento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&h=600"
                alt="Vista da Mata Atlântica"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Vista Panorâmica</p>
            </div>
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=800&h=600"
                alt="Área de Lazer"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Área de Lazer</p>
            </div>
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1623298317883-6b70254edf31?q=80&w=800&h=600"
                alt="Portaria"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Portaria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Localização Estratégica</h2>
              <p className="text-content mb-8">
                O Alto do Pegado está localizado em uma das áreas mais valorizadas de Petrópolis, na Estrada do Secretário. Com fácil acesso ao centro histórico e principais pontos da cidade, oferece a tranquilidade do contato com a natureza sem abrir mão da praticidade urbana.
              </p>
              <ul className="space-y-4 text-text/80">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  15 minutos do Centro Histórico
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  20 minutos do Shopping Petrópolis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  30 minutos do Aeroporto Santos Dumont
                </li>
              </ul>
              <address className="mt-8 not-italic text-lg text-text/80">
                <strong>Endereço:</strong><br />
                Estrada do Secretário, 1830<br />
                Petrópolis - RJ
              </address>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.5123420152584!2d-43.1698397!3d-22.7123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQyJzQ0LjQiUyA0M8KwMTAnMTEuNCJX!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="section-padding bg-secondary/5">
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
                <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
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
      <footer className="bg-primary text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Alto do Pegado</h3>
              <p className="text-white/80">
                Seu refúgio exclusivo em Petrópolis, onde natureza e sofisticação se encontram.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <p className="text-white/80">
                Tel: (24) 2222-2222<br />
                WhatsApp: (24) 99999-9999<br />
                Email: contato@altodopegado.com.br
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horário de Visitas</h3>
              <p className="text-white/80">
                Segunda a Sábado: 9h às 17h<br />
                Domingo: 10h às 16h<br />
                (Visitas mediante agendamento)
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} Alto do Pegado. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
