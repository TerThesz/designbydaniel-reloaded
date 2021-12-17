import Image from 'next/image';
import logo from '../public/images/logo.png';

const Navbar = () => {
  return (
    <nav className="text-white w-full h-[4.5rem] grid grid-rows-none grid-cols-[300px_1fr_300px] font-roboto">
      <div className="grid place-content-center">
        <Image
          src={logo}
          alt="DANIEL. Design."
          width={200}
          height={30}
        />
      </div>

      <div className="w-full h-full grid place-content-center">
        <ul>
          <li className="active">Home</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>About Me</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="w-full h-full grid place-content-center">
        <p className="cursor-pointer transition-all duration-100 ease-linear hover:text-dano_blue">
          Change to: <b>Czech</b>
        </p>
      </div>
    </nav>
  );
}

export default Navbar;