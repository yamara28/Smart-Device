import {Accordions} from './accordions';
let accordions;

const initAccordions = () => {
  accordions = new Accordions();
  // Используйте в разработке экспортируемую переменную accordions, window сделан для бэкэнда
  window.accordions = accordions;

  // Убирает с элемента аккордеона класс no-js, скрывающий кнопки и открывающий контент.
  const elementsNojs = document.querySelectorAll('.no-js');
  elementsNojs.forEach((element) => {
    element.classList.remove('no-js');
  });

};

export {initAccordions, accordions};
