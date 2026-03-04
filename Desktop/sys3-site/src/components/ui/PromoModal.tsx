"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const PromoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Mudei o nome da chave para garantir que o navegador não use o cache antigo
    const hasSeenPromo = localStorage.getItem("sys3_promo_teste_final"); 
    
    // Se não tiver a chave na memória, abre em apenas meio segundo (500ms)
    if (!hasSeenPromo) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Grava na memória que o usuário fechou
    localStorage.setItem("sys3_promo_teste_final", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          {/* O Cartão da Promoção */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
            className="bg-[#0a0a0a] border border-[#333333] rounded-2xl w-full max-w-md shadow-[0_0_50px_rgba(232,72,24,0.3)] relative overflow-hidden flex flex-col"
          >
            {/* Botão de Fechar (X) Flutuante */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-[#000000]/70 backdrop-blur-md text-[#FFFFFF] hover:bg-[#E84818] transition-colors z-20 border border-white/10"
              aria-label="Fechar promoção"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* ÁREA DA IMAGEM PROMOCIONAL */}
           {/* ÁREA DA IMAGEM PROMOCIONAL AJUSTADA */}
            <div className="relative w-full bg-[#0a0a0a] flex justify-center">
              {/* Usando w-full e h-auto para a imagem não ser cortada e manter a proporção real */}
              <Image 
                src="/promo.png" // ATENÇÃO: Confirme aqui se o seu arquivo é .jpg ou .png
                alt="Promoção Especial Sys3" 
                width={800}
                height={800}
                className="w-full h-auto max-h-[55vh] object-contain"
                priority
              />
            </div>
            {/* ÁREA DE AÇÃO (TEXTO E BOTÃO) */}
            <div className="p-6 text-center relative z-10 bg-gradient-to-t from-[#000000] to-[#0a0a0a]">
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
                Não Perca Essa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E84818] to-[#EB6410]">Chance!</span>
              </h3>
              
              <button
                onClick={handleClose}
                className="block w-full py-4 mt-4 rounded-xl bg-gradient-to-r from-[#E84818] to-[#EB6410] text-white font-black text-lg uppercase tracking-wide hover:scale-105 active:scale-95 transition-transform shadow-[0_0_20px_rgba(232,72,24,0.4)]"
              >
                Garantir Oferta
              </button>
              
              <button onClick={handleClose} className="mt-4 text-xs text-[#666666] hover:text-[#D2D2D2] transition-colors underline decoration-[#333333]">
                Agora não, talvez depois.
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};