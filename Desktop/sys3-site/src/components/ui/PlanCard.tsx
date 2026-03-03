import React from 'react';

interface PlanCardProps {
  mega: string;
  originalPrice?: string;
  discountPrice: string;
  features: string[];
  isHighlighted?: boolean;
  badgeText?: string;
}

export const PlanCard = ({ mega, originalPrice, discountPrice, features, isHighlighted, badgeText }: PlanCardProps) => {
  return (
    <div className={`group relative p-[2px] rounded-3xl transition-all duration-500 hover:scale-[1.03] flex-shrink-0 w-[300px] sm:w-[320px] snap-center select-none ${
      isHighlighted ? 'scale-[1.02] md:scale-[1.05] z-10' : ''
    }`}>
      
      {badgeText && (
        <div className="absolute -top-4 right-6 bg-gradient-to-r from-[#E84818] to-[#EB6410] text-[#FFFFFF] text-[10px] font-black uppercase tracking-wider py-1.5 px-4 rounded-full shadow-[0_5px_20px_rgba(232,72,24,0.6)] z-20 border border-[#EB6410]/50">
          {badgeText}
        </div>
      )}

      <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
        isHighlighted 
          ? 'bg-gradient-to-br from-[#E84818] via-[#EB6410] to-[#E84818] opacity-100 animate-gradient bg-[length:200%_auto]' 
          : 'bg-[#333333] opacity-100 group-hover:bg-gradient-to-br group-hover:from-[#E84818]/60 group-hover:via-transparent group-hover:to-[#E84818]/30'
      }`} />
      
      <div className="relative bg-[#000000] backdrop-blur-xl p-6 sm:p-8 rounded-[22px] h-full flex flex-col z-10">
        <div className="mb-6 mt-2">
          <span className={`text-xs font-bold tracking-[0.2em] uppercase ${isHighlighted ? 'text-[#EB6410]' : 'text-[#E84818]'}`}>
            Plano Residencial
          </span>
          {/* AJUSTE AQUI: text-5xl no celular, md:text-6xl no PC */}
          <h3 className="text-5xl md:text-6xl font-black text-[#FFFFFF] mt-2 leading-none">
            {mega}<span className="text-xl md:text-2xl text-[#E84818] ml-1 uppercase">Mega</span>
          </h3>
        </div>

        <ul className="space-y-4 mb-8 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-[#D2D2D2] text-sm">
              <span className="mr-3 text-[#E84818] font-bold mt-0.5">✓</span> 
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="border-t border-[#333333] pt-6 mt-auto">
          <div className="flex flex-col mb-4">
            {originalPrice && (
              <span className="text-[#D2D2D2]/50 text-sm line-through mb-1">
                De R$ {originalPrice}
              </span>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-[#D2D2D2] text-sm">R$</span>
              {/* AJUSTE AQUI: text-3xl no celular, md:text-4xl no PC */}
              <span className={`text-3xl md:text-4xl font-black ${isHighlighted ? 'text-[#FFFFFF]' : 'text-[#FFFFFF]'}`}>
                {discountPrice}
              </span>
              <span className="text-[#D2D2D2] text-xs">/mês*</span>
            </div>
            {originalPrice && (
              <span className="text-[#E84818] text-[10px] font-bold uppercase mt-1">
                *Pagando até o vencimento
              </span>
            )}
          </div>
          
          <a 
            href="https://zapisp.com.br/convite/d7148203e1b947c74a0fb84d41ad"
            target="_blank"
            rel="noopener noreferrer"
            className={`block text-center w-full py-4 font-extrabold rounded-xl transition-all duration-300 pointer-events-auto ${
              isHighlighted 
                ? 'bg-[#E84818] text-[#FFFFFF] shadow-[0_0_20px_rgba(232,72,24,0.3)] hover:bg-[#EB6410] hover:shadow-[#EB6410]/50' 
                : 'bg-[#FFFFFF] text-[#000000] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-[#E84818] hover:text-[#FFFFFF] hover:shadow-[#E84818]/40'
            }`}
          >
            ASSINAR AGORA
          </a>
        </div>
      </div>
    </div>
  );
};