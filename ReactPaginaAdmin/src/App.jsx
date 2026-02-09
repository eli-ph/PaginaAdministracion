import AcercaDe from "./components/AcercaDe";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoAdicional from "./components/InfoAdicional";
import Nav from "./components/Nav";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import ServicioSocial from "./components/ServicioSocial";


function App() {
  return (
    <>
      {/* HEADER */}
      <header>
        <Nav />
        <Hero /> 
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main>
        <AcercaDe />
        <InfoAdicional />
        <ServicioSocial />
        <Contacto />
        <PreguntasFrecuentes />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
