import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // Accordion
  const accordion = document.querySelectorAll('[data-div="accordion__title"]');
  for (let i = 0; i < accordion.length; i++) {
    const accordionTitle = accordion[i];
    accordionTitle.addEventListener('click', () => {
      if (accordionTitle.classList.contains('is-open')) {
        accordionTitle.classList.remove('is-open');
        accordionTitle.classList.add('is-close');
      } else {
        const accordionTitlesWithIsOpen = document.querySelectorAll('.is-open');
        accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
          accordionTitleWithIsOpen.classList.remove('is-open');
          accordionTitleWithIsOpen.classList.add('is-close');
        });
        accordionTitle.classList.remove('is-close');
        accordionTitle.classList.add('is-open');
      }
    });
  }

  // Open more text by clicking button <Подробнее>
  const aboutButton = document.querySelector('[data-button="button"]');
  const aboutWrapper = document.querySelector('[data-about="about-wrapper"]');
  function onAboutButtonHandler() {
    if (aboutButton) {
      aboutButton.addEventListener('click', () => {
        if (aboutWrapper.classList.contains('is-show')) {
          aboutWrapper.classList.remove('is-show');
          aboutWrapper.classList.add('is-hide');

          aboutButton.innerHTML = 'Подробнее';
        } else {
          aboutWrapper.classList.add('is-show');
          aboutWrapper.classList.remove('is-hide');
          aboutButton.innerHTML = 'Свернуть';
        }
      });
    } else {
      return;
    }
  }
  onAboutButtonHandler();


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();

    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
