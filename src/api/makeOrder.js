import modalSuccess from "../components/modalSuccess.js";
import closeModal from "./closeModal.js";
import getProductFromLocal from "./getProductsFromLocal.js"

export default function makeOrder() {
    const form = document.forms.data
    form.onsubmit = async (e) => {
        e.preventDefault();
        const form = document.forms.data;
        let formData = new FormData(form);

        let productsData = getProductFromLocal();
        let products = {};
        for (let item of productsData) {
            products[item.title] = item
        }

        formData.set("productsData", JSON.stringify(products))

        let response = await fetch('https://app.aaccent.su/js/confirm.php', {
            method: "POST",
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })

        let body = await response.json();
        if (body.result === "ok") {
            modalSuccess();
            closeModal();
        }
    }
}