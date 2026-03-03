"use client";
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "100% Fibra Óptica",
    description: "Conexão de ponta a ponta. Esqueça quedas e lentidão em horários de pico."
  },
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.906 14.142 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>,
    title: "Wi-Fi 6 Incluso",
    description: "Roteadores de última geração que cobrem mais espaço e suportam dezenas de aparelhos simultâneos."
  },
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    title: "Suporte Técnico Local",
    description: "Atendimento humano, rápido e sem robôs enrolando. Nossa equipe técnica está sempre perto de você."
  },
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: "Garantia de Banda",
    description: "Você recebe exatamente a velocidade que contratou. Transparência total e sem surpresas no fim do mês."
  }
];

export const Features = () => {
  return (
    <section className="py-32 relative bg-[#000000]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#FFFFFF] uppercase tracking-tighter">
            Por que escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E84818] to-[#EB6410]">SYS3?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E84818] to-transparent rounded-full mx-auto mb-6"></div>
          <p className="text-[#D2D2D2] text-xl font-light max-w-2xl mx-auto">
            Muito mais que internet. Entregamos a infraestrutura robusta que a sua casa ou empresa merece.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-b from-[#121212] to-[#0a0a0a] border border-[#333333] p-8 rounded-[2rem] hover:border-[#E84818]/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E84818]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 bg-[#000000] border border-[#333333] rounded-2xl flex items-center justify-center text-[#E84818] mb-8 group-hover:scale-110 group-hover:bg-[#E84818] group-hover:text-[#FFFFFF] transition-all duration-300 relative z-10 shadow-[0_0_15px_rgba(232,72,24,0.1)]">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4 relative z-10">{feature.title}</h3>
              <p className="text-[#D2D2D2] leading-relaxed relative z-10">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};