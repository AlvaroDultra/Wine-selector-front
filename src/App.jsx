import { useState } from 'react';
import Welcome from './components/Welcome';
import OccasionStep from './components/OccasionStep';
import IntimacyStep from './components/IntimacyStep';
import DishStep from './components/DishStep';
import Result from './components/Result';
import { getRecommendation } from './services/api';

function App() {
  const [step, setStep] = useState(0);
  const [occasion, setOccasion] = useState('');
  const [intimacyLevel, setIntimacyLevel] = useState('');
  const [mainDish, setMainDish] = useState('');
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStepChange = (newStep) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(newStep);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 600);
  };

  const handleStart = () => handleStepChange(1);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await getRecommendation(occasion, intimacyLevel, mainDish);
      setRecommendation(result);
      handleStepChange(4);
    } catch (err) {
      setError('Erro ao obter recomendação. Verifique se o backend está rodando.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRestart = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(0);
      setOccasion('');
      setIntimacyLevel('');
      setMainDish('');
      setRecommendation(null);
      setError(null);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 600);
  };

  return (
    <div className="App relative">
      {/* Overlay de transição com fade suave */}
      <div 
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-700 ${
          isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      ></div>

      {/* Componentes com animação */}
      <div className={`transition-opacity duration-500 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}>
        {step === 0 && (
          <div className="animate-fade-in-up">
            <Welcome onStart={handleStart} />
          </div>
        )}
        
        {step === 1 && (
          <div className="animate-fade-in-up">
            <OccasionStep
              selected={occasion}
              onSelect={setOccasion}
              onNext={() => handleStepChange(2)}
              onBack={() => handleStepChange(0)}
            />
          </div>
        )}
        
        {step === 2 && (
          <div className="animate-fade-in-up">
            <IntimacyStep
              selected={intimacyLevel}
              onSelect={setIntimacyLevel}
              onNext={() => handleStepChange(3)}
              onBack={() => handleStepChange(1)}
            />
          </div>
        )}
        
        {step === 3 && (
          <div className="animate-fade-in-up">
            <DishStep
              selected={mainDish}
              onSelect={setMainDish}
              onSubmit={handleSubmit}
              onBack={() => handleStepChange(2)}
              loading={loading}
            />
          </div>
        )}
        
        {step === 4 && (
          <div className="animate-scale-in">
            <Result
              recommendation={recommendation}
              onRestart={handleRestart}
            />
          </div>
        )}
      </div>

      {/* Toast de erro com animação */}
      {error && (
        <div className="fixed bottom-8 right-8 bg-gradient-to-r from-red-900 to-red-800 text-white px-8 py-4 rounded-2xl shadow-luxury border border-red-700 animate-fade-in-up z-50">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <p className="font-medium">{error}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;