import TabsManager, { TabItem } from './tabs.js';

// Mobile Overlay Menu

const hambMenu = document.querySelector('.hamb');
const overlayNav = document.getElementById('overlayNav');
const closeBtn = document.querySelector('.closebtn');

hambMenu.addEventListener('click', event => {
    overlayNav.style.height = "100%";
  });

closeBtn.addEventListener('click', event => {
    overlayNav.style.height = "0%";
});

// Carousel

$(function () {
    $('#carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.carousel-btn--prev'),
        nextArrow: $('.carousel-btn--next'),

        responsive: [{

          breakpoint: 769 && 993 && 1281,
          settings: {
            slidesToShow: 3,
          }
        }, {
          
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }

        }]
    });
    
});

const tabsElem = document.getElementById('myTabs'); 
new TabsManager(tabsElem);

// Getting Data from Form

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const {name, tel} = form.elements;

    const formData = ({
        name: name.value,
        tel: tel.value
    });

    form.reset();
    console.log(formData);
});
  
// Smooth Scrolling 
window.onload = () => {
        const smoothScrollLinks = document.querySelectorAll('.navigation__link'); 
         
        for (let link of smoothScrollLinks) { 
          link.addEventListener('click', event => { 
             event.preventDefault(); 
             
            const target = event.target; 
            const elementToScroll = document.querySelector(target.getAttribute('href')); 
            elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'end'}); 
          }); 
        } 
      };