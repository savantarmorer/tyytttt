import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1920&h=1080"
            alt="Reserva do Alto - Vista aérea"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-hero-pattern"></div>
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="heading-xl mb-6">
              Reserva do Alto
              <span className="block text-2xl md:text-3xl mt-2 font-montserrat font-light">
                Lotes de 1.000m² a 2.500m² em Petrópolis
              </span>
            </h1>
            <p className="text-content text-white mb-8">
              Empreendimento de alto padrão em uma das regiões mais valorizadas de Petrópolis, com vista privilegiada para a Serra dos Órgãos e infraestrutura completa.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="#contato" className="btn-primary">
                Agende sua visita
              </Link>
              <Link href="#lotes" className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-md hover:bg-white/30 transition-colors duration-300">
                Ver Lotes Disponíveis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">
            Infraestrutura Completa
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
                Área Verde Preservada
              </h3>
              <p className="text-text opacity-80">
                60% da área total do empreendimento é destinada à preservação ambiental, com trilhas ecológicas e nascentes naturais.
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
                Segurança Premium
              </h3>
              <p className="text-text opacity-80">
                Portaria blindada 24h, sistema de CFTV com reconhecimento facial, ronda motorizada e controle de acesso digital.
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
                Infraestrutura Completa
              </h3>
              <p className="text-text opacity-80">
                Rede subterrânea de energia e internet, iluminação em LED, pavimentação em bloquetes e sistema de drenagem avançado.
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
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&h=600"
                alt="Vista Panorâmica"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Vista Panorâmica</p>
            </div>
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&h=600"
                alt="Área de Lazer"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Clube Privativo</p>
            </div>
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&h=600"
                alt="Portaria"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Portaria Premium</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lotes Section */}
      <section id="lotes" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Lotes Disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                area: "1.000m²",
                price: "R$ 450.000",
                features: ["Vista para a serra", "Plano", "Pronto para construir"]
              },
              {
                area: "1.500m²",
                price: "R$ 680.000",
                features: ["Vista panorâmica", "Leve aclive", "Área verde"]
              },
              {
                area: "2.500m²",
                price: "R$ 1.200.000",
                features: ["Vista 180°", "Nascente própria", "Mata preservada"]
              }
            ].map((lote, index) => (
              <div key={index} className="bg-secondary/5 p-8 rounded-lg">
                <h3 className="text-2xl font-playfair font-bold mb-4">Lote {index + 1}</h3>
                <div className="space-y-4">
                  <p className="text-xl font-semibold">{lote.area}</p>
                  <p className="text-primary text-2xl font-bold">{lote.price}</p>
                  <ul className="space-y-2">
                    {lote.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-text opacity-80">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="#contato" className="block text-center btn-primary mt-6">
                    Saiba mais
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-secondary/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Localização Privilegiada</h2>
              <p className="text-content mb-8">
                A Reserva do Alto está localizada em uma das áreas mais nobres de Petrópolis, na Estrada do Secretário. Com vista permanente para a Serra dos Órgãos e cercada pela Mata Atlântica preservada.
              </p>
              <ul className="space-y-4 text-text opacity-80">
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
                  5 minutos do Hospital Clínico
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  30 minutos do Aeroporto Santos Dumont
                </li>
              </ul>
              <address className="mt-8 not-italic text-lg text-text opacity-80">
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
      <section id="contato" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-lg mb-6">Entre em Contato</h2>
              <p className="text-content mb-8">
                Agende uma visita e conheça pessoalmente a Reserva do Alto. Nossa equipe está pronta para apresentar todas as opções de lotes e condições especiais de pagamento.
              </p>
              <div className="space-y-6 text-text opacity-80">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Telefones</h3>
                    <p>Central de Vendas: (24) 2222-2222</p>
                    <p>WhatsApp: (24) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Horário de Visitas</h3>
                    <p>Segunda a Sábado: 9h às 17h</p>
                    <p>Domingo: 10h às 16h</p>
                    <p className="text-sm">(Visitas mediante agendamento)</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="bg-secondary/5 p-8 rounded-lg space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-text mb-2">
                    Interesse Principal
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    required
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="1000">Lote 1.000m²</option>
                    <option value="1500">Lote 1.500m²</option>
                    <option value="2500">Lote 2.500m²</option>
                    <option value="other">Outras opções</option>
                  </select>
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
                <p className="text-xs text-text opacity-60 text-center mt-4">
                  Ao enviar este formulário, você concorda com nossa{" "}
                  <Link href="/politica-de-privacidade" className="text-primary hover:underline">
                    política de privacidade
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Reserva do Alto</h3>
              <p className="text-white opacity-80">
                Seu refúgio exclusivo em Petrópolis, onde natureza e sofisticação se encontram em perfeita harmonia.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <p className="text-white opacity-80">
                Central de Vendas: (24) 2222-2222<br />
                WhatsApp: (24) 99999-9999<br />
                Email: contato@reservadoalto.com.br
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horário de Visitas</h3>
              <p className="text-white opacity-80">
                Segunda a Sábado: 9h às 17h<br />
                Domingo: 10h às 16h<br />
                (Visitas mediante agendamento)
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Incorporadora</h3>
              <p className="text-white opacity-80">
                Reserva do Alto Empreendimentos SPE LTDA<br />
                CNPJ: 00.000.000/0001-00<br />
                CRECI: J-00000
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-white opacity-60">
            <p>&copy; {new Date().getFullYear()} Reserva do Alto. Todos os direitos reservados.</p>
            <div className="mt-2 text-sm">
              <Link href="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</Link>
              <span className="mx-2">|</span>
              <Link href="/termos-de-uso" className="hover:text-white">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
