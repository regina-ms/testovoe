import appConstants from "../common/constants.js";
import createMainPage from "./createMainPage.js";
import showItems from "../components/showItems.js";
import getArrayOfItems from "../api/getArrayOfItems.js";
import appendPagNumbBtn from "../components/renderPaginationBtns.js";
import pagination from "../api/pagination.js";
import filterItems from "../api/brandFilter.js";
import cartCounter from "../api/cartCount.js";
import goToCart from "../api/goToCart.js";
import { renderCartCounterOnMainPage } from "../api/renderCartCounter.js";
import openBrands from "../api/openBrands.js";
import { createResetFilterHandler } from '../components/resetButton'

const mainPage = () => {
    app.innerHTML = createMainPage();
    if (appConstants.clientWidth < 801) {
        getArrayOfItems("brand").map((el,index) => {
            if(index > 2) {
                el.classList.add("hidden");
            }
        })
        openBrands();
    }
    const products = getArrayOfItems("item");
    appendPagNumbBtn(products);
    showItems(products);
    pagination();
    filterItems();
    createResetFilterHandler()
    cartCounter();
    goToCart();
    renderCartCounterOnMainPage();
}

export default mainPage;