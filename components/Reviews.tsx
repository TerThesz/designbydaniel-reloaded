const Reviews = () => {
  return (
    <section className="relative">
      <h2>Reviews</h2>
      <p className="subtitle">What my client say. (All reviews are translated)</p>

      <div className="w-full mt-[100px] grid grid-cols-3 grid-rows-none gap-[50px] reviews-grid">
        <div>
          <h3>David S.</h3>
          <p className="review-subtitle">DavTan</p>
          <p className="content">I can highly recommend, very nice agreement, work and price. Thank you</p>
        </div>
        <div>
          <h3>Martin P.</h3>
          <p className="review-subtitle">Artiffine</p>
          <p className="content">Great satisfaction. I approached Daniel with a request to create an animation for the hover buttons on our website www.artiffine.com. We had a finished marble canvas in jpg, and we wanted to turn it into an animation. After less successful attempts by other graphic designers, Daniel's result was the final one that met our high standards of quality design. I recommend</p>
        </div>
        <div>
          <h3>Květoslav H.</h3>
          <p className="content !pt-[42px]">Fast and high-quality cooperation even in a time press. Own ideas and not just management with a set template. We made a presentation video.</p>
        </div>
      </div>

      <button className="absolute bottom-[50px] left-1/2 -translate-x-1/2 w-[250px] h-[60px] tracking-[5px] font-bold uppercase border-none outline-none bg-gray-200 hover:scale-105 active:scale-100 hover:bg-gray-300 active:bg-gray-200">Show More</button>
    </section>
  );
}

export default Reviews;