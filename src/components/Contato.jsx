import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import 'aos/dist/aos.css';
import 'animate.css/animate.min.css';
import AOS from 'aos';

const ContactForm = () => {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  const whatsappNumber = '5567996610494';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de mais informações.');

  return (
    <>
      <Container
        className="my-5 p-4 shadow rounded animate__animated animate__fadeInUp"
        style={{ maxWidth: '800px', width: '90%', backgroundColor: '#fff' }}
        data-aos="fade-up"
      >
        <h2 className="mb-5 text-center" id='contato' data-aos="zoom-in">
          Contato
        </h2>

        {showSuccess && (
          <Alert
            variant="success"
            onClose={() => setShowSuccess(false)}
            dismissible
            data-aos="fade"
            className="animate__animated animate__fadeIn"
          >
            Mensagem enviada com sucesso! Obrigado por entrar em contato.
          </Alert>
        )}

        <Form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
          <Form.Group className="mb-4" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              name="nome"
              placeholder="Seu nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="email">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              size="lg"
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-5" controlId="mensagem">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control
              size="lg"
              as="textarea"
              name="mensagem"
              rows={6}
              placeholder="Escreva sua mensagem aqui"
              value={formData.mensagem}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="dark" size="lg" type="submit" className="w-100" data-aos="zoom-in" data-aos-delay="400">
            Enviar Mensagem
          </Button>
        </Form>
      </Container>

      {/* Botão fixo WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '30px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
          zIndex: 1000,
          textDecoration: 'none'
        }}
        aria-label="WhatsApp"
        title="Fale conosco pelo WhatsApp"
        data-aos="zoom-in"
        data-aos-delay="600"
        className="animate__animated animate__pulse animate__infinite"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default ContactForm;
