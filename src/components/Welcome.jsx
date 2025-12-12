import React from 'react';

const Welcome = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Brilho de fundo animado */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-wine-900/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl w-full luxury-card rounded-3xl shadow-luxury p-8 md:p-16 text-center relative z-10">
        {/* Logo com efeito de flutuação */}
        <div className="mb-8 relative animate-float">
          <div className="relative inline-block">
            <span className="text-9xl filter drop-shadow-2xl">🍷</span>
            {/* Aura dourada pulsante */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gold-500/20 rounded-full blur-3xl animate-glow"></div>
            </div>
          </div>
        </div>
        
        {/* Título majestoso */}
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 tracking-wider">
          <span className="gold-text">Wine Selector</span>
        </h1>
        
        {/* Linha decorativa dourada */}
        <div className="gold-divider w-48 mx-auto mb-8"></div>
        
        {/* Subtítulo elegante */}
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light tracking-wide">
          A Arte da Escolha Perfeita
        </p>
        <p className="text-base text-gray-500 mb-12 italic">
          Onde sofisticação encontra precisão
        </p>
        
        {/* Box de etapas premium */}
        <div className="luxury-card rounded-2xl p-10 mb-12 border-wine-700">
          <h3 className="font-serif font-semibold text-gold-400 mb-8 text-3xl tracking-wider">
            Sua Jornada Exclusiva
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {/* Etapa 1 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-wine-800 to-wine-950 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-dark-800 rounded-xl p-6 border border-wine-900/50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-wine-700 to-wine-900 flex items-center justify-center font-bold text-xl text-gold-400 shadow-gold">
                    01
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold mb-1 text-lg">Ocasião</p>
                    <p className="text-gray-400 text-sm">O contexto define a elegância</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-wine-800 to-wine-950 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-dark-800 rounded-xl p-6 border border-wine-900/50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-wine-700 to-wine-900 flex items-center justify-center font-bold text-xl text-gold-400 shadow-gold">
                    02
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold mb-1 text-lg">Intimidade</p>
                    <p className="text-gray-400 text-sm">Cada relação, uma atenção única</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-wine-800 to-wine-950 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-dark-800 rounded-xl p-6 border border-wine-900/50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-wine-700 to-wine-900 flex items-center justify-center font-bold text-xl text-gold-400 shadow-gold">
                    03
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold mb-1 text-lg">Prato Principal</p>
                    <p className="text-gray-400 text-sm">A harmonização perfeita</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 4 - Resultado */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-600 to-gold-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-wine-900/80 to-dark-800 rounded-xl p-6 border border-gold-500/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-2xl shadow-gold-strong">
                    ✨
                  </div>
                  <div className="flex-1">
                    <p className="text-gold-300 font-semibold mb-1 text-lg">Recomendação</p>
                    <p className="text-gold-500/70 text-sm">Sua escolha exclusiva aguarda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Botão de início premium */}
        <button
          onClick={onStart}
          className="luxury-button group relative px-16 py-6 rounded-full text-xl font-semibold text-white transition-all duration-300"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            <span className="tracking-wider">Iniciar Experiência</span>
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        {/* Assinatura sutil */}
        <p className="mt-12 text-gray-600 text-sm italic tracking-widest">
          CRAFTED WITH PRECISION
        </p>
      </div>
    </div>
  );
};

export default Welcome;