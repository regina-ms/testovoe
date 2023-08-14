import getArrayOfItems from "../api/getArrayOfItems";

export default function setTotalPrice() {
    let prices =[];
    for(let price of getArrayOfItems("price")) {
        prices.push(Number(price.textContent));
    }
    const totalPrice = (prices.reduce((acc, item) => acc+item, 0)).toFixed(2);
    document.querySelector(".total-number").textContent = totalPrice;
}