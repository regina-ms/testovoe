import getProductFromLocal from "./getProductsFromLocal";
import renderCartCounter from "./renderCartCounter";
import setTotalPrice from "../components/setTotalPrice";
import returnToMain from "./returnToMain";
import createEmptyCart from "../components/createEmptyCart";


export default function deleteProduct() {
    document.querySelectorAll('.delete-product').forEach(el => {
        el.addEventListener('click', () => {

            let productsToOrder = getProductFromLocal().filter(elem => elem.id !== Number(el.closest(".product").dataset.id));
            if(productsToOrder.length === 0) {
                localStorage.clear();
                document.querySelector(".cart-page").innerHTML = createEmptyCart();
                returnToMain();
                return;
            }
            let str = "";
            for(let item of productsToOrder) {
                str = str + JSON.stringify(item)+"?";
            }
            str = str.slice(0, str.length-1);
            localStorage.setItem("productsToOrder", str);
            document.querySelector(".products-list").removeChild(el.closest(".product"));
            renderCartCounter();
            setTotalPrice();
        })
    })
}