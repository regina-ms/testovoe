export default function createBrands(arr) {
  console.log(arr)
  // Можно упразднить через map. И лучше перенести ul в одно место с li. Если понадобится
  // редактировать и ul и li, то не нужно прыгать между файлами, к тому же вряд-ли эти li будут
  // вставлены где-то в другом месте без ul
  const list = arr.map(el => `
    <li class="brand">
        <input type="checkbox" id="${el.id}" class="custom-checkbox">
        <label for="${el.id}">${el.title}</label>
    </li>
  `)

  return `<ul class="brands-list">${list.join('')}</ul>`
}



