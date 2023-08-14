import getArrayOfItems from "./getArrayOfItems.js";
import appConstants from "../common/constants.js";
import showItems from "../components/showItems.js";
import appendPagNumbBtn from "../components/renderPaginationBtns.js";

export default function resetFilter() {
    const reset = document.querySelector('.reset-filter');
    const products = getArrayOfItems('item');
    reset.addEventListener('click', (e) => {
        e.preventDefault();
        if(document.querySelector('.empty-brand-message')) {
            document.querySelector('.empty-brand-message').innerHTML = "";
        }
        const checkboxes = getArrayOfItems('custom-checkbox');
        checkboxes.forEach((el) => {
            el.checked = false;
        })
        getArrayOfItems('filtered').forEach((el) => {
            el.classList.remove('filtered');
        })
        showItems(products, appConstants.itemsPerPage, appConstants.currentPageDefault);
        appendPagNumbBtn(products);
    })
}
