import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sorteio Solidario",
  description: "SaaS para rifas e acoes beneficentes com vendas, PIX, sorteio e prestacao de contas."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
