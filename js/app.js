// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  
//3.1 create an <a> element
document.createElement('a')





//1. Select and cache the <main> element in a variable named mainEl
const mainEl = document.querySelector('main')
//1.1: Set the background color of mainEl using the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)'
//1.2: Set the content of mainEl to <h1>SEI Rocks!</h1>.
document.createElement('h1')
mainEl.innerText = 'SEI Rocks!'
//1.3 Add a class of flex-ctr to mainEl
mainEl.classList.add('flex-ctr')
//2.0 Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById('top-menu');
//2.1 Set the height topMenuEl element to be 100%.

topMenuEl.style.height = '100%';
//2.2Set the background color of topMenuEl using the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor= 'var(--top-menu-bg)';
//2.3 Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around')