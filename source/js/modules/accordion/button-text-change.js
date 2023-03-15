const accordionItem = document.querySelector('[data-accordion="element"]');
const accordionButton = document.querySelector('[data-accordion="button"]');

const accordionButtonToggler = () => {
  if (!accordionItem.classList.contains('is-active')) {
    accordionButton.textContent = 'свернуть';
  } else {
    accordionButton.textContent = 'подробнее';
  }
};

const changeAboutButton = () => {
  accordionButton.addEventListener('click', accordionButtonToggler);
};

export {changeAboutButton};
