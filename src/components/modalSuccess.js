export default function modalSuccess() {
    let modal = document.createElement("div");
    modal.classList.add("modal-success");
    modal.innerHTML = `<h2 class="modal-header">Ваш заказ успешно оформлен</h2>
    <button type="button" class="return-to-main close">Закрыть</button>`
    document.querySelector(".cart-page").append(modal)
}