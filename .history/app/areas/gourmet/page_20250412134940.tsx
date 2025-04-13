import Image from "next/image";
import Link from "next/link";

export default function AreaGourmet() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1564759298141-cfd3e83c0a51?q=80&w=1920"
            alt="Espaço Gourmet - Vista"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="heading-xl text-white mb-6">
              Espaço Gourmet
              <span className="block text-2xl md:text-3xl mt-2 font-montserrat font-light">
                Momentos Especiais ao Ar Livre
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Gastronomia e Natureza</h2>
              <p className="text-content mb-8">
                Um espaço perfeito para reunir amigos e família, onde a gastronomia se encontra com a natureza. Equipado com tudo que você precisa para criar momentos memoráveis.
              </p>
              <ul className="space-y-4 text-text opacity-80">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Churrasqueira profissional com coifa
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Forno de pizza artesanal
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Cozinha completa equipada
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Área coberta com mesas e lounges
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1580916771163-c5072b4e4dad?q=80&w=800"
                alt="Área Gourmet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-secondary/5">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Galeria de Fotos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800"
                alt="Área de Preparo"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Área de Preparo</p>
            </div>
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=800"
                alt="Forno de Pizza"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Forno de Pizza</p>
            </div>
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800"
                alt="Área de Refeições"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Área de Refeições</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Comodidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/icons/kitchen.svg"
                  alt="Cozinha"
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4">
                Cozinha Completa
              </h3>
              <p className="text-text opacity-80">
                Equipada com eletrodomésticos de última geração, bancadas em granito e armários planejados.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/icons/grill.svg"
                  alt="Churrasqueira"
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4">
                Área de Churrasco
              </h3>
              <p className="text-text opacity-80">
                Churrasqueira profissional com coifa, bancada de apoio e sistema de ventilação.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/icons/lounge.svg"
                  alt="Lounge"
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4">
                Área de Estar
              </h3>
              <p className="text-text opacity-80">
                Espaço de convivência com lounges confortáveis, mesas e cadeiras para refeições.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/5">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-8">Venha Conhecer</h2>
          <p className="text-content max-w-2xl mx-auto mb-8">
            Agende uma visita e descubra como nosso Espaço Gourmet pode ser o cenário perfeito para seus momentos especiais.
          </p>
          <Link href="/#contato" className="btn-primary">
            Agende sua visita
          </Link>
        </div>
      </section>
    </div>
  );
} 