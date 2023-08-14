import createEmptyCart from "../components/createEmptyCart.js";
import getArrayOfItems from "./getArrayOfItems.js";
import returnToMain from "./returnToMain.js";

export default function renderCartCounter() {
    if (getArrayOfItems("in-cart").length === 0) {
        window.localStorage.setItem("itemsInCart", 0);
       document.querySelector(".cart-page").innerHTML = createEmptyCart();
       returnToMain();
       return;
    } 

    let itemsAmount = [];
    for (let el of getArrayOfItems("in-cart")) {
        itemsAmount.push(el.querySelector(".amount").textContent);
    }
    let amount = itemsAmount.reduce((acc, item) => acc + Number(item), 0);
    document.querySelector(".products-counter").innerHTML = amount;
    window.localStorage.setItem("itemsInCart", amount);
    return;
}

export function renderCartCounterOnMainPage() {
        if(Object.keys(localStorage).includes("itemsInCart")){
            document.querySelector(".item-counter").textContent = window.localStorage.getItem("itemsInCart")
        } else {
            document.querySelector(".item-counter").textContent=0
        }
}
