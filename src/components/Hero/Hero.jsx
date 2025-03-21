import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Bem-vindo à Nossa Landing Page</h1>
          <p>Uma solução inovadora para suas necessidades</p>
          <button className="cta-button">Comece Agora</button>
        </div>
      </div>
    </section>
  );
}

export default Hero; 