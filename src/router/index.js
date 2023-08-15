import appConstants from '../common/constants.js';
import cartPage from '../pages/cartPage.js';
import mainPage from '../pages/mainPage.js';

/*
    Вместо if условий или блока switch case я бы создал подобный объект со значением
    { [название пути]: функция_для_рендера }
 */
const routes = {
    // Не совсем понимаю зачем resize обработчик
    [appConstants.pathnames.mainPage]: mainPage,
    [appConstants.pathnames.cartPage]: cartPage
}

function error404Page() {
    document.body.innerHTML = '<h1>Ошибка 404 - страница не найдена</h1>'
}

function error500Page() {
    document.body.innerHTML = '<h1>Ошибка 500 при рендере</h1>'
}

function renderPath(path) {
    // С текущим роутером есть проблема - он ломается при несуществующем пути
    // Роутинг через объект позволяет делать удобную проверку на существование через ключевое слово in
    if (!(path in routes)) return error404Page()

    try {
        routes[path]()
    } catch (err) {
        // Так же никогда не стоит забывать про обработку ошибок
        error500Page()
        console.error(err)
    }
}

export function goTo(path) {
    window.history.pushState({path}, "path", path);
    renderPath(path)
}

export default function initRoute() {
    // У window.location есть параметр pathname, создавать URL из href - лишнее
    window.addEventListener('popstate', () => renderPath(window.location.pathname))

    document.querySelectorAll('[href^="/"]').forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();
            // Читабельнее без деструктуризации.
            // Лучше читать event.currentTarget, т.к. если внутри ссылки будут другие элементы,
            // то из-за всплытия target'ом будут они, а у них href'а не будет
            goTo(new URL(e.currentTarget.href).pathname);
        })
    })

    renderPath(window.location.pathname)
}
