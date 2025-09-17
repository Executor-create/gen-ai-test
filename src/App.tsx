import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import NewReleases from './components/NewReleases';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <BestSellers />
      <NewReleases />
      <Footer />
    </div>
  );
}

export default App;