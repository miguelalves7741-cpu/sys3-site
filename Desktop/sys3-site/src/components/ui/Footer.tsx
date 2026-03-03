import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  const whatsappNumber = "558330455368"; 

  return (
    <footer className="bg-[#000000] border-t border-[#333333] pt-20 pb-10 select-none">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Marca, Sobre e Apps */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-1 mb-6">
              <Image 
                src="/logo-footer.svg" 
                alt="SYS3 Telecom" 
                width={140} 
                height={50} 
                className="object-contain"
              />
            </a>
            <p className="text-[#D2D2D2] text-sm leading-relaxed mb-6 font-light">
              A internet inteligente que a sua casa e a sua empresa merecem. Conexão 100% fibra óptica com tecnologia de ponta.
            </p>
            
            {/* Lojas de Aplicativos (ÍCONES CORRIGIDOS) */}
            <div className="flex flex-col gap-3 mb-8">
              <a href="https://play.google.com/store/apps/details?id=br.com.appdoprovedor.sys3telecom&hl=pt_BR" target="_blank" rel="noopener noreferrer" className="bg-[#121212] border border-[#333333] rounded-xl p-3 flex items-center gap-3 hover:border-[#E84818] transition-colors w-full sm:w-48">
                <svg className="w-7 h-7 text-[#FFFFFF]" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#D2D2D2] leading-none mb-0.5">DISPONÍVEL NO</span>
                  <span className="text-sm font-bold text-[#FFFFFF] leading-tight">Google Play</span>
                </div>
              </a>
              <a href="https://apps.apple.com/br/app/sys3-internet/id1540574011" target="_blank" rel="noopener noreferrer" className="bg-[#121212] border border-[#333333] rounded-xl p-3 flex items-center gap-3 hover:border-[#E84818] transition-colors w-full sm:w-48">
                <svg className="w-7 h-7 text-[#FFFFFF]" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#D2D2D2] leading-none mb-0.5">BAIXAR NA</span>
                  <span className="text-sm font-bold text-[#FFFFFF] leading-tight">App Store</span>
                </div>
              </a>
            </div>

            {/* Ícones de Redes Sociais */}
            <div className="flex gap-4">
              <a href="https://www.facebook.com/sys3telecom/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#121212] border border-[#333333] flex items-center justify-center text-[#D2D2D2] hover:bg-[#E84818] hover:text-[#FFFFFF] hover:border-[#E84818] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
              </a>
              <a href="https://www.instagram.com/sys3internet/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#121212] border border-[#333333] flex items-center justify-center text-[#D2D2D2] hover:bg-[#E84818] hover:text-[#FFFFFF] hover:border-[#E84818] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação rápida */}
          <div>
            <h4 className="text-[#FFFFFF] font-bold mb-6 tracking-wide">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#planos" className="text-[#D2D2D2] hover:text-[#E84818] transition-colors text-sm">Planos Residenciais</a></li>
              <li><a href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20Planos%20Empresariais.`} target="_blank" rel="noopener noreferrer" className="text-[#D2D2D2] hover:text-[#E84818] transition-colors text-sm">Planos Empresariais</a></li>
              <li><a href="https://central.sys3telecom.com.br/accounts/central/login" target="_blank" rel="noopener noreferrer" className="text-[#D2D2D2] hover:text-[#E84818] transition-colors text-sm">Área do Cliente</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contacto */}
          <div>
            <h4 className="text-[#FFFFFF] font-bold mb-6 tracking-wide">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-[#D2D2D2] text-sm">
                <span className="text-[#E84818] mr-3">📞</span> (83) 3045-5368
              </li>
              <li className="flex items-start text-[#D2D2D2] text-sm">
                <span className="text-[#E84818] mr-3">📱</span> Suporte online 24h
              </li>
              <li className="flex items-start text-[#D2D2D2] text-sm">
                <span className="text-[#E84818] mr-3">📧</span> contato@sys3telecom.com.br
              </li>
              <li className="flex items-start text-[#D2D2D2] text-sm">
                <span className="text-[#E84818] mr-3">📍</span> João Pessoa, Paraíba
              </li>
            </ul>
          </div>

          {/* Coluna 4: Legal & Segurança */}
          <div>
            <h4 className="text-[#FFFFFF] font-bold mb-6 tracking-wide">Segurança</h4>
            <ul className="space-y-4 mb-6">
              <li><a href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20meu%20Contrato%20de%20Ades%C3%A3o.`} target="_blank" rel="noopener noreferrer" className="text-[#D2D2D2] hover:text-[#E84818] transition-colors text-sm">Contrato de Adesão</a></li>
              <li><a href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20as%20Pol%C3%ADticas%20de%20Privacidade.`} target="_blank" rel="noopener noreferrer" className="text-[#D2D2D2] hover:text-[#E84818] transition-colors text-sm">Políticas de Privacidade</a></li>
            </ul>
            <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-[#121212] border border-[#333333]">
              <div className="w-8 h-8 bg-[#E84818]/20 flex items-center justify-center rounded-lg">
                <svg className="w-5 h-5 text-[#E84818]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#D2D2D2] uppercase tracking-wider font-bold">Empresa Autorizada</span>
                <span className="text-sm font-black text-[#FFFFFF]">ANATEL</span>
              </div>
            </div>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="border-t border-[#333333] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#D2D2D2]/60 text-xs text-center md:text-left">
            © {new Date().getFullYear()} SYS3 Telecom. Todos os direitos reservados.
          </p>
          <p className="text-[#D2D2D2]/60 text-xs text-center md:text-right">
            CNPJ: 20.888.174/0001-00 
          </p>
        </div>
      </div>
    </footer>
  );
};