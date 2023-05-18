let closeNav = document.getElementById('closenav');
let mobileNav = document.getElementById('mobile-nav')
let menuEl = document.getElementById('menu')

let close = () =>{
  mobileNav.style.display = 'none'
}

// let open = () =>{
//   mobileNav.style.display = 'block'
//   console.log('menu')
// }

menuEl.addEventListener('click', open)
// closeNav.addEventListener('click', close)



