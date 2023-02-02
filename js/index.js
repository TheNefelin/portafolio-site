// -- Inicializar Sitio ------------------------------------------------------------
// ---------------------------------------------------------------------------------
let estadoApi = false;

document.addEventListener('DOMContentLoaded', () => {
    console.log("iniciando sitio...");
    apiTest();
});

// iFrameResize({ log: true }, '#ifVideo');

function apiTest() {
    fetch("https://bsite.net/metalflap/talento-digital")
    .then((response) => {
        return response.json();
    })
    .then((data) => {  // Si esto pasa, el contenido carga desde la API
        apiCargarTecnologias();
        apiCargarLinksGrupo();
        console.log(`${data[0].Nombre} ${data[0].Apellido} Nice: ${data[0].Alias}`);
    })
    .catch((error) => { // Si NO pasa, el contenido carga desde el arreglo Local
        renderTecnologias(dataTecnologias);
        cargarLinks();
        console.error('Error:', error);
    });
};

// -- Cargar Componentes Remotos ---------------------------------------------------
// ---------------------------------------------------------------------------------
function apiCargarTecnologias() {
    fetch("https://bsite.net/metalflap/tecnologias")
    .then((respuesta) => respuesta.json())
    .then((data) => renderTecnologias(data))
    .catch((err) => console.log(`Error: ${err}`));
}

function apiCargarLinksGrupo() {
    fetch("https://bsite.net/metalflap/links-group")
    .then((respuesta) => respuesta.json())
    .then((data) => {
        renderLinksGroup(data);
    })
    .catch((err) => console.log(`Error: ${err}`));
}

function apiCargarLinks(id) {
    fetch(`https://bsite.net/metalflap/links/${id}`)
    .then((respuesta) => respuesta.json())
    .then((data) => {
        return data;
    })
    .catch((err) => console.log(`Error: ${err}`));
}

// -- Render Comonentes ------------------------------------------------------------
// ---------------------------------------------------------------------------------
function renderTecnologias(dt) {
    let html = ""

    dt.map(d => {
        html = html + `
        <div key=${d.id} class="tarjeta-st wow animated bounceInLeft">
            <img src="${d.link}" alt="">
            <p>${d.descripcion}</p>
            <h1>${d.nombre}</h1>
        </div> `;
    });

    document.querySelector(".contenedor-st").innerHTML = html;
}

function renderLinksGroup(dt) {
    let html = ""

    dt.map((d) => {
        html = html + "<div>"
        html = html + `<p>${d.nombre}</p>`

        let prueba = apiCargarLinks(d.id);
        console.log(prueba);

        html = html + "</div>";
    });

    document.querySelector("footer").innerHTML = html;
}

function cargarLinks() {
    let html = ""

    dataLinkGrp.map((item_linkGrp) => {
        html = html + "<div>";
        html = html + `<p>${item_linkGrp.nombre}</p>`;

        let links = dataLinks.filter(d => d.idGrupo == item_linkGrp.id);

        links.map(items_links => {
            html = html + `<a href="${items_links.link}" target="_blank">${items_links.nombre}</a>`;
        });

        html = html + "</div>";
    });

    document.querySelector("footer").innerHTML = html;
}

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

