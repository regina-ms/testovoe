import getArrayOfItems from "./getArrayOfItems";

export default function openBrands() {
    document.querySelector(".brands-button").addEventListener("click", (e) => {
        getArrayOfItems("brand").map((el,index) => {
            if(index > 2) {
                el.classList.toggle("hidden");
            }
        })
    })
}