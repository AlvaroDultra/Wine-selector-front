import React from 'react';

const Result = ({ recommendation, onRestart }) => {
  if (!recommendation) return null;

  const getWineEmoji = (profile) => {
    if (profile.includes('TINTO')) return '🍷';
    if (profile.includes('BRANCO')) return '🥂';
    if (profile.includes('ROSE')) return '🌸';
    if (profile.includes('ESPUMANTE')) return '🍾';
    return '🍷';
  };

  const getWineColor = (profile) => {
    if (profile.includes('TINTO')) return 'from-red-900 to-wine-900';
    if (profile.includes('BRANCO')) return 'from-yellow-600 to-amber-700';
    if (profile.includes('ROSE')) return 'from-pink-600 to-rose-700';
    if (profile.includes('ESPUMANTE')) return 'from-amber-500 to-yellow-600';
    return 'from-wine-800 to-wine-900';
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl w-full luxury-card rounded-3xl shadow-luxury-hover p-8 md:p-16 relative z-10">
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <div className="text-8xl animate-float filter drop-shadow-2xl">
              {getWineEmoji(recommendation.recommendedProfile)}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-40 h-40 bg-gradient-to-r ${getWineColor(recommendation.recommendedProfile)} opacity-20 rounded-full blur-3xl animate-glow`}></div>
            </div>
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 tracking-wide">
            <span className="gold-text">{recommendation.displayName}</span>
          </h2>
          
          <div className="gold-divider w-32 mx-auto mb-6"></div>
          
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-wine-900/50 to-dark-800 px-8 py-4 rounded-full border border-gold-500/30 shadow-gold">
            <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-gold-400 font-bold text-2xl">{recommendation.score}</span>
            <span className="text-gold-500/70 text-sm font-medium">PONTOS</span>
          </div>
        </div>

        <div className="mb-8 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-wine-800 to-wine-950 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl p-8 border border-wine-900/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-wine-700 to-wine-900 flex items-center justify-center shadow-wine">
                <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-gold-400 font-semibold text-xl mb-3 tracking-wide">Sobre Este Vinho</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {recommendation.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gold-600/30 to-wine-800/30 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
          <div className="relative bg-gradient-to-br from-wine-950/50 to-dark-800 rounded-2xl p-8 border border-gold-500/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-gold">
                <svg className="w-5 h-5 text-wine-950" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-gold-300 font-semibold text-xl mb-3 tracking-wide">Por Que Esta Escolha?</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {recommendation.justification}
                </p>
              </div>
            </div>
          </div>
        </div>

        {recommendation.alternativeProfile && (
          <div className="mb-10 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-300 font-semibold text-lg mb-3">Alternativa Sugerida</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold text-xl mb-1">
                        {recommendation.alternativeDisplayName}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {recommendation.alternativeScore} pontos
                      </p>
                    </div>
                    <div className="text-5xl">
                      {getWineEmoji(recommendation.alternativeProfile)}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                    {recommendation.alternativeDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={onRestart}
          className="luxury-button w-full px-8 py-6 rounded-full text-xl font-semibold text-white transition-all duration-300 group"
        >
          <span className="flex items-center justify-center gap-3">
            <svg className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Nova Recomendação
          </span>
        </button>

        <p className="mt-8 text-center text-gray-600 text-sm italic tracking-widest">
          APROVEITE SUA ESCOLHA EXCLUSIVA
        </p>
      </div>
    </div>
  );
};

export default Result;