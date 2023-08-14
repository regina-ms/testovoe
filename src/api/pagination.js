import getArrayOfItems from './getArrayOfItems.js';
import appConstants from '../common/constants.js'
import showItems from '../components/showItems.js';


export default function pagination() {
    const paginationBtns = document.querySelector('.pagination-buttons');
    paginationBtns.addEventListener('click', (e) => {
        if (paginationBtns.querySelector('.active-page-numb')) {
            paginationBtns.querySelector('.active-page-numb').classList.remove('active-button')
        }
        if (e.target.classList.contains('pagination-button')) {
            e.target.classList.add('active-page-numb');
        }
        const pageNumber = +e.target.textContent;
        const items = getArrayOfItems('item');
        const filteredItems = getArrayOfItems('filtered');
        if (filteredItems.length !== 0) {
            showItems(filteredItems, appConstants.itemsPerPage, pageNumber);
        } else {
            showItems(items, appConstants.itemsPerPage, pageNumber);
        }
    })
}


