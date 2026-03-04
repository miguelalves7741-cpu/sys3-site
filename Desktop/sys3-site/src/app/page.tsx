"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PlanCard } from "../components/ui/PlanCard";
import { Navbar, NetworkStatus } from "../components/ui/Navbar";
import { WhatsAppButton } from "../components/interactive/WhatsAppButton";
import { Features } from "../components/ui/Features";
import { Testimonials } from "../components/ui/Testimonials";
import { FAQ } from "../components/ui/FAQ";
import { LocationMap } from "../components/ui/LocationMap";
import { Footer } from "../components/ui/Footer";
import { PromoModal } from "../components/ui/PromoModal";

// === LISTA DE FRASES DO HERO ===
const heroPhrases = [
  { white: "CONECTANDO O", orange: "FUTURO DA SUA CASA" },
  { white: "CONECTIVIDADE", orange: "SEM LIMITES" },
  { white: "A INTERNET QUE", orange: "ACOMPANHA VOCÊ" },
  { white: "VELOCIDADE QUE", orange: "NÃO TE DEIXA NA MÃO" },
  { white: "TECNOLOGIA DE", orange: "ÚLTIMA GERAÇÃO" }
];

export default function Home() {
  
  // === CONTROLE DO STATUS DA REDE ===
  const currentNetworkStatus: NetworkStatus = 'operacional'; 
  const currentStatusMessage = "Tudo funcionando perfeitamente. Nenhuma instabilidade detectada na região.";
  // ===================================

  const [currentPhrase, setCurrentPhrase] = useState(heroPhrases[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heroPhrases.length);
    setCurrentPhrase(heroPhrases[randomIndex]);
  }, []);

  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 352; 
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    if (carouselRef.current) {
      carouselRef.current.classList.add("cursor-grabbing");
      carouselRef.current.classList.remove("scroll-smooth", "snap-x"); 
      startX.current = e.pageX - carouselRef.current.offsetLeft;
      scrollLeft.current = carouselRef.current.scrollLeft;
    }
  };

  const onMouseLeaveOrUp = () => {
    isDragging.current = false;
    if (carouselRef.current) {
      carouselRef.current.classList.remove("cursor-grabbing");
      carouselRef.current.classList.add("scroll-smooth", "snap-x"); 
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; 
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <main className="min-h-screen bg-[#000000] text-[#FFFFFF] selection:bg-[#E84818]/30 z-0 relative overflow-hidden">
      
      {/* MENU SUPERIOR */}
      <Navbar status={currentNetworkStatus} statusMessage={currentStatusMessage} />

      {/* BACKGROUND AVANÇADO ANIMADO */}
      <div className="absolute inset-0 z-[-1] flex justify-center h-screen pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] w-[800px] h-[500px] bg-[#E84818]/30 blur-[120px] rounded-full mix-blend-screen" 
        />
      </div>

      {/* --- SEÇÃO HERO PREMIUM --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-40 pb-12">
        <div className="container mx-auto z-10 text-center flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group inline-flex items-center gap-2 px-5 py-2 mb-10 border border-[#333333] rounded-full bg-gradient-to-b from-[#1a1a1a] to-[#000000] shadow-[0_0_20px_rgba(232,72,24,0.1)] select-none"
          >
            <span className="w-2 h-2 rounded-full bg-[#E84818] animate-ping" />
            <span className="text-[#DFDAC6] text-[0.7rem] sm:text-xs font-bold tracking-[0.25em] uppercase">
              A evolução da fibra óptica
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            key={currentPhrase.white}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1.1] md:leading-[0.85] py-2 mb-8 uppercase drop-shadow-2xl select-none break-words"
          >
            {currentPhrase.white} <br/>
            <span className="relative inline-block mt-2">
              <span className="absolute -inset-2 bg-gradient-to-r from-[#E84818] to-[#EB6410] blur-2xl opacity-30"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#E84818] via-[#EB6410] to-[#E84818] bg-[length:200%_auto] animate-gradient">
                {currentPhrase.orange}
              </span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-[#D2D2D2] mb-14 max-w-3xl mx-auto font-light leading-relaxed select-none"
          >
            A internet inteligente que você esperava. Conexão estável, suporte humano e <strong className="text-white font-medium">tecnologia de ponta</strong> para a sua casa.
          </motion.p>
          
          {/* PROVA SOCIAL / AUTORIDADE (Substituindo os antigos botões) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 w-full max-w-4xl mx-auto select-none mt-2"
          >
            {/* Bloco 1 */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl md:text-5xl font-black text-[#FFFFFF] tracking-tighter">
                +3.000<span className="text-[#E84818]">.</span>
              </h3>
              <p className="text-[10px] md:text-xs text-[#D2D2D2] font-bold tracking-widest uppercase mt-2">Famílias Conectadas</p>
            </div>

            {/* Divisória */}
            <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-[#333333] to-transparent"></div>

            {/* Bloco 2 */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl md:text-5xl font-black text-[#FFFFFF] tracking-tighter">
                100<span className="text-[#E84818]">%</span>
              </h3>
              <p className="text-[10px] md:text-xs text-[#D2D2D2] font-bold tracking-widest uppercase mt-2">Fibra Óptica</p>
            </div>

            {/* Divisória */}
            <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-[#333333] to-transparent"></div>

            {/* Bloco 3 */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl md:text-5xl font-black text-[#FFFFFF] tracking-tighter">
                99,9<span className="text-[#E84818]">%</span>
              </h3>
              <p className="text-[10px] md:text-xs text-[#D2D2D2] font-bold tracking-widest uppercase mt-2">Estabilidade</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- SEÇÃO DE PLANOS (CARROSSEL) --- */}
      <section id="planos" className="py-32 relative border-t border-[#333333]/50 bg-gradient-to-b from-[#000000] to-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 flex flex-col items-center px-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 tracking-tighter text-[#FFFFFF] uppercase">
              Escolha sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E84818] to-[#EB6410]">Velocidade</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E84818] to-transparent rounded-full mb-6"></div>
            <p className="text-[#D2D2D2] text-lg md:text-xl font-light">Deslize para ver todos os planos. <strong className="text-white">Wi-Fi 6 incluso.</strong></p>
          </motion.div>
          
          <div className="relative max-w-full mx-auto group">
            
         {/* Seta Lateral Esquerda */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-[100] w-8 h-8 md:w-16 md:h-16 rounded-full bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#E84818] md:border-2 flex items-center justify-center text-[#E84818] hover:bg-[#E84818] hover:text-[#FFFFFF] transition-all shadow-lg opacity-90"
            >
              <svg className="w-4 h-4 md:w-8 md:h-8 pr-0.5 md:pr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Container do Carrossel */}
            <div 
              ref={carouselRef}
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeaveOrUp}
              onMouseUp={onMouseLeaveOrUp}
              onMouseMove={onMouseMove}
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory pt-8 pb-12 px-4 md:px-16 scroll-smooth cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
            >
              
              <PlanCard 
                mega="600" 
                discountPrice="79,90" 
                isHighlighted={true} 
                badgeText="Instalação Grátis" 
                features={["Velocidade Extrema (Custo-Benefício)", "Wi-Fi 6 de Última Geração", "Downloads pesados em segundos", "Suporte Técnico VIP 24h"]} 
              />
              
              <PlanCard 
                mega="100" 
                originalPrice="74,90" 
                discountPrice="64,90" 
                features={["Ideal para o dia a dia", "Redes sociais e WhatsApp livres", "Conexão 100% Fibra Óptica"]} 
              />
              <PlanCard 
                mega="200" 
                originalPrice="84,90" 
                discountPrice="74,90" 
                features={["Perfeito para filmes e séries", "Jogue online com ping baixo", "Suporta múltiplos dispositivos"]} 
              />
              
              <PlanCard 
                mega="300" 
                originalPrice="94,90" 
                discountPrice="84,90" 
                features={["Home Office sem travamentos", "Vídeos em alta resolução (4K)", "Roteador Gigabit incluso"]} 
              />
              <PlanCard 
                mega="500" 
                originalPrice="99,90" 
                discountPrice="89,90" 
                features={["Acesso Ultra Premium", "Streaming simultâneo em várias TVs", "Máxima performance para a família"]} 
              />
            </div>

          {/* Seta Lateral Direita */}
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-[100] w-8 h-8 md:w-16 md:h-16 rounded-full bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#E84818] md:border-2 flex items-center justify-center text-[#E84818] hover:bg-[#E84818] hover:text-[#FFFFFF] transition-all shadow-lg opacity-90"
            >
              <svg className="w-4 h-4 md:w-8 md:h-8 pl-0.5 md:pl-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* --- SEÇÕES DE PROVA SOCIAL --- */}
      <Features />
      <Testimonials />

      {/* --- PERGUNTAS FREQUENTES --- */}
      <FAQ />

      {/* --- MAPA DE LOCALIZAÇÃO --- */}
      <LocationMap />

      {/* --- RODAPÉ E LEGAIS --- */}
      <Footer />
       <PromoModal />
      <WhatsAppButton />
    </main>
  );
}