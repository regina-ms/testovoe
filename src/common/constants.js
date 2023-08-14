const appConstants = {
    itemsPerPage: 6,
    currentPageDefault: 1,
    productsToOrder: [],
    clientWidth: document.documentElement.clientWidth,
    pathnames: {
        mainPage: '/',
        cartPage: '/cart',
    },
}

export default appConstants;

export function getCurrentPage() {
    const paginationBtns = document.querySelector(".pagination-buttons");
    return paginationBtns.querySelector(".active-page-numb");
}