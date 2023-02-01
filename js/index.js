// -- Inicializar Sitio ------------------------------------------------------------
// ---------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    console.log("iniciando sitio...");
    apiTest();
});

// iFrameResize({ log: true }, '#ifVideo');

function apiTest() {
    fetch("https://bsite.net/metalflap/mae_config")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        apiCargarTecnologias();
        cargarTecnologias();
        cargarLinks();
        console.log(data);
    })
    .catch((error) => {
        cargarTecnologias();
        cargarLinks();
        console.error('Error:', error);
    });
};

// -- Cargar Componentes Remotos ---------------------------------------------------
// ---------------------------------------------------------------------------------
function apiCargarTecnologias() {

}

function apiCargarLinks() {

}

// -- Cargar Componentes Locales ---------------------------------------------------
// ---------------------------------------------------------------------------------
function cargarTecnologias() {
    let html = ""

    dataTecnologias.map(d => {
        html = html + `
        <div key=${d.id} class="tarjeta-st wow animated bounceInLeft">
            <img src="${d.link}" alt="">
            <p>${d.descripcion}</p>
            <h1>${d.nombre}</h1>
        </div> `;
    });

    document.querySelector(".contenedor-st").innerHTML = html;
}

function cargarLinks() {
    let html = ""

    dataLinkGrp.map((item_linkGrp) => {
        html = html + "<div>"
        html = html + `<p>${item_linkGrp.nombre}</p>`

        let links = dataLinks.filter(d => d.idGrupo == item_linkGrp.id);

        links.map(items_links => {
            html = html + `<a href="${items_links.link}" target="_blank">${items_links.nombre}</a>`;
        });

        html = html + "</div>"
    });

    document.querySelector("footer").innerHTML = html;
}

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

