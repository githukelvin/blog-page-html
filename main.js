const  navItems = document.querySelector('.nav__items');
const  OHam = document.querySelector('#open_nav');
const CHam  = document.querySelector('#close_nav');
const open  = document.querySelector('#show');
const close  = document.querySelector('#hide');
const  aside = document.querySelector('.ul')


function openNav(){
    navItems.style.display="flex";
    OHam.style.display='none';
    CHam.style.display="block"

}
function closeNav(){
    navItems.style.display="none";
    CHam.style.display='none';
    OHam.style.display="block"

}

function openAside(){
    aside.style.transform="translateX(0%)";
    close.style.display='block';
    open.style.display='none';
    

}
function closeAside(){
        aside.style.transform="translateX(-150%)";
       open.style.display='block';
       close.style.display='none';

    

}

OHam.addEventListener('click',openNav);
CHam.addEventListener('click',closeNav);
open.addEventListener('click',openAside);
close.addEventListener('click',closeAside);