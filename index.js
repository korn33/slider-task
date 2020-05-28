import {swipe} from './swipe.js';

window.addEventListener('load', function () {
    swipe.initSwipe();
});

export const initialSlideHTML = `
    <div class="slide slide_1">
        <div class="indicators">
            <div class="ind_active">&#8226;</div> 
            <div class="ind_none">&#8226;</div>
            <div class="ind_none">&#8226;</div> 
        </div>
        <h1>Всегда ли цели терапии СД2 <br> на поверхности?</h1>
        <span class="mgo-widget-call_pulse"></span><p class='HbAlc'>Цель по HbAlc</p>
        <span class="mgo-widget-call_pulse_Gipoglikemia"></span><p class='Gipoglikemia'>Гипогликимия</p>
        <p class="go_to_bottom">Листайте вниз</p>       
        <img class="arrow" src="./img/arrow.png">
        <div class="shadow"></div>
    </div>
`;

const itemSlide = document.querySelector('.slider');
itemSlide.innerHTML = initialSlideHTML;