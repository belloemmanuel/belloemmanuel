let mProfilePic = document.getElementById('mProfile-pic');
let mobileNav = document.getElementById('mobile-nav')
let mMenu = document.getElementById('mMenu')
let closeNav = document.getElementById('closenav')

const open = () =>{
    mobileNav.style.display = "flex"
}

const close = ()=>{
    mobileNav.style.display = "none"
    mobileNav.classList = 'mobile-nav navfade-in'
}

mMenu.addEventListener('click', open)
closeNav.addEventListener('click', close)
