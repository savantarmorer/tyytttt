import Link from "next/link";

export default function PoliticaDePrivacidade() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-16">
        <h1 className="heading-lg mb-8">Política de Privacidade</h1>
        
        <div className="prose max-w-none">
          <p className="text-content mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="heading-md mb-4">1. Introdução</h2>
            <p className="text-content">
              Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais quando você utiliza nosso site e serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-md mb-4">2. Informações Coletadas</h2>
            <p className="text-content mb-4">
              Coletamos as seguintes informações quando você preenche nosso formulário de contato:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-text opacity-80">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Interesse específico em nossos lotes</li>
              <li>Conteúdo da mensagem enviada</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="heading-md mb-4">3. Uso das Informações</h2>
            <p className="text-content mb-4">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-text opacity-80">
              <li>Responder às suas solicitações de informações</li>
              <li>Enviar materiais promocionais relevantes</li>
              <li>Melhorar nossos serviços e comunicações</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="heading-md mb-4">4. Proteção de Dados</h2>
            <p className="text-content">
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-md mb-4">5. Compartilhamento de Informações</h2>
            <p className="text-content">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-md mb-4">6. Seus Direitos</h2>
            <p className="text-content mb-4">
              Você tem direito a:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-text opacity-80">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir dados imprecisos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Retirar seu consentimento a qualquer momento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="heading-md mb-4">7. Contato</h2>
            <p className="text-content">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato conosco através do e-mail: privacidade@reservadoalto.com.br
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