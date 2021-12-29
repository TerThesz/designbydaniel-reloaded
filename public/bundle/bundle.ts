export default () => {
  const nav = document.querySelector('nav');

  const anchors: any = Array.from(document.querySelectorAll('.anchor'));
  const navItems: any = Array.from(document.querySelectorAll('nav ul li'));

  let scrollToAnchor: string | undefined = undefined;
  
  if (nav) window.addEventListener('scroll', () => {
    // FIXME: Real bad code (just copied it from the old codebase)
    anchors.map((anchor: any) => {
      const anchorY = anchor.getBoundingClientRect().top + window.scrollY;
      const nextAnchorY = anchors[anchors.indexOf(anchor) + 1]?.getBoundingClientRect().top + window.scrollY || document.body.scrollHeight;
      const screenY = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollToAnchor != undefined) navItems[anchors.indexOf(anchors.find((a: any) => a.id === scrollToAnchor))].classList.add('active');
      if (screenY >= anchorY - 10 && screenY <= nextAnchorY - 10) {
        if (!scrollToAnchor) navItems[anchors.indexOf(anchor)].classList.add('active');
        else if (anchor.id === scrollToAnchor) scrollToAnchor = undefined;
      } else if (!scrollToAnchor) navItems[anchors.indexOf(anchor)].classList.remove('active');
    });

    if (window.scrollY > 10)
      return nav.classList.add('bg-black');

    nav.classList.remove('bg-black');
  });

  document.querySelectorAll('nav li[href^="#"]').forEach(itemClick);

  function itemClick(anchor: any) {
    anchor.addEventListener('click', function (e: any) {
      e.preventDefault();

      // @ts-ignore
      scrollToAnchor = this.getAttribute('href').toString().replace('#', '');
      Array.from(document.querySelectorAll('nav ul li.active')).map(active => {
        active.classList.remove('active');
      });

      // @ts-ignore
      console.log(this.getAttribute('href'))
      // @ts-ignore
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
    });
  }
}