import getProductFromLocal from "./getProductsFromLocal";

export default function updateLocalStorage(el) {
    const productsToOrder = getProductFromLocal();
    const productToAddCount = productsToOrder.find(elem => elem.id === Number(el.closest(".product").dataset.id));
    const productToAddCountIndex = productsToOrder.indexOf(productToAddCount);
    productToAddCount.count = el.closest(".product").querySelector(".amount").textContent;
    productsToOrder[productToAddCountIndex] = productToAddCount;
    console.log(productsToOrder);
    let str = "";
    for (let product of productsToOrder) {
        str += JSON.stringify(product) + "?"
    }
    str = str.slice(0, str.length - 1);
    localStorage.setItem("productsToOrder", str);
}