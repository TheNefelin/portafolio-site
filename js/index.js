// -- Inicializar Sitio ------------------------------------------------------------
// ---------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    console.log("iniciando sitio...");
    // cargarTecnologias();
    console.log("Sitio inicialisado...");
});

// -- Cargar Componentes -----------------------------------------------------------
// ---------------------------------------------------------------------------------
function cargarTecnologias() {
    let html = ""
    dataTecnologias.map(d => {
        html = html + `
        <div key=${d.id} class="tarjeta-st">
            <img src="${d.link}" alt="">
            <p>${d.descripcion}</p>
            <h1>${d.nombre}</h1>
        </div> `;
    });

    document.querySelector(".contenedor-st").innerHTML = html;
}


