export default function getProductFromLocal() {
    let productsToOrder = [];
    const productsToOrderStrings = localStorage.getItem("productsToOrder").split("?");
    for (let el of productsToOrderStrings) {
        productsToOrder.push(JSON.parse(el))
    }
    return productsToOrder;
}