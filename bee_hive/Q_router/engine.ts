import { routes } from "../../src/ts/routes";

const url = window.location;

const links = document.querySelectorAll('.route-link') as NodeListOf<HTMLLIElement>;
const root = document.querySelector('#app-root') as HTMLLIElement;

if (!root) {
    throw new Error("#app-root element not found in index.html");
}

const getRoute = (path:string) => {
    return routes
    .find(route => route.path
        .toLowerCase()
        .replace(/\s+/g, '-') === path
        .toLowerCase()
        .replace(/\s+/g, '-'));
}

const renderPage = (component:Function) => {
    root.innerHTML = '';
    root.innerHTML = (component() ?? new Error("component not working."));
}

const changeLink = (toLink:string) => {
    window.history.pushState({}, "", toLink);

    let route = getRoute(url.pathname);

    if(!route){
        route = getRoute('fallback'); 
    }

    renderPage(route.component);
}

links && links.forEach(link => {
    link.addEventListener('click', (e) => {
        changeLink(link.dataset.link)
    });
});

