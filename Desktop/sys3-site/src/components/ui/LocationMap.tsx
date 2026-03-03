"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const LocationMap = () => {
  return (
    <section className="py-32 relative bg-[#050505] border-t border-[#333333]/50">
      {/* Luz de fundo sutil */}
      <div className="absolute top-0 right-1/4 w-full max-w-lg h-[400px] bg-[#E84818]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#FFFFFF] uppercase tracking-tighter">
            Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E84818] to-[#EB6410]">Sede</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E84818] to-transparent rounded-full mx-auto mb-6"></div>
          <p className="text-[#D2D2D2] text-xl font-light max-w-2xl mx-auto">
            Uma infraestrutura robusta de portas abertas para você. Venha nos fazer uma visita ou descubra se estamos por perto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Informações de Contato / Endereço */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 bg-[#000000]/80 backdrop-blur-md border border-[#333333] p-8 md:p-10 rounded-[2rem] flex flex-col justify-center group hover:border-[#E84818]/40 transition-colors select-none"
          >
            <div className="w-16 h-16 bg-[#121212] border border-[#333333] rounded-2xl flex items-center justify-center text-[#E84818] mb-8 group-hover:bg-[#E84818] group-hover:text-[#FFFFFF] transition-all duration-300 shadow-[0_0_15px_rgba(232,72,24,0.1)]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            
            <h3 className="text-2xl font-bold text-[#FFFFFF] mb-3">SYS3 Telecom</h3>
            <p className="text-[#D2D2D2] leading-relaxed mb-8 font-light">
              Rua Dom Bosco, 1296<br/>
              Cristo Redentor<br/>
              João Pessoa - PB, 58070-470
            </p>
            
            <div className="space-y-5 border-t border-[#333333] pt-8 mt-auto">
              <div className="flex items-center gap-4 text-[#D2D2D2]">
                <div className="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center border border-[#333333]">
                  <svg className="w-4 h-4 text-[#E84818]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span className="text-sm">Seg - Sex: 08:00 às 18:00</span>
              </div>
              <div className="flex items-center gap-4 text-[#D2D2D2]">
                <div className="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center border border-[#333333]">
                  <svg className="w-4 h-4 text-[#E84818]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <span className="text-sm font-bold tracking-wider">(83) 3045-5368</span>
              </div>
            </div>
          </motion.div>

          {/* Mapa do Google Incorporado com Filtro Dark Mode */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 relative rounded-[2rem] overflow-hidden border border-[#333333] h-[400px] lg:h-auto group shadow-2xl"
          >
            {/* Overlay sutil para o mapa não roubar o scroll do mouse logo de cara */}
            <div className="absolute inset-0 bg-transparent pointer-events-none z-10 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]"></div>
            
            <iframe 
              src="https://www.google.com/maps?q=SYS3+Telecom,+Rua+Dom+Bosco,+1296,+Cristo+Redentor,+João+Pessoa,+PB&output=embed" 
              width="100%" 
              height="100%" 
              // AQUI ESTÁ A MÁGICA DO DARK MODE: Esse filtro inverte as cores do mapa para tons escuros e puxa o tom de marcação para perto do nosso laranja
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(85%)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[20%]"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};