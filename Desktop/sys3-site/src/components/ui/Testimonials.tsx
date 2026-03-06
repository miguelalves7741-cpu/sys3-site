"use client";
import React from 'react';
import { motion } from 'framer-motion';

const depoimentos = [
  {
    nome: "Lucas Andrade",
    perfil: "Avaliação no Google",
    estrelas: 5,
    texto: "Instalei a internet da Sys3 faz uns 3 meses e até agora não tive nenhum problema. Trabalho em casa e preciso de estabilidade. A velocidade chega bem próxima do que foi contratado."
  },
  {
    nome: "Patrícia Gomes",
    perfil: "Cliente residencial",
    estrelas: 4,
    texto: "A internet é muito boa e estável. A instalação demorou um pouco mais do que eu esperava, mas depois disso não tive mais dor de cabeça."
  },
  {
    nome: "João Victor N.",
    perfil: "Gamer",
    estrelas: 5,
    texto: "Pra quem joga online vale muito a pena. Antes meu ping era bem alto em alguns jogos, agora ficou bem mais estável. Até download de jogo pesado vai rapidinho."
  },
  {
    nome: "Marcos Silva",
    perfil: "Cliente há 1 ano",
    estrelas: 5,
    texto: "Já tive internet de duas operadoras grandes e sempre dava problema quando chovia. Com a Sys3 está funcionando bem melhor aqui no bairro."
  },
  {
    nome: "Camila Rodrigues",
    perfil: "Home Office",
    estrelas: 4,
    texto: "Uso bastante para reuniões no trabalho e chamadas de vídeo. Até agora tem sido bem estável. Só tive uma queda rápida um dia, mas voltou logo."
  },
  {
    nome: "Rafael Souza",
    perfil: "Cliente residencial",
    estrelas: 5,
    texto: "A instalação foi rápida e o técnico foi bem educado. Explicou tudo sobre o roteador e como melhorar o Wi-Fi dentro de casa."
  },
  {
    nome: "Juliana Freitas",
    perfil: "Família com filhos",
    estrelas: 5,
    texto: "Aqui em casa todo mundo usa internet ao mesmo tempo: celular, TV e videogame. Mesmo assim continua rápida. Não tenho do que reclamar."
  },
  {
    nome: "André Batista",
    perfil: "Cliente recente",
    estrelas: 4,
    texto: "Assinei há pouco tempo e até agora está funcionando bem. A velocidade é boa e o atendimento no WhatsApp respondeu rápido quando tive dúvida."
  },
  {
    nome: "Tatiane Melo",
    perfil: "Cliente residencial",
    estrelas: 5,
    texto: "Gostei bastante do serviço. A internet é rápida e não fica caindo como a que eu tinha antes. Espero que continue assim."
  },
  {
    nome: "Diego Carvalho",
    perfil: "Usuário de streaming",
    estrelas: 5,
    texto: "Uso bastante Netflix e YouTube em 4K e roda sem travar. Também faço downloads grandes e a velocidade é muito boa."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 relative bg-[#050505] border-t border-[#333333]/50 overflow-hidden">
      {/* Luz de fundo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#E84818]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#FFFFFF] uppercase tracking-tighter">
            Aprovado por <span className="text-[#E84818]">quem usa</span>
          </h2>
          <p className="text-[#D2D2D2] text-xl font-light">Não ouça apenas nós. Veja o que nossos clientes têm a dizer.</p>
        </div>

        {/* CARROSSEL DESLIZÁVEL */}
        <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {depoimentos.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              // min-w-[90vw] garante o tamanho no celular, md:min-w-[400px] no computador
              className="min-w-[90vw] md:min-w-[400px] shrink-0 snap-center bg-[#000000]/50 backdrop-blur-md p-10 rounded-3xl border border-[#333333] relative group hover:border-[#E84818]/40 transition-colors flex flex-col h-full cursor-grab active:cursor-grabbing"
            >
              {/* Aspas decorativas no fundo */}
              <div className="absolute top-6 right-8 text-[#E84818]/10 group-hover:text-[#E84818]/20 transition-colors pointer-events-none">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" /></svg>
              </div>
              
              {/* Estrelas Dinâmicas */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, index) => (
                  <svg 
                    key={index} 
                    className={`w-5 h-5 ${index < t.estrelas ? "text-yellow-500" : "text-[#333333]"}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              
              <p className="text-[#D2D2D2] text-lg italic mb-10 relative z-10 leading-relaxed font-light select-none">
                "{t.texto}"
              </p>
              
              {/* Rodapé do Card */}
              <div className="flex items-center gap-4 border-t border-[#333333] pt-6 mt-auto">
                <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-[#E84818] to-[#EB6410] rounded-full flex items-center justify-center text-[#FFFFFF] font-bold text-lg shadow-[0_0_15px_rgba(232,72,24,0.4)]">
                  {t.nome.charAt(0)}
                </div>
                <div>
                  <h4 className="text-[#FFFFFF] font-bold leading-tight">{t.nome}</h4>
                  <span className="text-[#D2D2D2]/60 text-sm">{t.perfil}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Dica visual para arrastar no celular */}
        <div className="flex justify-center mt-2 md:hidden">
          <span className="text-xs text-[#666666] flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
            Deslize para ver mais
          </span>
        </div>

      </div>
    </section>
  );
};