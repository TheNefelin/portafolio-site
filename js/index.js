// -- Inicializar Sitio ------------------------------------------------------------
// ---------------------------------------------------------------------------------
// import { LinksGroup, Links } from "../js/clases.js";

let arrLinksGroup = [];
let arrLinks = [];

window.onload = () => {
    console.log("iniciando sitio...");
    getTecnologias_api();
    getLinksAndGrupo_api();
}

// iFrameResize({ log: true }, '#ifVideo');

function apiTest() {
    fetch("https://bsite.net/metalflap/talento-digital")
    .then((response) => {
        return response.json();
    }) 
    .then((data) => {  // Si esto pasa, el contenido carga desde la API
        getTecnologias_api();
        getLinksAndGrupo_api();
        console.log(`${data[0].nombre} ${data[0].apellido} Nice: ${data[0].alias}`);
    })
    .then(() => {
        arrLinksGroup = dataLinkGrp;
        arrLinks = dataLinks;
    })
    .catch((error) => { // Si NO pasa, el contenido carga desde el arreglo Local
        renderTecnologias(dataTecnologias);
        renderLinksAndGroup();
        console.error('Error:', error);
    });
};

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
function renderTecnologias(dt) {
    let html = ""

    dt.map(d => {
        html += `
        <div key=${d.id} class="tarjeta-st wow animated bounceInLeft">
            <img src="${d.link}" alt="">
            <p>${d.descripcion}</p>
            <h1>${d.nombre}</h1>
        </div> `;
    });

    document.querySelector(".contenedor-st").innerHTML = html;
}

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

