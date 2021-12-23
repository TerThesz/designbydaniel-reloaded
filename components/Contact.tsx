import { AiOutlineMail, AiOutlineInstagram, AiOutlineDribbble, AiOutlineBehance, AiOutlineYoutube, AiOutlineFacebook } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="contact relative h-[650px] bg-[rgba(0,_0,_0,_0.979)] p-[200px_350px_100px_350px] w-full text-white font-manrope">
      <div className="flex flex-row">
        <div className="min-w-[730px] w-[730px] h-full">
          <h3 className="text-[38px] font-semibold font-manrope">
            Do you have a fantastic project idea in your mind? Contact me, and we will do something unique together!
          </h3>

          <button className="border-none outline-none bg-dano_blue transition-all duration-200 ease-linear cursor-pointer w-full h-[65px] font-semibold tracking-[3px] text-[16px] mt-[65px] hover:scale-[1.01] hover:bg-darker_dano_blue">SEND MESSAGE</button>
        </div>

        <div className="w-full h-full text-right relative -top-1/2 translate-y-1/2">
          <div className="pl-[200px] w-gull h-full">
            <ul>
              <li className="mb-[15px]"><AiOutlineMail /> <p>designbydaniel1@gmail.com</p></li>
              <li><AiOutlineInstagram /> <p>@designbydaniel_</p></li>
            </ul>

            <div className="mt-[30px] w-full flex justify-between pr-[40px]">
              <AiOutlineDribbble />
              <AiOutlineBehance />
              <AiOutlineYoutube />
              <AiOutlineFacebook />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-[60px] text-gray-500 font-manrope">
        Website made by: <a target="_blank" href="https://terthesz.eu" className="text-dano_blue">TerThesz</a>
      </p>
    </div>
  );
}

export default Contact;