"use client";

import React, { useState, useEffect } from "react";

export const AccessibilityWidget = () => {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [isAccMenuOpen, setIsAccMenuOpen] = useState(false);

  // Aplica o tamanho da fonte diretamente no corpo do site
  useEffect(() => {
    document.body.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  // Aplica a classe de alto contraste no HTML
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }, [highContrast]);

  const changeFontSize = (delta: number) => {
    setFontSize((prev) => Math.min(Math.max(prev + delta, 80), 150));
  };

  return (
    <div className="fixed left-4 bottom-6 md:bottom-12 z-[9999] flex flex-col-reverse items-start gap-3 print:hidden">
      <button 
        onClick={() => setIsAccMenuOpen(!isAccMenuOpen)}
        aria-label="Menu de Acessibilidade"
        aria-expanded={isAccMenuOpen}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-[#E84818] text-white transition-all duration-300 border border-[#333333] shadow-[0_0_20px_rgba(0,0,0,0.6)] focus-visible:ring-2 focus-visible:ring-[#E84818] outline-none"
      >
        {isAccMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        )}
      </button>

      <div 
        className={`flex flex-col gap-2 transition-all duration-300 origin-bottom-left ${
          isAccMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10 pointer-events-none absolute bottom-16'
        }`}
      >
        <div className="bg-[#121212]/95 backdrop-blur-md border border-[#333333] p-2 rounded-2xl shadow-2xl flex flex-col gap-2">
          <button onClick={() => changeFontSize(10)} title="Aumentar texto" aria-label="Aumentar tamanho do texto" className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1a1a1a] hover:bg-[#E84818] text-white transition-colors border border-[#333333] font-bold">
            A+
          </button>
          <button onClick={() => changeFontSize(-10)} title="Diminuir texto" aria-label="Diminuir tamanho do texto" className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1a1a1a] hover:bg-[#E84818] text-white transition-colors border border-[#333333] font-bold">
            A-
          </button>
          <button onClick={() => setHighContrast(!highContrast)} title="Alto Contraste" aria-label="Alternar modo de alto contraste" className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1a1a1a] hover:bg-yellow-500 hover:text-black text-white transition-colors border border-[#333333]">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM7 12c0-2.76 2.24-5 5-5s5 2.24 5-5 5-5-2.24-5-5z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};