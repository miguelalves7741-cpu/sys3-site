import type { Metadata } from "next";
import { AccessibilityWidget } from "../components/ui/AccessibilityWidget";
import "./globals.css";

// === A MÁGICA DO SEO ACONTECE AQUI ===
export const metadata: Metadata = {
  title: "Sys3 Telecom | A Evolução da Fibra Óptica em João Pessoa",
  description: "A internet inteligente que a sua casa merece. Conexão 100% fibra óptica com tecnologia Wi-Fi 6, estabilidade de 99,9% e suporte 24h na Paraíba.",
  keywords: [
    "internet", "fibra óptica", "João Pessoa", "provedor de internet", 
    "Wi-Fi 6", "Sys3 Telecom", "internet rápida PB", "internet residencial",
    "planos de internet", "internet para gamers"
  ],
  authors: [{ name: "Sys3 Telecom" }],
  // AQUI ENTRA A MÁGICA DO ÍCONE:
  icons: {
    icon: "/icon.png", // Usando o icon.png que você tem na pasta public
  },
openGraph: {
    title: "Sys3 Telecom | A Evolução da Fibra Óptica",
    description: "Assine a internet com a maior estabilidade de João Pessoa. Wi-Fi 6 incluso e suporte 24h.",
    url: "https://sys3telecom.com.br", 
    siteName: "Sys3 Telecom",
    // APAGUE O BLOCO 'images' QUE ESTAVA AQUI
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* Removemos a tag <head> manual daqui! O Next.js vai injetar automaticamente */}
      <body className="antialiased selection:bg-[#E84818]/30">
        
        {/* O site inteiro é renderizado aqui */}
        {children}

        {/* O nosso menu de acessibilidade injetado de forma segura */}
        <AccessibilityWidget />
        
      </body>
    </html>
  );
}