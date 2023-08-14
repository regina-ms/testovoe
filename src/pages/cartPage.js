import deleteProduct from "../api/deleteProduct.js";
import productCounter from "../api/productCounter.js";
import appConstants from "../common/constants.js";
import createCartPage from "./createCartPage.js";
import renderCartCounter from "../api/renderCartCounter.js";
import returnToMain from "../api/returnToMain.js";
import createEmptyCart from "../components/createEmptyCart.js";
import setPrice from "../components/setPrice.js";
import setTotalPrice from "../components/setTotalPrice.js";
import makeOrder from "../api/makeOrder.js";

export default function cartPage() {
    if (localStorage.getItem("itemsInCart") === "0" || !localStorage.getItem("itemsInCart")) {
        document.getElementById("app").innerHTML = createEmptyCart();
        returnToMain();
    } else {
        document.getElementById("app").innerHTML = createCartPage();
        productCounter();
        setPrice();
        deleteProduct();
        renderCartCounter();
        setTotalPrice();
        returnToMain();
        makeOrder();
    }
};
