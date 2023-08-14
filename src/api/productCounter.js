import setPrice from "../components/setPrice";
import setTotalPrice from "../components/setTotalPrice";
import getProductFromLocal from "./getProductsFromLocal";
import renderCartCounter from "./renderCartCounter";
import updateLocalStorage from "./updateLocalStorage";

export default function productCounter() {
    document.querySelectorAll('.product-counter').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target.classList.contains('plus')) {
                el.closest(".product").querySelector('.amount').textContent++;
            }
            if (e.target.classList.contains('minus')) {
                if (e.target.closest(".product").querySelector('.amount').textContent <= 1) {
                    return;
                }
                el.closest(".product").querySelector('.amount').textContent--;
            }
            setPrice();
            setTotalPrice();
            renderCartCounter();
            updateLocalStorage(el);
        })
    })
}