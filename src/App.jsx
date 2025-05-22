import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "animate.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "./components/Header";
import HeroSection from './components/HeroSection';
import Servico from './components/Servico';
import Contato from './components/Contato';
import Local from './components/Local';
import Rodape from './components/Rodape';
 
const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Servico />
      <Contato />
      <Local />
      <Rodape />
    </>
  )
}

export default App
