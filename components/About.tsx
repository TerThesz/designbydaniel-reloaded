const About = () => {
  return (
    <div>
      <section className="h-[50vh]">
        <h2>About Me</h2>
        <p className="subtitle">This is me.</p>
      
        <p className="font-roboto mt-[5px] text-[22px] font-light leading-[2.4rem]">
          Hello, my name is Daniel, I am 15 years old, and I am trying to reach my goals. I want to show the world (at least a part of it), that I have talent and creativity. Sometimes, I assemble computers. My goal for this project is to succeed... Maybe it will happen sometime. Satisfied clients are the most important thing for me. So I always wish their dreams to come true.
        </p>
      </section>

      <section className="about-grid h-[50vh] bg-[#dee1ec] grid grid-cols-3 grid-rows-none">
        <div>
          <h3>Precision.</h3>
          <p>Precision is important. That's why I try as hard as I can. I want both sides to be happy.</p>
        </div>
        <div>
          <h3>Communication.</h3>
          <p>Communication is one of the most important things. I always want all communication to be without any conflicts.</p>
        </div>
        <div>
          <h3>Satisfaction.</h3>
          <p>Satisfied clients are the most important thing for me. So I always wish my clients will be satisfied.</p>
        </div>
      </section>
    </div>
  );
}

export default About;