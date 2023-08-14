import getArrayOfItems from "./getArrayOfItems.js";
import products from "../products.json";
import getProductFromLocal from "./getProductsFromLocal.js";


export default function cartCounter() {
    const itemCounter = document.querySelector('.item-counter');
    getArrayOfItems('to-cart').forEach((el) => {
        el.addEventListener('click', () => {
            
            itemCounter.textContent++;
            window.localStorage.setItem('itemsInCart', document.querySelector('.item-counter').textContent); 
            const item = products.find(element => element.id === Number(el.closest(".item").dataset.id));
            item.count = 1;
            let productsInCart;
            if (localStorage.getItem("productsToOrder")) {
                productsInCart = getProductFromLocal();
                let product = productsInCart.find(el => el.id===item.id);
                if(product) {
                    productsInCart[productsInCart.indexOf(product)].count++
                } else {
                    productsInCart.push(item);
                }
            } else {
                productsInCart=[];
                productsInCart.push(item)
            }
                let str = productsInCart.map(el => JSON.stringify(el)).join("?");
                localStorage.setItem("productsToOrder", str);
        })
    })

}













function localStoragePushProducts() {

    /*if(localStorage.getItem("productsToOrder")) {
             let str = localStorage.getItem("productsToOrder");
             str = str + "?" + JSON.stringify(item);
             localStorage.setItem("productsToOrder",str);
         } else {
             ;
         }*/
}


