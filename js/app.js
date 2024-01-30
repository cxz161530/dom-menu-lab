// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];


//1. Select and cache the <main> element in a variable named mainEl
const mainEl = document.querySelector('main')
//1.1: Set the background color of mainEl using the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)'
//1.2: Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
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

//3.1 Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach(function(link){
  //3.1-1 create an <a> element
  const newaEL = document.createElement('a')
  //3.1-2 On the new element, add an href attribute with its value set to the href property of the "link" object.
  newaEL.setAttribute('href', link.href);
  //3.1-3 Set the new element's content to the value of the text property of the "link" object.
  newaEL.textContent = link.text; 
  //3.1 -4 Append the new element to the topMenuEl element.
  topMenuEl.appendChild(newaEL)
})

//4.0 Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById('sub-menu');
//4.1 Set the height subMenuEl element to be 100%.
subMenuEl.style.height = '100%'
//4.2 Set the background color of subMenuEl using the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
//4.3 Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around')
//4.4 Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute'
//4.5 Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = 9;

//5.1 Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
// Declare a global showingSubMenu variable and initialize it to false;
const topMenuLinks= document.querySelectorAll('a');
let showingSubMenu = false;
//5.2 Attach a delegated 'click' event listener to topMenuEl.
//5.3 deselect function
topMenuEl.addEventListener('click',function(event){
	event.preventDefault();
  if (event.target.tagName === 'A') {
    if(event.target.classList.contains('active')){
    //remove ative class from A element
    event.target.classList.remove('active'); 
    showingSubMenu = false;
    subMenuEl.style.top = '0'
    return;
    }  
    // Log the content of the <a> element
    console.log(event.target.textContent);
  }
  //5.4
  topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
  })
  //5.5
  event.target.classList.add('active');
  //5.6
  const linkData = menuLinks.find(function(linkObj) {
    return linkObj.text === event.target.textContent;
  });
  showingSubMenu = 'subLinks' in linkData;
  //5.7 
  if (showingSubMenu) {
    buildSubMenu(linkData.subLinks);
    subMenuEl.style.top = '100%';
  } else {
    subMenuEl.style.top = '0';
    mainEl.innerHTML = '<h1>about</h1>';
  }
})

//5.8 buildSubMenu to clear content subMenu and iterate sublnk 
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = '';
  subLinks.forEach(function(link) {
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    subMenuEl.appendChild(linkEl);
  });
}
//Task 6.0 Attach a delegated 'click' event listener to subMenuEl.

subMenuEl.addEventListener('click',function(event){
  event.preventDefault();
  if(event.target.tagName!=='A') return;
  console.log(event.target.textContent);
  showingSubMenu = false;
  subMenuEl.style.top = '0'
  topMenuLinks.forEach(function(link){
    link.classList.remove('active');
  })
  //update content for mainEL as select content
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;

})

