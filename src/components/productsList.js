
export default function createProducts(obj) {
    let html = "";
    for (let el of obj) {
        html += `
        <li class="item product" data-id="${el.id}" data-brand="${el.brand}">
            <div class="item-contaier">
                <img class="item-img" src=${el.image}>
                <div class="item-description">
                    <div class="item-title">${el.title}</div>
                    <div class="price">${el.regular_price.value} <span class="currency">${el.regular_price.currency}</span></div>
                    <button type="button" class="to-cart">В корзину</button>
                </div>
            </div>
        </li>`
    }
    return html;
}


