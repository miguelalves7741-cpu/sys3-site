"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "Qual é o prazo para a instalação da internet?",
    answer: "Trabalhamos com agilidade! Nossa equipe técnica realiza a instalação na sua residência ou empresa em até 48 horas úteis após a aprovação do cadastro."
  },
  {
    question: "O roteador Wi-Fi 6 tem algum custo extra?",
    answer: "Não! O roteador Gigabit com tecnologia Wi-Fi 6 de última geração é cedido em regime de comodato (empréstimo gratuito) enquanto você for nosso cliente."
  },
  {
    question: "Os planos possuem fidelidade?",
    answer: "Não. nenhum dos nossos planos possui fidelidade. Fidelizamos QUALIDADE."
  },
  {
    question: "Como funciona o suporte técnico 24h?",
    answer: "Você nunca fica na mão. Temos atendimento rápido via WhatsApp a qualquer hora do dia ou da noite, além da nossa exclusiva ferramenta de Auto Suporte para diagnósticos instantâneos."
  },
  {
    question: "Posso mudar de plano no futuro?",
    answer: "Com certeza! Se a sua demanda por internet aumentar, você pode solicitar o upgrade do seu plano a qualquer momento pelo nosso WhatsApp ou pela Área do Cliente, sem taxas extras de migração."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-32 relative bg-[#000000] border-t border-[#333333]/50 select-none">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter text-[#FFFFFF] uppercase">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E84818] to-[#EB6410]">Frequentes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E84818] to-transparent rounded-full mx-auto mb-6"></div>
          <p className="text-[#D2D2D2] text-lg font-light">
            Tire suas principais dúvidas sobre nossos serviços e tecnologia.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-[#333333] rounded-2xl bg-[#0a0a0a] overflow-hidden hover:border-[#E84818]/50 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-[#FFFFFF] font-bold text-lg pr-4">{faq.question}</span>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-300 flex-shrink-0 ${activeIndex === index ? 'bg-[#E84818] border-[#E84818] text-white' : 'border-[#333333] text-[#E84818]'}`}>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-[#D2D2D2] leading-relaxed font-light border-t border-[#333333]/30 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};