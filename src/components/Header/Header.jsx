import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <h1>Logo</h1>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Recursos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 