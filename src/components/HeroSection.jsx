import React from 'react';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFA1'];

const HeroSection = () => {
  const title = "Soluções Criativas e Personalizadas para Educação Inclusiva";

  return (
    <div
      className="hero-container d-flex flex-column align-items-center justify-content-center text-center px-3"
      style={{ height: '100vh', paddingTop: '2rem', paddingBottom: '2rem'}} id='home'
    >
      {/* Título animado */}
      <h1
        className="animate__animated animate__fadeInUp fw-bold text-center"
        style={{
          color: 'black',
          fontSize: 'calc(1.5rem + 3vw)', // tamanho responsivo
          maxWidth: '90%',
          lineHeight: 1.2,
          marginBottom: '1rem',
        }}
      >
        {title.split("").map((char, index) => (
          <span key={index} style={{ color: colors[index % colors.length] }}>
            {char}
          </span>
        ))}
      </h1>

      {/* Subtítulo com animação */}
      <p
        className="animate__animated animate__fadeIn animate__delay-1s fs-5"
        style={{ maxWidth: '90%', marginBottom: '2rem' }}
      >
        Planejamento Inteligente para Eventos Exclusivos e Experiências Memoráveis Sob Medida
      </p>

      {/* Botão animado com ícone FontAwesome */}
      <a
        href="#contato"
        className="btn btn-dark btn-lg animate__animated animate__fadeIn animate__delay-1s d-inline-flex align-items-center"
        style={{ paddingLeft: '2rem', paddingRight: '2rem' }}
      >
        <i className="fas fa-arrow-right me-2"></i> Contato
      </a>
    </div>
  );
};

export default HeroSection;
