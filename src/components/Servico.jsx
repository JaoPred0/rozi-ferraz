import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Servico.css';

const servicos = [
  {
    titulo: 'Xerox e Impressões',
    descricao: 'Serviços de cópia e impressão em preto e branco ou colorido, essenciais para uso pessoal ou profissional.',
  },
  {
    titulo: 'Plastificação',
    descricao: 'Aplica uma camada protetora de plástico a documentos, aumentando sua durabilidade contra desgaste e sujeira.',
  },
  {
    titulo: 'Criação de Cartazes',
    descricao: 'Design e impressão de cartazes para eventos, produtos ou serviços, com variados tamanhos e estilos.',
  },
  {
    titulo: 'Digitalização de Documentos',
    descricao: 'Conversão de documentos físicos para formatos digitais (PDF, JPEG), facilitando o armazenamento seguro.',
  },
  {
    titulo: 'Personalização de Produtos',
    descricao: 'Personalização de cadernos, etiquetas escolares e outros com nome ou mensagem especial.',
  },
  {
    titulo: 'Criação de Convites / Lembranças',
    descricao: 'Design e impressão de convites e lembranças para festas, casamentos, aniversários e eventos especiais.',
  },
  {
    titulo: 'Consultoria Escolar para Pais (Autista)',
    descricao: 'Orientação para pais de crianças autistas sobre estratégias educacionais e recursos escolares.',
  },
  {
    titulo: 'Etiquetas Escolares com Nome + Personagens',
    descricao: 'Criação de etiquetas divertidas e personalizadas com nome da criança e personagens favoritos.',
  },
  {
    titulo: 'Venda de kits pedagógicos (Autista)',
    descricao: 'Kits com materiais educativos adaptados, como jogos e recursos visuais para desenvolvimento infantil.',
  },
];

const cardColors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFA1'];

const Servico = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5 "> 
      {/* Título principal com id="servico" */}
      <div id="servico" className="text-center mb-5">
        <h1 className="titulo-servico display-4 fw-bold">Nossos Serviços</h1>
        <p className="lead">Conheça tudo que podemos oferecer para facilitar seu dia a dia!</p>
      </div>

      {servicos.map((item, index) => {
        const color = cardColors[index % cardColors.length];

        return (
          <div
            className="row align-items-center my-5 py-4"
            key={index}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            {index % 2 === 0 ? (
              <>
                <div className="col-md-6 text-end">
                  <h2 className="servico-titulo">{item.titulo}</h2>
                </div>
                <div className="col-md-6">
                  <div className="card text-white shadow" style={{ backgroundColor: color }}>
                    <div className="card-body fs-5">{item.descricao}</div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-6 order-md-2 text-start">
                  <h2 className="servico-titulo">{item.titulo}</h2>
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="card text-white shadow" style={{ backgroundColor: color }}>
                    <div className="card-body fs-5">{item.descricao}</div>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Servico;
