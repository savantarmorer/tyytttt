import Image from "next/image";
import Link from "next/link";

export default function AreaLazer() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1920"
            alt="Área de Lazer - Vista"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="heading-xl text-white mb-6">
              Área de Lazer
              <span className="block text-2xl md:text-3xl mt-2 font-montserrat font-light">
                Diversão e Bem-estar em Meio à Natureza
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
              <h2 className="heading-lg mb-6">Lazer Completo</h2>
              <p className="text-content mb-8">
                Um espaço pensado para todas as idades, onde esporte, diversão e natureza se encontram. Aqui, cada momento se transforma em uma experiência única de lazer e bem-estar.
              </p>
              <ul className="space-y-4 text-text opacity-80">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Quadra poliesportiva com iluminação
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Playground natural integrado
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Trilhas ecológicas sinalizadas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Espaço fitness ao ar livre
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=800"
                alt="Quadra Poliesportiva"
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
                src="https://images.unsplash.com/photo-1596465549916-72e0a15bf8ba?q=80&w=800"
                alt="Playground Natural"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Playground Natural</p>
            </div>
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800"
                alt="Trilha Ecológica"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Trilha Ecológica</p>
            </div>
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800"
                alt="Espaço Fitness"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <p className="absolute bottom-4 left-4 text-white font-playfair text-xl">Espaço Fitness</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Atividades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/icons/sports.svg"
                  alt="Esportes"
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4">
                Práticas Esportivas
              </h3>
              <p className="text-text opacity-80">
                Quadra poliesportiva preparada para diversas modalidades, com iluminação para jogos noturnos.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/icons/nature-activity.svg"
                  alt="Atividades na Natureza"
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4">
                Atividades ao Ar Livre
              </h3>
              <p className="text-text opacity-80">
                Trilhas ecológicas e espaços para piquenique, perfeitos para momentos em família.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/icons/fitness.svg"
                  alt="Fitness"
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4">
                Fitness Natural
              </h3>
              <p className="text-text opacity-80">
                Academia ao ar livre com equipamentos de última geração integrados à paisagem natural.
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
            Agende uma visita e descubra como nossa área de lazer pode transformar seu estilo de vida, proporcionando momentos únicos de diversão e bem-estar.
          </p>
          <Link href="/#contato" className="btn-primary">
            Agende sua visita
          </Link>
        </div>
      </section>
    </div>
  );
} 