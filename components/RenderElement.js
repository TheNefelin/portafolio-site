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

        const p = document.createElement("p");
        p.innerText = e.descripcion;
        tarjeta.appendChild(p);

        const h2 = document.createElement("h2");
        h2.innerText = e.nombre;
        tarjeta.appendChild(h2);
   
        contenedor.appendChild(tarjeta);
    });
};

export function RenderLinksAndGroup(linksGrp, links) {
    const footer = document.querySelector("footer");

    linksGrp.map(grp => {
        const div = document.createElement("div");

        const p = document.createElement("p");
        p.innerText = grp.nombre
        div.appendChild(p);

        const linksPorGrp = links.filter(e => e.idLinkGrupo == grp.id)

        linksPorGrp.map(d => {
            const a = document.createElement("a");
            a.target = "_blank";
            a.href = d.link;
            a.innerText = d.nombre;

            div.appendChild(a);
        });

        footer.appendChild(div);
    });
};