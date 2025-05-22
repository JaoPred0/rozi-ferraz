import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'aos/dist/aos.css';        // Importa estilos do AOS
import 'animate.css/animate.min.css'; // Importa estilos do animate.css
import AOS from 'aos';

const Local = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa o AOS com duração da animação em 1s
  }, []);

  return (
    <Container className="my-5">
      <h2
        id="local"
        className="mb-4 text-center animate__animated animate__fadeInDown"
        data-aos="fade-down"
      >
        Localização
      </h2>
      
      <Row>
        <Col
          lg={6}
          sm={12}
          className="mb-4"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          {/* Mapa Google Embed */}
          <div
            style={{
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 0 15px rgba(0,0,0,0.1)'
            }}
            className="animate__animated animate__zoomIn"
          >
            <iframe
              title="Mapa do Local"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.897347726872!2d-54.79398968485509!3d-22.23130828505192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9491f1a8c7a8e87f%3A0x94e0b8f67caa5e8f!2sRua%20Salviano%20Pedroso%2C%202760%20-%20Terra%20Roxa%2C%20Dourados%20-%20MS%2C%2079818-240!5e0!3m2!1spt-BR!2sbr!4v1682558000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>

        <Col
          lg={6}
          sm={12}
          data-aos="fade-left"
          data-aos-delay="400"
          className="animate__animated animate__fadeIn"
        >
          <h4>Endereço</h4>
          <p>
            Rua Salviano Pedroso, 2760 <br />
            Terra Roxa, Dourados - MS <br />
            Obs: Próximo à AAGD.
          </p>
          
          <h4>Contato</h4>
          <p>
            Telefone: (67) 1234-5678 <br />
            Email: contato@exemplo.com.br
          </p>

          <h4>Horário de Funcionamento</h4>
          <p>
            Segunda a Sexta: 9h - 18h <br />
            Sábado: 10h - 14h <br />
            Domingo: Fechado
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Local;
