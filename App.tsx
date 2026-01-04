import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import Narrative from './components/Narrative';
import Rates from './components/Rates';
import Bios from './components/Bios';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-cream selection:text-dark relative bg-dark">
      {/* Content wrapper */}
      <div className="relative z-20">
        <Header />
        <main>
          <Hero />
          <Events />
          <Narrative />
          <Rates />
          <Calculator />
          <Bios />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;