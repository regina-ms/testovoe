import getProductFromLocal from '../api/getProductsFromLocal';
import createProductsToOrder from '../components/createProductsInCart.js'

export default function createCartPage() {
    const productsToOrder = getProductFromLocal();
    return `<div class="cart-page">
    <h2 class="cart-header">Корзина <sup class="products-counter total-amount"></sup></h2>
    <div class="cart-page-content">
        <ul class="products-list">
        ${createProductsToOrder(productsToOrder)}
        </ul>
        <div class="order-info">
            <div class="total-cost">Общая стоимость: <span class="total-number">10000</span><span class="currency"> usd</span></div>
            <form id="customer-data" name="data">
                <label for="customer-name">Ваше имя</label>
                <input type="text" name="name" id="customer-name" placeholder="Фамилия Имя Отчество" required>
                <label for="customer-tel">Ваш телефон</label>
                <input type="tel" name="tel" id="customer-tel" required>
                <button type="submit" class="checkout">Оформиить заказ</button>
            </form>
            <button type="button" class="return-to-main">Вернуться на главную</button>
        </div>
    </div>
</div>`
}