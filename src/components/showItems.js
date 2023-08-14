
import getArrayOfItems from "../api/getArrayOfItems.js"

export default function showItems(array, itemsPerPage, pageNumb) {
    const start = (pageNumb - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToShow = array.slice(start, end);
    if (document.querySelectorAll('.active')) {
        getArrayOfItems('active').forEach((el) => {
            el.classList.remove('active');
        })
    }
    itemsToShow.forEach((el) => {
        el.classList.add('active');
    });
}