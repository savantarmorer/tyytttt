import Image from "next/image";
import Link from "next/link";

export default function Staff() {
  const teamMembers = [
    {
      name: "Ana Carolina Silva",
      role: "Gerente de Relacionamento",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
      description: "Com mais de 15 anos de experiência em empreendimentos de alto padrão, Ana Carolina lidera nossa equipe de relacionamento com foco em proporcionar experiências únicas aos nossos clientes."
    },
    {
      name: "Ricardo Oliveira",
      role: "Coordenador de Infraestrutura",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400",
      description: "Engenheiro civil com especialização em sustentabilidade, Ricardo é responsável por garantir que toda nossa infraestrutura siga os mais altos padrões de qualidade e respeito ao meio ambiente."
    },
    {
      name: "Mariana Santos",
      role: "Arquiteta Paisagista",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
      description: "Especialista em integração entre arquitetura e natureza, Mariana é a mente criativa por trás de nossos espaços de convivência e áreas verdes."
    },
    {
      name: "Paulo Mendes",
      role: "Supervisor de Segurança",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
      description: "Com background militar e formação em segurança privada, Paulo coordena nossa equipe de segurança 24h, garantindo a tranquilidade de todos."
    },
    {
      name: "Beatriz Lima",
      role: "Especialista em Bem-Estar",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400",
      description: "Educadora física e especialista em atividades outdoor, Beatriz desenvolve programações especiais para nossas áreas de lazer e trilhas."
    },
    {
      name: "Fernando Costa",
      role: "Chef Consultor",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400",
      description: "Chef premiado com experiência internacional, Fernando é nosso consultor para o espaço gourmet, desenvolvendo experiências gastronômicas exclusivas."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920"
            alt="Nossa Equipe"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="heading-xl text-white mb-6">
              Nossa Equipe
              <span className="block text-2xl md:text-3xl mt-2 font-montserrat font-light">
                Profissionais Dedicados ao Seu Bem-Estar
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-6">Conheça Quem Faz Acontecer</h2>
            <p className="text-content">
              Nossa equipe multidisciplinar trabalha em conjunto para garantir que cada detalhe do Alto do Pegado seja pensado e executado com excelência, proporcionando experiências únicas aos nossos clientes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-secondary/5 rounded-lg overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-text opacity-80">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/5">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/icons/excellence.svg"
                  alt="Excelência"
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4">
                Excelência
              </h3>
              <p className="text-text opacity-80">
                Buscamos a perfeição em cada detalhe, superando expectativas e criando experiências memoráveis.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/icons/sustainability.svg"
                  alt="Sustentabilidade"
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4">
                Sustentabilidade
              </h3>
              <p className="text-text opacity-80">
                Comprometidos com práticas sustentáveis e preservação do meio ambiente para as futuras gerações.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/icons/innovation.svg"
                  alt="Inovação"
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4">
                Inovação
              </h3>
              <p className="text-text opacity-80">
                Constantemente buscando novas soluções e tecnologias para melhorar a experiência de nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-8">Faça Parte Desta História</h2>
          <p className="text-content max-w-2xl mx-auto mb-8">
            Nossa equipe está pronta para recebê-lo e apresentar pessoalmente todo o carinho e dedicação que colocamos em cada detalhe do Alto do Pegado.
          </p>
          <Link href="/#contato" className="btn-primary">
            Entre em Contato
          </Link>
        </div>
      </section>
    </div>
  );
} 