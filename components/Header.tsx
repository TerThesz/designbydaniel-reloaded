import Image from 'next/image';
import header from '../public/images/header.jpg';

const Header = () => {
  return (
    <section className="bg-black grid place-content-center">
      <div className="flex w-full h-full absolute top-0 left-0 z-10">
        <Image 
          src={header}
          layout="fill"
        />

        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-70"></div>
      </div>

      <div className="z-20 w-[900px] h-[246px] text-white font-manrope font-semibold text-[60px] text-center">
        <h1>Hello, my name is <span className="text-dano_blue">Daniel</span>.<br />I am a graphic designer, animator and video editor.</h1>
      </div>

      <p className="z-20 opacity-40 text-center absolute left-1/2 bottom-[80px] -translate-x-1/2 text-white">Scroll To Continue</p>
    </section>
  );
}

export default Header;