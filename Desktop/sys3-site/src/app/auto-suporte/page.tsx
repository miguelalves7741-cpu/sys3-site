"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../../components/ui/Navbar";
import { Footer } from "../../components/ui/Footer";

type EquipType = "bridge" | "ont" | null;

export default function AutoSuportePage() {
  const [step, setStep] = useState<number>(1);
  const [equipType, setEquipType] = useState<EquipType>(null);
  const whatsappNumber = "558330455368";

  const msgLuzVermelha = "Ol%C3%A1%2C%20estou%20na%20p%C3%A1gina%20de%20Auto%20Suporte.%20Meu%20equipamento%20est%C3%A1%20com%20uma%20LUZ%20VERMELHA%20piscando%20(LOS).%20Preciso%20de%20ajuda.";
  const msgCabosCorretos = "Ol%C3%A1%2C%20fiz%20o%20passo%20a%20passo%20do%20Auto%20Suporte%2C%20n%C3%A3o%20h%C3%A1%20luz%20vermelha%2C%20j%C3%A1%20conferi%20a%20traseira%20dos%20cabos%2C%20mas%20continuo%20sem%20internet.";

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const reset = () => {
    setStep(1);
    setEquipType(null);
  };

  return (
    <main className="min-h-screen bg-[#000000] text-[#FFFFFF] selection:bg-[#E84818]/30 flex flex-col">
      <Navbar status="operacional" statusMessage="Tudo funcionando perfeitamente." />

      <section className="flex-1 w-full pt-32 pb-20 px-4 flex flex-col items-center relative min-h-[800px]">
        {/* Luz de fundo decorativa */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-[#E84818]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="w-full max-w-4xl z-10">
          
          <div className="text-center mb-12 select-none">
            <h1 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
              Diagnóstico <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E84818] to-[#EB6410]">Inteligente</span>
            </h1>
            <p className="text-[#D2D2D2] text-lg font-light">Vamos resolver sua conexão rapidamente. Siga os passos abaixo.</p>
          </div>

          <div className="flex justify-center mb-12 select-none">
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-500 ${step >= i ? 'bg-[#E84818] text-white shadow-[0_0_15px_rgba(232,72,24,0.4)]' : 'bg-[#121212] border border-[#333333] text-[#555]'}`}>
                    {i}
                  </div>
                  {i < 3 && <div className={`w-12 h-1 rounded-full transition-colors duration-500 ${step > i ? 'bg-[#E84818]' : 'bg-[#333333]'}`} />}
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-[#050505] border border-[#333333] rounded-[2rem] p-6 md:p-12 shadow-2xl overflow-hidden min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">

              {/* PASSO 1: ESCOLHER EQUIPAMENTO */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
                  className="flex flex-col items-center w-full select-none"
                >
                  <h2 className="text-2xl font-bold mb-8 text-center">Como é o equipamento na sua casa?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <button 
                      onClick={() => { setEquipType("bridge"); nextStep(); }}
                      className="group flex flex-col items-center bg-[#121212] border border-[#333333] hover:border-[#E84818] p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex gap-4 mb-6 relative">
                        <div className="w-16 h-20 border-2 border-[#D2D2D2] rounded-md bg-[#1a1a1a] flex flex-col items-center justify-end pb-2 gap-1 group-hover:border-[#E84818] transition-colors">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <div className="w-24 h-20 border-2 border-[#D2D2D2] rounded-md bg-[#1a1a1a] flex flex-col items-center justify-end pb-2 relative group-hover:border-[#E84818] transition-colors">
                          <div className="absolute -top-6 left-2 w-1 h-8 bg-[#D2D2D2] group-hover:bg-[#E84818] transition-colors rounded-t-full rotate-[-20deg]"></div>
                          <div className="absolute -top-6 right-2 w-1 h-8 bg-[#D2D2D2] group-hover:bg-[#E84818] transition-colors rounded-t-full rotate-[20deg]"></div>
                          <div className="flex gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-green-500"></div></div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">2 Aparelhos</h3>
                      <p className="text-[#D2D2D2]/60 text-sm text-center">Um aparelhinho menor (ONU) ligado num roteador maior com antenas.</p>
                    </button>

                    <button 
                      onClick={() => { setEquipType("ont"); nextStep(); }}
                      className="group flex flex-col items-center bg-[#121212] border border-[#333333] hover:border-[#E84818] p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex justify-center mb-6 h-20 relative">
                        <div className="w-28 h-20 border-2 border-[#D2D2D2] rounded-md bg-[#1a1a1a] flex flex-col items-center justify-end pb-2 relative group-hover:border-[#E84818] transition-colors">
                          <div className="absolute -top-6 left-4 w-1 h-8 bg-[#D2D2D2] group-hover:bg-[#E84818] transition-colors rounded-t-full"></div>
                          <div className="absolute -top-6 right-4 w-1 h-8 bg-[#D2D2D2] group-hover:bg-[#E84818] transition-colors rounded-t-full"></div>
                          <div className="flex gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div><div className="w-2 h-2 rounded-full bg-green-500"></div><div className="w-2 h-2 rounded-full bg-blue-500"></div></div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">1 Aparelho (Tudo em um)</h3>
                      <p className="text-[#D2D2D2]/60 text-sm text-center">A fibra óptica entra direto no roteador que espalha o Wi-Fi (ONT).</p>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* PASSO 2: VERIFICAÇÃO DE LUZ VERMELHA */}
              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
                  className="flex flex-col items-center w-full text-center select-none"
                >
                  <div className="w-24 h-24 mb-6 relative flex justify-center items-center">
                    <div className="absolute w-full h-full border-4 border-[#333333] rounded-2xl bg-[#121212]"></div>
                    <div className="w-6 h-6 rounded-full bg-red-600 animate-pulse shadow-[0_0_30px_rgba(220,38,38,0.8)] relative z-10 border-2 border-red-400"></div>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">Atenção às luzes frontais</h2>
                  <p className="text-[#D2D2D2] text-lg mb-8 max-w-lg">
                    Dê uma olhada no seu aparelho principal.<br/><br/>
                    Existe alguma <strong className="text-red-500 font-bold">LUZ VERMELHA</strong> acesa ou piscando? <span className="text-sm text-[#D2D2D2]/60">(Geralmente escrito LOS, ALM ou INFO)</span>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <a href={`https://wa.me/${whatsappNumber}?text=${msgLuzVermelha}`} target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.3)] flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                      Sim, está vermelha
                    </a>
                    <button onClick={nextStep} className="bg-[#25D366] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#1fae51] transition-colors shadow-[0_0_20px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Não, estão normais (Verdes)
                    </button>
                  </div>
                  <button onClick={prevStep} className="mt-8 text-sm text-[#D2D2D2]/50 hover:text-white transition-colors underline">Voltar</button>
                </motion.div>
              )}

              {/* PASSO 3: ORGANIZAÇÃO DOS CABOS COM ESCALA RESPONSIVA NO CELULAR */}
              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
                  className="flex flex-col items-center w-full select-none"
                >
                  <h2 className="text-2xl font-bold mb-2">Conferência das Entradas Traseiras</h2>
                  <p className="text-[#D2D2D2] text-center mb-10 max-w-lg text-sm">
                    Vire os aparelhos de costas. Verifique se o **Cabo Azul** e a **Fibra** estão encaixados exatamente como no esquema abaixo.
                  </p>

                  {/* ANIMAÇÃO PARA: BRIDGE + ROTEADOR */}
                  {equipType === "bridge" && (
                    <div className="relative w-full max-w-[600px] bg-[#121212] rounded-2xl border border-[#333333] mb-8 overflow-hidden">
                      {/* O contêiner de altura controla o espaço no celular e no desktop */}
                      <div className="w-full h-[200px] sm:h-[320px] relative">
                        {/* A Mágica do Scale: 55% no celular, 100% no desktop */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[550px] h-[280px] scale-[0.55] sm:scale-100 origin-top">
                          
                          {/* CABO DE REDE AZUL CONECTANDO (U-Shape Espesso) */}
                          <div className="absolute bottom-[40px] left-[134px] w-[215px] h-[70px] border-b-8 border-x-8 border-blue-600 rounded-b-3xl z-0 shadow-[0_0_15px_rgba(37,99,235,0.3)]"></div>
                          <svg className="absolute bottom-[40px] left-[134px] w-[215px] h-[70px] z-0" overflow="visible">
                            <path id="cablePath" d="M4,0 L4,50 Q4,66 20,66 L195,66 Q211,66 211,50 L211,0" fill="none" stroke="transparent" />
                            <circle r="4" fill="#ffffff" className="shadow-[0_0_10px_#fff]">
                              <animateMotion dur="1.5s" repeatCount="indefinite"><mpath href="#cablePath"/></animateMotion>
                            </circle>
                          </svg>

                          {/* FIO DE FIBRA ÓPTICA (Verde Espesso) */}
                          <div className="absolute bottom-0 left-[86px] w-2 h-[100px] bg-green-600 z-0 shadow-[0_0_15px_rgba(34,197,94,0.3)]"></div>
                          <div className="absolute bottom-6 left-[30px] text-green-500 text-[10px] font-bold">FIBRA</div>

                          {/* ONU (MODEM) */}
                          <div className="absolute bottom-[96px] left-[50px] z-10 w-32 h-24 bg-[#1a1a1a] border-t-4 border-[#333] border-x-2 border-b-2 border-x-[#222] border-b-[#222] rounded-lg shadow-xl flex flex-col items-center">
                            <div className="w-full text-center bg-[#22c55e]/10 text-[#22c55e] text-[9px] font-bold py-1 border-b border-[#333]">ONU (TRASEIRA)</div>
                            <div className="flex gap-6 mt-auto pb-4 w-full justify-center">
                              <div className="flex flex-col items-center">
                                <span className="text-[8px] text-green-500 font-bold mb-1">PON</span>
                                <div className="w-6 h-6 bg-black border-2 border-green-500 rounded-sm"></div>
                              </div>
                              <div className="flex flex-col items-center">
                                <span className="text-[8px] text-blue-400 font-bold mb-1">LAN</span>
                                <div className="w-6 h-6 bg-black border-2 border-blue-500 rounded-sm"></div>
                              </div>
                            </div>
                          </div>

                          {/* ROTEADOR */}
                          <div className="absolute bottom-[96px] right-[40px] z-10 w-52 h-28 bg-[#1a1a1a] border-t-4 border-[#333] border-x-2 border-b-2 border-x-[#222] border-b-[#222] rounded-lg shadow-xl flex flex-col items-center">
                            <div className="absolute -top-16 left-4 w-2 h-20 bg-[#222] -z-10 rounded-t-full"></div>
                            <div className="absolute -top-16 right-4 w-2 h-20 bg-[#222] -z-10 rounded-t-full"></div>
                            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-2 h-20 bg-[#222] -z-10 rounded-t-full"></div>
                            
                            <div className="w-full text-center bg-[#3b82f6]/10 text-[#3b82f6] text-[9px] font-bold py-1 border-b border-[#333]">ROTEADOR (TRASEIRA)</div>
                            <div className="flex gap-3 mt-auto pb-4 w-full justify-center items-end">
                              <div className="flex flex-col items-center">
                                <span className="text-[8px] text-blue-500 font-bold mb-1">WAN / AZUL</span>
                                <div className="w-7 h-7 bg-black border-2 border-blue-500 rounded-sm"></div>
                              </div>
                              <div className="w-px h-8 bg-[#444] mx-1"></div>
                              <div className="flex flex-col items-center"><span className="text-[8px] text-yellow-600 font-bold mb-1">LAN</span><div className="w-6 h-6 bg-black border border-yellow-700 rounded-sm"></div></div>
                              <div className="flex flex-col items-center"><span className="text-[8px] text-yellow-600 font-bold mb-1">LAN</span><div className="w-6 h-6 bg-black border border-yellow-700 rounded-sm"></div></div>
                              <div className="flex flex-col items-center"><span className="text-[8px] text-yellow-600 font-bold mb-1">LAN</span><div className="w-6 h-6 bg-black border border-yellow-700 rounded-sm"></div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ANIMAÇÃO PARA: ONT ÚNICA */}
                  {equipType === "ont" && (
                    <div className="relative w-full max-w-[600px] bg-[#121212] rounded-2xl border border-[#333333] mb-8 overflow-hidden">
                      {/* O contêiner de altura controla o espaço no celular e no desktop */}
                      <div className="w-full h-[200px] sm:h-[320px] relative">
                        {/* A Mágica do Scale: 55% no celular, 100% no desktop */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[550px] h-[280px] scale-[0.55] sm:scale-100 origin-top">

                          {/* FIO DE FIBRA ÓPTICA (Verde Espesso) */}
                          <div className="absolute bottom-0 left-[192px] w-[9px] h-[100px] bg-green-600 z-0 shadow-[0_0_15px_rgba(34,197,94,0.3)]"></div>
                          <div className="absolute bottom-6 left-[135px] text-green-500 text-[10px] font-bold">FIBRA</div>

                          {/* ONT - TRASEIRA */}
                          <div className="absolute bottom-[96px] left-[147px] z-10 w-64 h-28 bg-[#1a1a1a] border-t-4 border-[#333] border-x-2 border-b-2 border-x-[#222] border-b-[#222] rounded-lg shadow-xl flex flex-col items-center">
                            <div className="absolute -top-16 left-6 w-2 h-20 bg-[#222] -z-10 rounded-t-full"></div>
                            <div className="absolute -top-16 right-6 w-2 h-20 bg-[#222] -z-10 rounded-t-full"></div>
                            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-2 h-20 bg-[#222] -z-10 rounded-t-full"></div>
                            
                            <div className="w-full text-center bg-[#E84818]/10 text-[#E84818] text-[9px] font-bold py-1 border-b border-[#333]">ONT / ROTEADOR FIBRA (TRASEIRA)</div>
                            
                            <div className="flex gap-3 mt-auto pb-4 w-full justify-center items-end">
                              <div className="flex flex-col items-center">
                                <span className="text-[8px] text-green-500 font-bold mb-1">PON</span>
                                <div className="w-7 h-7 bg-black border-2 border-green-500 rounded-sm"></div>
                              </div>
                              <div className="w-px h-8 bg-[#444] mx-2"></div>
                              <div className="flex flex-col items-center"><span className="text-[8px] text-yellow-600 font-bold mb-1">LAN</span><div className="w-6 h-6 bg-black border border-yellow-700 rounded-sm"></div></div>
                              <div className="flex flex-col items-center"><span className="text-[8px] text-yellow-600 font-bold mb-1">LAN</span><div className="w-6 h-6 bg-black border border-yellow-700 rounded-sm"></div></div>
                              <div className="flex flex-col items-center"><span className="text-[8px] text-yellow-600 font-bold mb-1">LAN</span><div className="w-6 h-6 bg-black border border-yellow-700 rounded-sm"></div></div>
                              <div className="flex flex-col items-center"><span className="text-[8px] text-yellow-600 font-bold mb-1">LAN</span><div className="w-6 h-6 bg-black border border-yellow-700 rounded-sm"></div></div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  )}

                  <div className="bg-[#121212] border-l-4 border-yellow-500 p-4 rounded-r-lg max-w-lg mb-8 text-left">
                    <p className="text-sm text-[#D2D2D2]">
                      <strong className="text-white">Regra de Ouro:</strong> Nunca dobre a ponta do cabo da fibra óptica (fio fino).<br/><br/>
                      {equipType === 'bridge' && "O cabo de rede (mais grosso, cinza ou amarelo) deve sair da entrada LAN da ONU e obrigatoriamente entrar na porta WAN / INTERNET (azul) do seu roteador principal."}
                      {equipType === 'ont' && "Verifique se a fibra óptica está bem encaixada na porta PON do roteador."}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <button onClick={reset} className="bg-[#121212] border border-[#333333] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#1a1a1a] transition-colors">
                      Voltou a funcionar!
                    </button>
                    <a href={`https://wa.me/${whatsappNumber}?text=${msgCabosCorretos}`} target="_blank" rel="noopener noreferrer" className="bg-[#E84818] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#EB6410] transition-colors shadow-[0_0_20px_rgba(232,72,24,0.3)] flex items-center justify-center gap-2">
                      Ainda sem conexão
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                  </div>
                  
                  <button onClick={prevStep} className="mt-8 text-sm text-[#D2D2D2]/50 hover:text-white transition-colors underline">Voltar ao passo anterior</button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}