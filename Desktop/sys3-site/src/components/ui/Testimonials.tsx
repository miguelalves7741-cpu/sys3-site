"use client";
import React from 'react';
import { motion } from 'framer-motion';

const depoimentos = [
  {
    nome: "Rafael S.",
    perfil: "Gamer e Streamer",
    estrelas: 5,
    texto: "Saí de uma operadora grande porque meu ping em jogos competitivos era horrível. Assinei os 600 Mega da Sys3 e a diferença é absurda. Ping cravado e a rota deles é muito boa. Recomendo.",
  },
  {
    nome: "Mariana Costa",
    perfil: "Home Office",
    estrelas: 4,
    texto: "A internet em si é maravilhosa, super estável para minhas reuniões de vídeo. Dei 4 estrelas apenas porque o técnico atrasou meia hora no dia da instalação. Tirando isso, o serviço dá de 10 a 0 nas concorrentes.",
  },
  {
    nome: "Carlos Eduardo",
    perfil: "Cliente há 2 anos",
    estrelas: 5,
    texto: "O que mais me impressiona é o suporte. Quando tive um problema de rompimento na minha rua, me atenderam de madrugada pelo WhatsApp e resolveram logo cedo. Empresa séria.",
  },
  {
    nome: "Juliana T.",
    perfil: "Mãe de 2 filhos",
    estrelas: 4,
    texto: "O plano com Wi-Fi 6 é realmente rápido, consigo assistir 4K na sala enquanto os meninos jogam online. Só precisei adicionar um roteador Mesh extra porque minha casa é comprida, mas o próprio suporte deles me ajudou com isso.",
  },
  {
    nome: "Thiago Mendes",
    perfil: "Empresário",
    estrelas: 5,
    texto: "Instalei na minha loja e também em casa. A estabilidade da Sys3 aqui em João Pessoa não tem igual. Acabou minha dor de cabeça com internet caindo sempre que chove forte.",
  },
  {
    nome: "Anderson Lima",
    perfil: "Cliente Residencial",
    estrelas: 5,
    texto: "Instalei a Sys3 há uns 6 meses e até agora não tive dor de cabeça. Trabalho em casa e preciso de internet estável para reuniões e envio de arquivos. Até em dias de chuva forte continua funcionando normal.",
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 relative bg-[#050505] border-t border-[#333333]/50 overflow-hidden">
      {/* Luz de fundo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#E84818]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#FFFFFF] uppercase tracking-tighter">
            Aprovado por <span className="text-[#E84818]">quem usa</span>
          </h2>
          <p className="text-[#D2D2D2] text-xl font-light">Não ouça apenas nós. Veja o que nossos clientes têm a dizer.</p>
        </div>

        {/* Grid responsivo: 1 coluna no celular, 2 em tablets, 3 em telas grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[#000000]/50 backdrop-blur-md p-10 rounded-3xl border border-[#333333] relative group hover:border-[#E84818]/40 transition-colors flex flex-col h-full"
            >
              {/* Aspas decorativas (Ícone gigante de aspas no fundo) */}
              <div className="absolute top-6 right-8 text-[#E84818]/10 group-hover:text-[#E84818]/20 transition-colors">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" /></svg>
              </div>
              
              {/* Lógica Inteligente: Imprime 5 estrelas e pinta baseado na nota */}
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
              
              <p className="text-[#D2D2D2] text-lg italic mb-10 relative z-10 leading-relaxed font-light">
                "{t.texto}"
              </p>
              
              {/* mt-auto empurra o rodapé do card sempre para o fundo */}
              <div className="flex items-center gap-4 border-t border-[#333333] pt-6 mt-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E84818] to-[#EB6410] rounded-full flex items-center justify-center text-[#FFFFFF] font-bold text-lg shadow-[0_0_15px_rgba(232,72,24,0.4)]">
                  {t.nome.charAt(0)}
                </div>
                <div>
                  <h4 className="text-[#FFFFFF] font-bold">{t.nome}</h4>
                  <span className="text-[#D2D2D2]/60 text-sm">{t.perfil}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};