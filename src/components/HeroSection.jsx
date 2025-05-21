import React from 'react';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFA1', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000'];
const HeroSection = () => {
  const title = "Soluções Criativas e Personalizadas para Educação Inclusiva";
  return (
    <div className="hero-container d-flex flex-column align-items-center justify-content-center text-center mt-5 pt-5">
      {/* Título animado */}
      <h1 className="animate__animated animate__fadeInUp fw-bold display-1 w-75 text-center">
      {title.split("").map((char, index) => (
        <span key={index} style={{ color: colors[index % colors.length] }}>
          {char}
        </span>
      ))}
    </h1>

      {/* Subtítulo com animação */}
      <p className="animate__animated animate__fadeIn animate__delay-1s fs-4 pt-5 ">
        Planejamento Inteligente para Eventos Exclusivos e Experiências Memoráveis Sob Medida
      </p>

      {/* Botão animado com ícone FontAwesome */}
      <button className="btn btn-dark btn-lg animate__animated animate__fadeIn animate__delay-2s mt-5">
        <i className="fas fa-arrow-right me-2"></i> Acessar serviços gerais
      </button>
    </div>
  );
};

export default HeroSection;
