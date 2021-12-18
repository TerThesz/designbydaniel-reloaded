import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Services from '../components/Services';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      
      <Header />
      <Services />
    </>
  );
}

export default Home;