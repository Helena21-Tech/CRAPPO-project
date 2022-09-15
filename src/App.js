import React from 'react';
import './App.css';
import CardInfo from './components/CardSection/CardInfo';
import Features from './components/FeaturesSection/Features';
import Footer from './components/footer/Footer';
import IntroSection from './components/IntroSection/IntroSection';
import News from './components/NewsSection/News';
function App() {
  return (
    <div className="App">
      <IntroSection />
      <CardInfo/>
      <Features />
      <News />
      <Footer />
    </div>
  );
}

export default App;
