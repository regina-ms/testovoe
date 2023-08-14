import appConstants from '../common/constants.js';
import cartPage from '../pages/cartPage.js';
import mainPage from '../pages/mainPage.js';
import createMainPage from '../pages/createMainPage.js';
import openBrands from '../api/openBrands.js';
import getArrayOfItems from '../api/getArrayOfItems.js';
import appendPagNumbBtn from '../components/renderPaginationBtns.js';
import showItems from '../components/showItems.js';


function render(path) {
    if(path === appConstants.pathnames.mainPage) {
        mainPage();
        window.addEventListener("resize", () => {
            app.innerHTML = createMainPage();
            openBrands();
            const products = getArrayOfItems("item");
            appendPagNumbBtn(products);
            showItems(products, appConstants.itemsPerPage, appConstants.currentPageDefault);
        });
    }
    if(path === appConstants.pathnames.cartPage) {
        cartPage();
    }
}

export function goTo(path) {
    window.history.pushState({path}, "path", path);
    render(path);
}

export default function initRoute() {
    window.addEventListener('popstate', e => {
        render(new URL(window.location.href).pathname);
    })
    document.querySelectorAll('[href^="/"]').forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();
            const {pathname:path} = new URL(e.target.href);
            goTo(path);
        })
    })
    render(new URL(window.location.href).pathname);
}
