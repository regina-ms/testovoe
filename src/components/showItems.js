import getArrayOfItems from '../api/getArrayOfItems.js'
import appConstants from '../common/constants'

// Чтобы каждый раз не вводить дефолтные значения, можно указать дефолтные сразу в функции.
// Так как pageNumb используется не с дефолтным значением чаще, то меняем порядок.
// Если количество аргументов вырастет, то стоит рассматривать использование одного аргумента-объекта
// вместо использования кучи аргументов
export default function showItems(
  array,
  pageNumb = appConstants.currentPageDefault,
  itemsPerPage = appConstants.itemsPerPage,
) {
  const start = (pageNumb - 1) * itemsPerPage
  const end = start + itemsPerPage
  const itemsToShow = array.slice(start, end)

  // В этой проверке есть проблема, если querySelectorAll ничего не находит - он возвращает
  // пустой массив, а не null, как querySelector. Поэтому нужно проверять длину массива.
  // В данном случае это не важно и проверка не нужна, т.к. пустой массив превращается в другой
  // пустой массив и далее во время перебора не произойдет ни одной итерации
  getArrayOfItems('active').forEach((el) => {
    el.classList.remove('active')
  })

  itemsToShow.forEach((el) => {
    el.classList.add('active')
  })
}