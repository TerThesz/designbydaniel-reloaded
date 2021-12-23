import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Reviews from '../components/Reviews';
import About from '../components/About';
import Contact from '../components/Contact';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      
      <Header />
      <Services />
      <Portfolio />
      <Reviews />
      <About />

      <Contact />
    </>
  );
}

export default Home;