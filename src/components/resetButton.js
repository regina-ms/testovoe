import getArrayOfItems from '../api/getArrayOfItems'
import showItems from './showItems'
import appendPagNumbBtn from './renderPaginationBtns'

// Лучше перенести создание обработчика и кнопки в один файл. Благодаря этому не нужно
// прыгать между файлами
export function createResetFilterHandler() {
  const products = getArrayOfItems('item');

  // Если кнопка не используется, то можно не создавать переменную и использовать optional chaining
  document.querySelector('.reset-filter')?.addEventListener('click', (e) => {
    e.preventDefault()

    if(document.querySelector('.empty-brand-message')) {
      document.querySelector('.empty-brand-message').innerHTML = "";
    }

    getArrayOfItems('custom-checkbox').forEach((el) => {
      el.checked = false;
    })

    getArrayOfItems('filtered').forEach((el) => {
      el.classList.remove('filtered');
    })

    showItems(products);
    appendPagNumbBtn(products);
  })
}


export default function () {
  return `<a class="reset-filter" href="#">Сбросить</a>`
}