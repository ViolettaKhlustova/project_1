/* нужно составить план по написанию функционала к
к слайдеру
План:
слайдер с картинками сделать пока общей картинкой,
не затрагивая стрелочки, которые должны переключать картинки и
квадратики, у которых должна быть динамика
1. получить слайдер и элементы слайдера через querySelector
    1.1 присваиваем переменной, где находится слайдер значение = 0,
    это индекс активного слайда
2. Нужно, чтобы работали стрелки для переключения картинок
    2.1. получить стрелки
    2.2. установить обработчик событий для стрелок
    (обрабочик событий "click")
    2.3. написать функции для показа следующего (+1)
     и предыдущего слайдов (-1)
3. Написать функцию, которая обновляет отображение слайда, показывает
только текущий слайд и скрывает остальные
4. Потом вызвать функцию из пункта 3, чтобы отобразить первый слайд
при перезагрузке страницы
5. Сделать динамичными квадратики, чтобы передвигались
со сменой картинок в слайдере
*/
// получаю элементы, которые нужны для реализации переключения слайдера



// const slider = document.querySelector('.slider');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// const slides = Array.from(slider.querySelectorAll('.img'));
// const slideCount = slides.length;
// const indicators = document.querySelectorAll('.indicator');
// let slideIndex = 0;
// // добавляю обработчики событий кнопкам-стрелкам
// prevButton.addEventListener('click', showPreviousSlide)
// nextButton.addEventListener('click', showNextSlide)
// function showSlide(n) {
//     slides.forEach(slide => slide.style.display = 'none');
//     indicators.forEach(indicator =>
//         indicator.classList.remove('active'));
//     slides[n].style.display = 'block';
//     indicators[n].classList.add('active');
// }
// function showPreviousSlide() {
//     slideIndex = (slideIndex - 1 + slideCount) % slideCount;
//     showSlide(slideIndex)
// }
// function showNextSlide() {
//     slideIndex = (slideIndex + 1) % slideCount;
//     showSlide(slideIndex)
// }
// indicators.forEach((indicator, index) => {
//     indicator.addEventListener('click', () => {
//         slideIndex = index;
//         showSlide(slideIndex);
//     });
// });
// showSlide(slideIndex)



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    effect: 'creative',
    creativeEffect: {
        prev: {
            // will set `translateZ(-400px)` on previous slides
            translate: [0, 0, -400],
        },
        next: {
            // will set `translateX(100%)` on next slides
            translate: ['100%', 0, 0],
        },
    },
    // effect: 'cards',
    // cardsEffect: {
    //     perSlideOffset: 10,
    //     perSlideRotate: 10,
    //     rotate: false,
    //     slideShadows: false,
    // },
    grabCursor: true,
});



