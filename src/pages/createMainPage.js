import appConstants from '../common/constants';
import brands from '../brands.json';
import products from '../products.json';
import createBrands from "../components/brandList.js";
import createProducts from '../components/productsList.js';
import resetButton from '../components/resetButton';

export default function createMainPage() {
    return `<main class="main-page">
        <div class="control">
        <div class="container">
            <h2 class="control-header">Бренды</h2>
            <button type="button" class="brands-button"></button>
            </div>
            ${createBrands(brands)}
            <div class="control-buttons">
                <button type="button" class="apply-filter">Применить</button>
                ${resetButton()}
            </div>
            <div class="cart">
                <!-- Раз есть константы путей, то это их идеальное применение -->
                <a class="to-cart-page" href="${appConstants.pathnames.cartPage}"></a>
                <div class="item-counter total-amount"></div>
            </div>
        </div>
        <div class="items-container">
            ${createProducts(products)}
            <div class="pagination">
                <ul class="pagination-buttons">
                </ul>
            </div>
        </div>
    </main>`
}


