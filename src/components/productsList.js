
// Если нет типизации, то название obj сильно путает. Это же не Объект, а массив
export default function createProducts(arr) {
    // То же самое, что и с createBrands()
    const list = arr.map(el => `
        <li class="item product" data-id="${el.id}" data-brand="${el.brand}">
            <div class="item-contaier">
                <img class="item-img" src=${el.image} alt="">
                <div class="item-description">
                    <div class="item-title">${el.title}</div>
                    <div class="price">${el.regular_price.value} <span class="currency">${el.regular_price.currency}</span></div>
                    <button type="button" class="to-cart">В корзину</button>
                </div>
            </div>
        </li>
    `)

    return `<ul class="items">${list}</ul>`
}


