import getArrayOfItems from "../api/getArrayOfItems";

export default function setPrice() {
    getArrayOfItems("price").forEach(el => {
        el.closest(".product").querySelector(".price").textContent = (Number(el.closest(".product").dataset.price) * Number(el.closest(".product").querySelector(".amount").textContent)).toFixed(2) + " ";
    })
}