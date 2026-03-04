"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export type NetworkStatus = 'operacional' | 'manutencao' | 'programada';

interface NavbarProps {
  status?: NetworkStatus;
  statusMessage?: string;
}

export const Navbar = ({ status = 'operacional', statusMessage }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showStatusTooltip, setShowStatusTooltip] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappNumber = "558330455368";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const statusConfig = {
    operacional: { color: "bg-[#25D366]", label: "Operacional", text: "Todos os sistemas funcionando normalmente." },
    manutencao: { color: "bg-[#E84818]", label: "Em Manutenção", text: statusMessage || "Instabilidade detectada." },
    programada: { color: "bg-yellow-500", label: "Manutenção Agendada", text: statusMessage || "Manutenção em breve." }
  };

  const currentStatus = statusConfig[status];

  return (
    <nav 
      role="navigation"
      aria-label="Menu principal"
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b select-none ${
        isScrolled || isMobileMenuOpen ? 'bg-[#000000]/95 backdrop-blur-xl border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent border-transparent py-6' 
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        <a href="/" aria-label="Página Inicial da Sys3" className="flex items-center outline-none focus-visible:ring-2 focus-visible:ring-[#E84818] rounded-lg">
          <Image src="/logo.svg" alt="Logótipo SYS3 Telecom" width={isScrolled ? 140 : 180} height={50} priority className="object-contain transition-all duration-300" />
        </a>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-[#D2D2D2]">
          <a href="/#planos" className="hover:text-[#E84818] transition-colors focus-visible:text-[#E84818] outline-none">Planos</a>
          <a href="/simulador" className="hover:text-[#E84818] transition-colors focus-visible:text-[#E84818] outline-none">Simulador Wi-Fi</a>
          <a href="/auto-suporte" className="hover:text-[#E84818] transition-colors focus-visible:text-[#E84818] outline-none font-bold text-[#FFFFFF]">Auto Suporte</a>
          <a href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20verificar%20a%20cobertura%20na%20minha%20regi%C3%A3o.`} target="_blank" rel="noopener noreferrer" className="hover:text-[#E84818] transition-colors outline-none">Cobertura</a>
          <a href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20t%C3%A9cnico.`} target="_blank" rel="noopener noreferrer" className="hover:text-[#E84818] transition-colors outline-none">Suporte 24h</a>
        </div>

        <div className="flex items-center gap-4">
          <div 
            className="relative hidden sm:flex items-center"
            onMouseEnter={() => setShowStatusTooltip(true)}
            onMouseLeave={() => setShowStatusTooltip(false)}
            aria-haspopup="true"
            aria-expanded={showStatusTooltip}
          >
            <button aria-label={`Status da rede: ${currentStatus.label}`} className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#333333] bg-[#1a1a1a]/50 cursor-help transition-colors ${status !== 'operacional' ? 'border-' + currentStatus.color.split('-')[1] : ''}`}>
              <span className="relative flex h-2.5 w-2.5">
                {status !== 'operacional' && <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${currentStatus.color} opacity-75`}></span>}
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${currentStatus.color}`}></span>
              </span>
              <span className="text-xs font-bold text-[#D2D2D2] lg:block hidden">{currentStatus.label}</span>
            </button>

            <AnimatePresence>
              {showStatusTooltip && (
                <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 5, scale: 0.95 }} transition={{ duration: 0.2 }} className="absolute top-full right-0 mt-3 w-64 p-4 rounded-xl bg-[#121212] border border-[#333333] shadow-2xl z-50">
                  <h4 className="text-sm font-bold text-white mb-1">{currentStatus.label}</h4>
                  <p className="text-xs text-[#D2D2D2] leading-relaxed">{currentStatus.text}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="https://central.sys3telecom.com.br/accounts/central/login" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-[#E84818] text-white font-extrabold text-sm px-6 py-2.5 rounded-full hover:scale-105 transition-all outline-none focus-visible:ring-2 focus-visible:ring-white shadow-[0_0_15px_rgba(232,72,24,0.3)]">
            Área do Cliente
          </a>
          
          {/* BOTÃO MENU MOBILE BLINDADO */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-[#0a0a0a]/80 backdrop-blur-md border border-[#333333] text-[#FFFFFF] hover:text-[#E84818] hover:border-[#E84818] outline-none transition-all shadow-lg z-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* AQUI ESTÁ O BLOCO DO MENU MOBILE QUE TINHA SUMIDO */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-[#333333] overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-6">
              <a onClick={() => setIsMobileMenuOpen(false)} href="/#planos" className="text-lg font-bold text-[#FFFFFF] hover:text-[#E84818]">Planos</a>
              <a onClick={() => setIsMobileMenuOpen(false)} href="/simulador" className="text-lg font-bold text-[#FFFFFF] hover:text-[#E84818]">Simulador Wi-Fi</a>
              <a onClick={() => setIsMobileMenuOpen(false)} href="/auto-suporte" className="text-lg font-bold text-[#E84818] hover:text-[#FFFFFF]">Auto Suporte</a>
              <a onClick={() => setIsMobileMenuOpen(false)} href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20verificar%20a%20cobertura%20na%20minha%20regi%C3%A3o.`} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[#FFFFFF] hover:text-[#E84818]">Cobertura (WhatsApp)</a>
              <a onClick={() => setIsMobileMenuOpen(false)} href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20t%C3%A9cnico.`} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[#FFFFFF] hover:text-[#E84818]">Suporte 24h</a>
              <a onClick={() => setIsMobileMenuOpen(false)} href="https://central.sys3telecom.com.br/accounts/central/login" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[#E84818]">Acessar Área do Cliente</a>
              
              <div className="border-t border-[#333333] pt-6 flex gap-3">
                <a href="https://play.google.com/store/apps/details?id=br.com.appdoprovedor.sys3telecom&hl=pt_BR" aria-label="Baixar na Google Play" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#121212] border border-[#333333] rounded-lg p-2 flex items-center gap-2 hover:border-[#E84818] transition-colors">
                  <svg className="w-6 h-6 text-[#FFFFFF]" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[8px] text-[#D2D2D2] leading-none">DISPONÍVEL NO</span>
                    <span className="text-xs font-bold text-[#FFFFFF] leading-tight">Google Play</span>
                  </div>
                </a>
                <a href="https://apps.apple.com/br/app/sys3-internet/id1540574011" aria-label="Baixar na App Store" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#121212] border border-[#333333] rounded-lg p-2 flex items-center gap-2 hover:border-[#E84818] transition-colors">
                  <svg className="w-6 h-6 text-[#FFFFFF]" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[8px] text-[#D2D2D2] leading-none">BAIXAR NA</span>
                    <span className="text-xs font-bold text-[#FFFFFF] leading-tight">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};