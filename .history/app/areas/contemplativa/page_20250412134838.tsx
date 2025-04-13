import Image from "next/image";
import Link from "next/link";

export default function AreaContemplativa() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920"
            alt="Área Contemplativa - Vista"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="heading-xl text-white mb-6">
              Área Contemplativa
              <span className="block text-2xl md:text-3xl mt-2 font-montserrat font-light">
                Um Espaço para Reconexão
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
              <h2 className="heading-lg mb-6">Experiência Única</h2>
              <p className="text-content mb-8">
                Nossa área contemplativa foi cuidadosamente projetada para proporcionar momentos de paz e conexão com a natureza. Um espaço onde você pode se desconectar do mundo e encontrar seu equilíbrio.
              </p>
              <ul className="space-y-4 text-text opacity-80">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Deck panorâmico com vista para a Serra dos Órgãos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Espaço zen para meditação e yoga
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Redário natural integrado à mata
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Jardim sensorial com espécies nativas
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1528163308254-5852067f0a1e?q=80&w=800"
                alt="Deck Panorâmico"
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
                src="https://images.unsplash.com/photo-1536854310359-ccc07f5e72de?q=80&w=800"
                alt="Espaço Zen"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Espaço Zen</p>
            </div>
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=800"
                alt="Redário Natural"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Redário Natural</p>
            </div>
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?q=80&w=800"
                alt="Jardim Sensorial"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Jardim Sensorial</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-8">Venha Conhecer</h2>
          <p className="text-content max-w-2xl mx-auto mb-8">
            Agende uma visita e descubra pessoalmente como é viver em harmonia com a natureza em um ambiente pensado para seu bem-estar.
          </p>
          <Link href="/#contato" className="btn-primary">
            Agende sua visita
          </Link>
        </div>
      </section>
    </div>
  );
} 