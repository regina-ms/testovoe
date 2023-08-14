import products from "../products.json";
let pictures = []; 

function importAll(r) {
  r.keys().forEach((s, i, arr) => pictures[i] = r(s));
}

importAll(require.context('../images/items', true, /\.png$/));

for(let i = 0; i<products.length; i++ ) {
    products[i].image = pictures[i];
}

export default products;
