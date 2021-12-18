import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      
      <Header />
      <Services />
      <Portfolio />
    </>
  );
}

export default Home;