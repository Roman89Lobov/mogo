const arrows = document.querySelectorAll('.what_arrow');
const textContents = document.querySelectorAll('.what_text_content');

// Проходим по каждой стрелке и добавляем обработчик события
arrows.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        // Закрываем все текстовые блоки, кроме текущего
        textContents.forEach((text, textIndex) => {
            if (textIndex !== index) {
                text.classList.remove('show'); // Скрываем блоки
                arrows[textIndex].src = 'images/arrow_down.png'; // Меняем стрелку на "вниз"
            }
        });

        // Переключаем текущий блок (открытие/закрытие)
        const textContent = textContents[index];
        if (textContent.classList.contains('show')) {
            textContent.classList.remove('show'); // Скрываем текущий блок
            arrow.src = 'images/arrow_down.png'; // Меняем стрелку на "вниз"
        } else {
            textContent.classList.add('show'); // Показываем текущий блок
            arrow.src = 'images/arrow_up.png'; // Меняем стрелку на "вверх"
        }
    });
});
// arrow.addEventListener('click', () => {
//     if (textContent.classList.contains('show')) {
//         textContent.classList.remove('show'); // Скрываем блок с текстом
//         arrow.src = 'images/arrow_down.png'; // Меняем стрелку на "вверх"
//     } else {
//         textContent.classList.add('show'); // Показываем блок с текстом
//         arrow.src = 'images/arrow_up.png'; // Меняем стрелку на "вниз"
//     }
// });


// // Карусель
// let currentSlide = 0;
// const slides = document.querySelectorAll('.slides2_section');
// const totalSlides = slides.length;
//
// document.querySelector('#switch2_1').addEventListener('click', () => goToSlide(0));
// document.querySelector('#switch2_2').addEventListener('click', () => goToSlide(1));
// document.querySelector('#switch2_3').addEventListener('click', () => goToSlide(2));
// document.querySelector('#switch2_4').addEventListener('click', () => goToSlide(3));
// document.querySelector('#switch2_5').addEventListener('click', () => goToSlide(4));
//
// function goToSlide(slideNumber) {
//     slides.forEach(slide => slide.style.display = 'none');
//     slides[slideNumber].style.display = 'flex';
//     currentSlide = slideNumber;
// }
//
// // Инициализация карусели
// goToSlide(0);