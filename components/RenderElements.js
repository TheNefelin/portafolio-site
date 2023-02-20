export function RenderTecnologias(dt) {
    const contenedor = document.querySelector(".contenedor-st");

    dt.map(e => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-st");
        tarjeta.classList.add("wow");
        tarjeta.classList.add("animated");
        tarjeta.classList.add("bounceInLeft");
        tarjeta.value = e.id;

        const img = document.createElement("img");
        img.src = e.link;
        tarjeta.appendChild(img);

        const p = document.screateElement("p");
        p.innerText = e.descripcion;
        tarjeta.appendChild(p);

        const h1 = document.createElement("h1");
        h1.innerText = e.nombre;
        tarjeta.appendChild(h1);
   
        contenedor.appendChild(tarjeta);
    });
};

export function RenderLinks() {

}