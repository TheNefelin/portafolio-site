// -- import Elements --------------------------------------------------------------
// ---------------------------------------------------------------------------------
import { LinksGroup, Links, Tecnologias } from "../class/ApiFetch.js";
import { RenderTecnologias, RenderLinksAndGroup } from "../components/RenderElement.js";

// -- Inicializar Sitio ------------------------------------------------------------
// ---------------------------------------------------------------------------------
window.onload = () => {
    console.log("iniciando sitio...");
    inicializarApi();
}

function inicializarApi() {
    const linksGrp = new LinksGroup;
    const links = new Links;
    const tecnologias = new Tecnologias;

    Promise.all([
        tecnologias.getTecnologias().then(data => data),
        linksGrp.getLinksGroup().then(data => data),
        links.getLinks().then(data => data)
    ])
    .then(arr => {
        RenderTecnologias(arr[0]);
        RenderLinksAndGroup(arr[1], arr[2]);
    })
    .catch(err => console.log(`ERROR: ${err}`));
}

// -- Comportamiento ---------------------------------------------------------------
// ---------------------------------------------------------------------------------
const navBar01Btn = document.querySelector(".navBar01-btn");

navBar01Btn.addEventListener("click", () => {
    navBar01Btn.classList.toggle("navBar01-btn_click");

    const navBar01Links = document.querySelector(".navBar01-links"); 
    navBar01Links.classList.toggle("navBar01-links_noOcultar");
});

const navBar01LinksA = document.querySelectorAll(".navBar01-links a"); 

navBar01LinksA.forEach(item => {
    item.addEventListener("click", () => {
        const navBar01Btn = document.querySelector(".navBar01-btn");
        navBar01Btn.classList.remove("navBar01-btn_click");

        const navBar01Links = document.querySelector(".navBar01-links"); 
        navBar01Links.classList.remove("navBar01-links_noOcultar");
    })
});

