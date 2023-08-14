export default function createProductsToOrder(arr) {
    let html = "";
    for (let item of arr) {
        html += `<li class="product in-cart" data-price="${item.regular_price.value}" data-id="${item.id}">
        <div class="product-description">
            <img class="product-img" src="${item.image}">
            <div class="product-info">
                <div class="product-title">${item.title}</div>
                <div class="product-price"><span class="price"></span><span class="currency">${item.regular_price.currency}</span></div>
                <div class="product-counter">
                    <button type="button" class="plus"></button>
                    <output name="amount" class="amount">${item.count}</output>
                    <button type="button" class="minus"></button>
                </div>
                <button type="button" class="delete-product">Удалить товар</button>
            </div>
            
        </div>
    </li>`
    }
    return html;
}




