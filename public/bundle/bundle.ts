export default () => {
  const nav = document.querySelector('nav');
  
  if (nav) window.addEventListener('scroll', () => {
    if (window.scrollY > 10)
      return nav.classList.add('bg-black');

    nav.classList.remove('bg-black');
  });
}