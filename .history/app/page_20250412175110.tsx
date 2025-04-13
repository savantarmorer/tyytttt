import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1920&h=1080"
            alt="Alto do Pegado - Nova Fase"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-hero-pattern"></div>
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-2xl">
            <div className="bg-black/40 p-8 rounded-lg backdrop-blur-sm">
              <h1 className="heading-xl mb-6 text-white">
                Alto do Pegado
                <span className="block text-2xl md:text-3xl mt-2 font-montserrat font-light">
                  Uma Nova Extensão do Paraíso
                </span>
              </h1>
              <p className="text-content text-white mb-8">
                O Alto do Pegado cresce mais uma vez, expandindo sua área de convivência e lazer. Uma nova oportunidade de viver em harmonia com a natureza, desfrutando da mesma excelência e tranquilidade que você já conhece.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="#contato" className="btn-primary">
                  Agende sua visita
                </Link>
                <Link href="#areas" className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-md hover:bg-white/30 transition-colors duration-300">
                  Conheça as Áreas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">
            Expandindo um Legado de Excelência
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
                Área Verde Integrada
              </h3>
              <p className="text-text opacity-80">
                Seguindo os mesmos princípios de preservação ambiental, com trilhas ecológicas, áreas de contemplação e espaços para piquenique em meio à Mata Atlântica.
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
                Segurança Integrada
              </h3>
              <p className="text-text opacity-80">
                O mesmo padrão de tranquilidade: portaria blindada 24h, CFTV com reconhecimento facial e controle de acesso digital para sua paz de espírito.
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
                Lazer Completo
              </h3>
              <p className="text-text opacity-80">
                Novas áreas de convivência com quiosques, espaço gourmet, deck panorâmico e áreas para prática esportiva integradas à natureza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-secondary/5">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Uma Nova Extensão do Paraíso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&h=600"
                alt="Vista Panorâmica"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Mirante Natural</p>
            </div>
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&h=600"
                alt="Área de Convivência"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Espaço Gourmet</p>
            </div>
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&h=600"
                alt="Acesso Principal"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Acesso Integrado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section id="areas" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Áreas de Convivência</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Área Contemplativa",
                features: ["Deck panorâmico", "Espaço zen", "Redário natural"]
              },
              {
                name: "Espaço Gourmet",
                features: ["Churrasqueira", "Forno de pizza", "Área coberta"]
              },
              {
                name: "Área de Lazer",
                features: ["Quadra poliesportiva", "Playground natural", "Trilhas ecológicas"]
              }
            ].map((area, index) => (
              <div key={index} className="bg-secondary/5 p-8 rounded-lg">
                <h3 className="text-2xl font-playfair font-bold mb-4">{area.name}</h3>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {area.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-text opacity-80">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/areas/${area.name === "Área Contemplativa" ? "contemplativa" : 
                           area.name === "Espaço Gourmet" ? "gourmet" : "lazer"}`} 
                    className="block text-center btn-primary mt-6">
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
                Expandindo a excelência na região mais nobre da Estrada do Secretário. Uma continuação natural da área mais valorizada de Petrópolis, com vista permanente para a Serra dos Órgãos e áreas de lazer integradas à natureza.
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.0123456789!2d-43.17654321!3d-22.51234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMwJzQ0LjQiUyA0M8KwMTAnMzEuNCJX!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
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
              <h2 className="heading-lg mb-6">Garanta sua Oportunidade</h2>
              <p className="text-content mb-8">
                Faça parte desta nova extensão do Alto do Pegado. Nossa equipe está pronta para apresentar todas as opções e condições especiais para você aproveitar este paraíso.
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
                    Área de Interesse
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    required
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="contemplativa">Área Contemplativa</option>
                    <option value="gourmet">Espaço Gourmet</option>
                    <option value="lazer">Área de Lazer</option>
                    <option value="other">Outras áreas</option>
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
      <footer className="bg-primary text-white py-12 mt-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Alto do Pegado</h3>
              <p className="text-white opacity-80">
                Expandindo horizontes e proporcionando novas experiências de lazer e convivência em harmonia com a natureza.
              </p>
              <Link href="/staff" className="text-white hover:underline mt-4 inline-block">
                Conheça nossa equipe
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <p className="text-white opacity-80">
                Central de Vendas: (24) 2222-2222<br />
                WhatsApp: (24) 99999-9999<br />
                Email: contato@altodopegado.com.br
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
                Alto do Pegado Empreendimentos SPE LTDA<br />
                CNPJ: 00.000.000/0001-00<br />
                CRECI: J-00000
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-white opacity-60">
            <p>&copy; {new Date().getFullYear()} Alto do Pegado. Todos os direitos reservados.</p>
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
