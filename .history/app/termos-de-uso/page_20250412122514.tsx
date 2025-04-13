import Link from "next/link";

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-16">
        <h1 className="heading-lg mb-8">Termos de Uso</h1>
        
        <div className="prose max-w-none">
          <p className="text-content mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="heading-md mb-4">1. Aceitação dos Termos</h2>
            <p className="text-content">
              Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-md mb-4">2. Uso do Site</h2>
            <p className="text-content mb-4">
              Ao utilizar nosso site, você concorda em:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-text opacity-80">
              <li>Fornecer informações verdadeiras e precisas</li>
              <li>Não utilizar o site para fins ilegais ou não autorizados</li>
              <li>Não interferir ou interromper a segurança do site</li>
              <li>Não coletar informações de outros usuários sem autorização</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="heading-md mb-4">3. Propriedade Intelectual</h2>
            <p className="text-content">
              Todo o conteúdo presente neste site, incluindo textos, imagens, logotipos, designs e informações, é de nossa propriedade ou licenciado para nós. Este conteúdo é protegido por leis de propriedade intelectual e não pode ser utilizado sem nossa autorização prévia por escrito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-md mb-4">4. Informações do Empreendimento</h2>
            <p className="text-content">
              As informações sobre o empreendimento, incluindo preços, disponibilidade e características dos lotes, são sujeitas a alterações sem aviso prévio. As imagens apresentadas são meramente ilustrativas e podem sofrer alterações no projeto final.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-md mb-4">5. Limitação de Responsabilidade</h2>
            <p className="text-content">
              Não nos responsabilizamos por quaisquer danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou incapacidade de usar nosso site. As informações são fornecidas "como estão" sem garantias de qualquer tipo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-md mb-4">6. Modificações</h2>
            <p className="text-content">
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As modificações entram em vigor imediatamente após sua publicação no site. O uso continuado do site após as alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-md mb-4">7. Lei Aplicável</h2>
            <p className="text-content">
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa relacionada a estes termos será submetida ao foro da Comarca de Petrópolis, Estado do Rio de Janeiro.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-md mb-4">8. Contato</h2>
            <p className="text-content">
              Para questões relacionadas a estes Termos de Uso, entre em contato conosco através do e-mail: juridico@reservadoalto.com.br
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/" className="btn-primary">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
} 