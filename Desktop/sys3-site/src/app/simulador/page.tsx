"use client";

import React from "react";
import { Navbar } from "../../components/ui/Navbar";
import { Footer } from "../../components/ui/Footer";

export default function SimuladorPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#FFFFFF] selection:bg-[#E84818]/30 flex flex-col">
      
      {/* Puxando o Menu que já temos */}
      <Navbar status="operacional" statusMessage="Tudo funcionando perfeitamente." />

      {/* Container do Simulador */}
      <section className="flex-1 w-full pt-32 pb-20 px-6 flex flex-col items-center justify-center relative">
        
        {/* Luz de fundo decorativa */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E84818]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="text-center mb-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
            Simulador de <span className="text-[#E84818]">Cobertura</span>
          </h1>
          <p className="text-[#D2D2D2] text-lg font-light max-w-2xl mx-auto">
            Desenhe a planta da sua casa ou faça o upload de uma imagem para descobrir exatamente como o sinal do nosso Wi-Fi 6 vai se comportar em cada cômodo.
          </p>
        </div>

        {/* O "Buraco" por onde o simulador aparece (Iframe) */}
        <div className="w-full max-w-5xl h-[850px] bg-[#f4f6f8] rounded-3xl overflow-hidden border border-[#333333] shadow-[0_0_40px_rgba(232,72,24,0.15)] relative z-10">
          <iframe 
            src="/simulador.html" 
            className="w-full h-full border-none"
            title="Simulador Wi-Fi Sys3"
          />
        </div>

      </section>

      {/* Puxando o Rodapé que já temos */}
      <Footer />
      
    </main>
  );
}