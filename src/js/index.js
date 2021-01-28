import '../sass/style.scss';
import { routes } from './routes';
import { PageList } from './PageList';

const searchBar = document.querySelector("form");

// Fontawesome
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";



// Routes
let pageArgument;

const setRoute = () => {
    let path = window.location.hash.substring(1).split("/");
    pageArgument = path[1] || "";

    let pageContent = document.getElementById("pageContent");
    routes[path[0]](pageArgument);
    return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());

// Page list game
searchBar.addEventListener("submit", (e) => {
    const gameSearch = document.getElementById("searchgame").value;
    e.preventDefault();
    PageList(gameSearch)
})