import appConstants from "../common/constants.js";
import { goTo } from "../router/index.js"

export default function goToCart() {
    document.querySelector(".to-cart-page").addEventListener("click", (e) => {
        e.preventDefault();
        goTo(appConstants.pathnames.cartPage);
    })
}