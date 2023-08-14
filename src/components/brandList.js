export default function createBrands(arr) {
    let html = "";
    for (let el of arr) {
        html += `<li class="brand"><input type="checkbox" id="${el.id}" class="custom-checkbox">
    <label for="${el.id}">${el.title}</label></li>`
    }
    return html;
}



