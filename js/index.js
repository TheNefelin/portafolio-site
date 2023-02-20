// -- import Elements --------------------------------------------------------------
// ---------------------------------------------------------------------------------
import { LinksGroup, Links, Tecnologias } from "../class/ApiFetch.js";
import { RenderTecnologias, RenderLinks } from "../components/RenderElements.js";

// -- Inicializar Sitio ------------------------------------------------------------
// ---------------------------------------------------------------------------------
let arrLinksGroup = [];
let arrLinks = [];

window.onload = () => {
    console.log("iniciando sitio...");
    getLinksAndGrupo_api();

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
        console.log(arr)

        console.log(RenderTecnologias(arr[0]))
        
    })
    .catch(err => console.log(`ERROR: ${err}`));
}

// -- Cargar Componentes Remotos ---------------------------------------------------
// ---------------------------------------------------------------------------------

function getTecnologias_api() {
    fetch("https://bsite.net/metalflap/tecnologias")
    .then((respuesta) => respuesta.json())
    .then((data) => renderTecnologias(data))
    .catch((err) => console.log(`Error: ${err}`));
}

function getLinksAndGrupo_api() {
    fetch("https://bsite.net/metalflap/links-group")
    .then((resp) => resp.json())
    .then((data) => arrLinksGroup = data)
    .then(() => fetch("https://bsite.net/metalflap/links"))
    .then((resp) => resp.json())
    .then((data) => arrLinks = data)
    .then(() => renderLinksAndGroup())
    .catch((err) => console.log(`Error: ${err}`));
}

// -- Render Componentes -----------------------------------------------------------
// ---------------------------------------------------------------------------------


function renderLinksAndGroup() {
    let html = ""

    arrLinksGroup.map((lg) => {
        html += `<div><p>${lg.nombre}</p>`

        arrLinks.map(l => {
            if (l.idLinkGrupo == lg.id) {
                html += `<a target="_blank" href="${l.link}">${l.nombre}</a>`;
            }
        });
        
        html += "</div>";
    });

    document.querySelector("footer").innerHTML = html;
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

