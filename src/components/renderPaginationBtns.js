import appConstants from "../common/constants.js";

function createPagNumbBtn(num) {
    return `<button type="button" class="pagination-button">${num}</button>`
}

export default function appendPagNumbBtn(arr) {
    const pageNumb = Math.ceil(arr.length / appConstants.itemsPerPage);
    document.querySelector('.pagination-buttons').innerHTML = "";
    for (let i = 1; i <= pageNumb; i++) {
        let li = document.createElement('li');
        li.classList.add('page');
        li.innerHTML = createPagNumbBtn(i);
        document.querySelector('.pagination-buttons').append(li);
    }
}