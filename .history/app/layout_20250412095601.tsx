import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alto do Pegado | Condomínio de Alto Padrão",
  description: "Condomínio de alto padrão cercado pela natureza na Estrada do Secretário. Venha viver em harmonia com a natureza no Alto do Pegado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfair.variable} ${montserrat.variable} font-montserrat`}
      >
        {children}
      </body>
    </html>
  );
}
