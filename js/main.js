AOS.init();

// Parallax
// document.addEventListener("mousemove", parallax);
// function parallax(e){
//     this.querySelectorAll('.layer').forEach(Layer => {
//         const speed = Layer.getAttribute('data-speed');

//         const x = (window.innerWidth - e.pageX*speed)/100
//         const y = (window.innerHeight - e.pageY*speed)/100

//         Layer.style.transform = `translateX(${x}px) translateY(${y}px)`
//     });
// }

// Menu Lateral
const menu = document.querySelector('.lateral_menu');
const bar_menu = document.querySelector('.bar_menu');

function addClass(){
    menu.classList.toggle('lateral_menu_show');
}

function desaparecerMenu(){
    menu.classList.remove('lateral_menu_show');
}

// Scroll
window.addEventListener('scroll', ()=>{
    // const scrollPx = window.scrollY;

    let header = document.querySelector('nav');
    header.classList.toggle('header-bg', window.scrollY > 300);

    let upload = document.querySelector('.subir');
    upload.classList.toggle('subir-show', window.scrollY > 500);
})