const Services = () => {
  return (
    <section className="bg-[rgb(7,7,7)] relative">
      <h2>Services</h2>
      <p className="subtitle">List of available services.</p>

      <div className="w-full mt-[100px] grid grid-cols-3 grid-rows-none gap-[50px] text-white services-grid">
        <div>
          <h3><span>01.</span> Graphic Design</h3>

          <p>Logos, banners, business cards etc.</p>
        </div>
        <div>
          <h3><span>02.</span> Animations</h3>

          <p>Simple animations, transitions and scenes (mainly for streamers). I don't do complicated animations. A draft fee may be applicable.</p>
        </div>
        <div>
          <h3><span>03.</span> Video Editing</h3>

          <p>Effects, music, color adjustments, sound effects, etc.</p>
        </div>
      </div>

      <p className="absolute w-full bottom-[100px] left-0 text-center text-white opacity-40 font-roboto text-[18px]">I require a 50% (50% of the estimated price) deposit for all new clients. The final price of all services is based on the length and difficulty of the project.</p>
    </section>
  );
}

export default Services;