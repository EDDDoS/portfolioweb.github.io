AOS.init();

// Filtrar imágenes de la galería
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i < list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j < list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k =0 ; k < itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    });
}

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

    let linkedin = document.querySelector('nav .menu .linkedin');
    let twitter = document.querySelector('nav .menu .twitter');
    let bar_menu = document.querySelector('nav .menu .bar_menu');

    if(window.scrollY > 300){
        linkedin.style.color = '#f2f2f2';
        twitter.style.color = '#f2f2f2';
        bar_menu.style.color = '#f2f2f2';
    } else {
        linkedin.style.color = '#2f2f2f';
        twitter.style.color = '#2f2f2f';
        bar_menu.style.color = '#2f2f2f';
    }

    let upload = document.querySelector('.subir');
    upload.classList.toggle('subir-show', window.scrollY > 500);
})