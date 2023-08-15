import appConstants from "../common/constants.js";
import getArrayOfItems from "./getArrayOfItems.js";
import showItems from "../components/showItems.js";
import appendPagNumbBtn from "../components/renderPaginationBtns.js";
import showMessage from "../components/createEmtyBrandMessage.js";



export default function filterItems() {
    const products = getArrayOfItems('item');
    const applyFilter = document.querySelector('.apply-filter');
    applyFilter.addEventListener('click', () => {
        if (getArrayOfItems('filtered').length !== 0) {
            getArrayOfItems('filtered').forEach((el) => {
                el.classList.remove('filtered');
            })
        }
        if (document.querySelector('.empty-brand-message')) {
            document.querySelector('.empty-brand-message').innerHTML = "";
        }
        const brands = getArrayOfItems('custom-checkbox');
        const checkedBrands = brands.filter(item => item.checked);
        if (checkedBrands.length === 0) {
            showItems(products);
            return;
        }
        document.querySelector('.pagination-buttons').innerHTML = "";
        const setCheckedBrandsId = new Set();
        checkedBrands.forEach(el => setCheckedBrandsId.add(el.id));
        const res = products.filter((el) => setCheckedBrandsId.has(el.dataset.brand));
        appendPagNumbBtn(res);
        res.forEach((el) => el.classList.add('filtered'));
        if (res.length !== 0) {
            showItems(res);
            return;
        }
        products.forEach((el) => {
            el.classList.remove('active');
        })
        showMessage();
    })
}
