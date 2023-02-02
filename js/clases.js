export function Links(id, nombre, link) {
    let _id = id;
    let _nombre = nombre;
    let _link = link;

    this.getId = () => {
        return _id;
    };

    this.getNombre = () => {
        return _nombre;
    };

    this.getLink = () => {
        return _link;
    };
};