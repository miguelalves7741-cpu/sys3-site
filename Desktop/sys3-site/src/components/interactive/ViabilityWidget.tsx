"use client";

import React, { useState } from 'react';

export const ViabilityWidget = () => {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'searching' | 'found'>('idle');

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    if (value.length > 5) value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    setCep(value);
  };

  const checkViability = (e: React.FormEvent) => {
    e.preventDefault();
    if (cep.length < 9) return;
    setLoading(true);
    setStatus('searching');
    setTimeout(() => {
      setLoading(false);
      setStatus('found');
    }, 2000);
  };

  return (
    <div className="w-full bg-[#121212]/80 backdrop-blur-md p-1 rounded-2xl border border-[#333333] shadow-2xl">
      <form onSubmit={checkViability} className="flex flex-col md:flex-row gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Digite seu CEP"
            value={cep}
            onChange={handleCepChange}
            className="w-full bg-transparent px-6 py-4 text-[#FFFFFF] outline-none placeholder:text-[#D2D2D2] font-medium"
            required
          />
          {status === 'searching' && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="w-5 h-5 border-2 border-[#E84818] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#E84818] text-[#FFFFFF] font-extrabold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(232,72,24,0.3)] hover:bg-[#EB6410] hover:shadow-[#EB6410]/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
>
              Verificar Cobertura
          </button>
      </form>

      {status === 'found' && (
        <div className="p-4 mt-2 bg-green-500/10 border border-green-500/20 rounded-xl animate-in fade-in slide-in-from-top-2">
          <p className="text-green-400 text-sm font-medium flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Temos ultravelocidade disponível para o CEP {cep}!
          </p>
        </div>
      )}
    </div>
  );
};