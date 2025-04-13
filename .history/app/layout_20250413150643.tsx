import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import Link from "next/link";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Alto do Pegado - Nova Fase",
  description: "Uma nova extensão do paraíso em Petrópolis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${playfair.variable}`}>
        <Navbar />
        {children}
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
      </body>
    </html>
  );
}
