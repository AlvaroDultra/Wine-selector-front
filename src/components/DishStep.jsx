import React from 'react';
import { MAIN_DISHES } from '../constants/enums';

const DishStep = ({ selected, onSelect, onSubmit, onBack, loading }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-wine-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl w-full luxury-card rounded-3xl shadow-luxury p-8 md:p-12 relative z-10">
        <div className="mb-10 text-center">
          <div className="inline-block mb-6 animate-fade-in-down">
            <div className="text-6xl animate-float">🍽️</div>
            <div className="gold-divider w-24 mx-auto mt-4"></div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide animate-fade-in-up">
            Prato <span className="gold-text">Principal</span>
          </h2>
          <p className="text-gray-400 text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A base da harmonização perfeita
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-8 h-1 bg-gold-500/50 rounded-full"></div>
            <div className="w-8 h-1 bg-gold-500/50 rounded-full"></div>
            <div className="w-16 h-1 bg-gold-500 rounded-full shadow-gold"></div>
          </div>
        </div>

        {/* Cards com opacity inicial 0 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 max-h-[450px] overflow-y-auto pr-2">
          {MAIN_DISHES.map((dish, index) => (
            <div 
              key={dish.value}
              className="opacity-0 animate-fade-in-up"
              style={{ 
                animationDelay: `${0.6 + index * 0.06}s`,
                animationFillMode: 'forwards'
              }}
            >
              <button
                onClick={() => onSelect(dish.value)}
                disabled={loading}
                className={`selection-card w-full group p-5 rounded-2xl transition-all duration-300 ${
                  selected === dish.value ? 'selected' : ''
                } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="text-4xl mb-1 transform group-hover:scale-110 transition-transform duration-300">
                    {dish.icon}
                  </div>
                  <h3 className={`font-semibold text-sm transition-colors leading-tight ${
                    selected === dish.value 
                      ? 'text-gold-400' 
                      : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {dish.label}
                  </h3>
                  
                  {selected === dish.value && (
                    <div className="mt-1 w-2 h-2 rounded-full bg-gold-500 animate-pulse shadow-gold"></div>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-4 opacity-0 animate-fade-in-up" style={{ 
          animationDelay: '1.4s',
          animationFillMode: 'forwards'
        }}>
          <button
            onClick={onBack}
            disabled={loading}
            className="flex-1 bg-dark-700 hover:bg-dark-800 text-gray-300 hover:text-white px-8 py-5 rounded-full font-semibold transition-all duration-300 border border-gray-800 hover:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar
            </span>
          </button>
          
          <button
            onClick={onSubmit}
            disabled={!selected || loading}
            className={`flex-1 px-8 py-5 rounded-full font-semibold transition-all duration-300 ${
              selected && !loading
                ? 'luxury-button text-white'
                : 'bg-gray-900 text-gray-600 cursor-not-allowed border border-gray-800'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Calculando...
                </>
              ) : (
                <>
                  Ver Recomendação
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishStep;