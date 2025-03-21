import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Nossos Recursos</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-rocket"></i>
            <h3>Rápido</h3>
            <p>Performance otimizada para melhor experiência</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Seguro</h3>
            <p>Proteção de dados em primeiro lugar</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-cog"></i>
            <h3>Customizável</h3>
            <p>Adaptável às suas necessidades</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features; 