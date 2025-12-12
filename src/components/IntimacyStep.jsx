import React from 'react';
import { INTIMACY_LEVELS } from '../constants/enums';

const IntimacyStep = ({ selected, onSelect, onNext, onBack }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-wine-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl w-full luxury-card rounded-3xl shadow-luxury p-8 md:p-12 relative z-10">
        <div className="mb-10 text-center">
          <div className="inline-block mb-6 animate-fade-in-down">
            <div className="text-6xl animate-float">🤝</div>
            <div className="gold-divider w-24 mx-auto mt-4"></div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide animate-fade-in-up">
            Nível de <span className="gold-text">Intimidade</span>
          </h2>
          <p className="text-gray-400 text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Cada relação merece uma atenção especial
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-8 h-1 bg-gold-500/50 rounded-full"></div>
            <div className="w-16 h-1 bg-gold-500 rounded-full shadow-gold"></div>
            <div className="w-8 h-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>

        {/* Cards com opacity inicial 0 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10 max-h-[500px] overflow-y-auto pr-2">
          {INTIMACY_LEVELS.map((level, index) => (
            <div 
              key={level.value}
              className="opacity-0 animate-fade-in-up"
              style={{ 
                animationDelay: `${0.6 + index * 0.08}s`,
                animationFillMode: 'forwards'
              }}
            >
              <button
                onClick={() => onSelect(level.value)}
                className={`selection-card w-full group p-5 rounded-2xl transition-all duration-300 ${
                  selected === level.value ? 'selected' : ''
                }`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="text-4xl mb-1 transform group-hover:scale-110 transition-transform duration-300">
                    {level.icon}
                  </div>
                  <h3 className={`font-semibold text-sm transition-colors leading-tight ${
                    selected === level.value 
                      ? 'text-gold-400' 
                      : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {level.label}
                  </h3>
                  
                  {selected === level.value && (
                    <div className="mt-1 w-2 h-2 rounded-full bg-gold-500 animate-pulse shadow-gold"></div>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-4 opacity-0 animate-fade-in-up" style={{ 
          animationDelay: '1.5s',
          animationFillMode: 'forwards'
        }}>
          <button
            onClick={onBack}
            className="flex-1 bg-dark-700 hover:bg-dark-800 text-gray-300 hover:text-white px-8 py-5 rounded-full font-semibold transition-all duration-300 border border-gray-800 hover:border-gray-700"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar
            </span>
          </button>
          
          <button
            onClick={onNext}
            disabled={!selected}
            className={`flex-1 px-8 py-5 rounded-full font-semibold transition-all duration-300 ${
              selected
                ? 'luxury-button text-white'
                : 'bg-gray-900 text-gray-600 cursor-not-allowed border border-gray-800'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              Próximo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntimacyStep;