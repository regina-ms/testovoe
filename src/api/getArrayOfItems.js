export default function getArrayOfItems(className) {
    return Array.from(document.querySelectorAll('.' + className));
}