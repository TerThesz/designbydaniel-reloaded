import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Reviews from '../components/Reviews';
import About from '../components/About';
import Contact from '../components/Contact';
import Anchor from '../components/Anchor';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      
      <Anchor name="header" />
      <Header />

      <Anchor name="services" />
      <Services />

      <Anchor name="portfolio" />
      <Portfolio />

      <Anchor name="about" />
      <Reviews />
      <About />

      <Anchor name="contact" className="abstract bottom-[100vh]" />
      <Contact />
    </>
  );
}

export default Home;