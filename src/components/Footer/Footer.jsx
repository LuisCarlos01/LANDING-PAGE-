import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sobre Nós</h3>
            <p>Somos uma empresa dedicada a criar soluções inovadoras para nossos clientes.</p>
          </div>
          <div className="footer-section">
            <h3>Contato</h3>
            <p>Email: contato@empresa.com</p>
            <p>Telefone: (11) 1234-5678</p>
          </div>
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Sua Empresa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 