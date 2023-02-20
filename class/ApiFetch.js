class API {
    #url;
    constructor() {
        this.#url = "https://bsite.net/metalflap";
    };
    getUrl() {
        return this.#url;
    }
};

// Links Categoria ---------------------------------------------
// -------------------------------------------------------------
export class LinksGroup extends API {
    #api
    constructor() {
        super();
        this.#api = "links-group"
    };

    async getLinksGroup() {
        const res = await fetch(`${this.getUrl()}/${this.#api}`);
        return await res.json();
    };
};

// Links -------------------------------------------------------
// -------------------------------------------------------------
export class Links extends API {
    #api
    constructor() {
        super();
        this.#api = "links"
    };

    async getLinks() {
        const res = await fetch(`${this.getUrl()}/${this.#api}`);
        const data = await res.json();
        return data;
    };

    async getLinksById(id) {
        const res = await fetch(`${this.getUrl()}//${this.#api}/${id}`);
        const data = await res.json();
        return data;
    };
};

// Tecnologias -------------------------------------------------
// -------------------------------------------------------------
export class Tecnologias extends API {
    #api
    constructor() {
        super();
        this.#api = "tecnologias"
    };

    async getTecnologias() {
        const res = await fetch(`${this.getUrl()}/${this.#api}`);
        return await res.json();
    };
};

// -------------------------------------------------------------
// -------------------------------------------------------------
