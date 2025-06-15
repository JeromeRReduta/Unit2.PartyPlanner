export default class PartyFetcher {
    #url;

    constructor(url) {
        this.#url = url;
    }

    async fetchAll() {
        try {
            const response = await fetch(this.url);
            if (!response.ok) {
                throw new Error(`invalid url: ${this.url}`);
            }
            const json = await response.json();
            return json.data;
        } catch (e) {
            console.error(e);
        }
    }

    async fetchByID(id) {
        try {
            const idUrl = `${this.url}/${id}`;
            const response = await fetch(idUrl);
            if (!response.ok) {
                throw new Error(`invalid url: ${idUrl}`);
            }
            const json = await response.json();
            return json.data;
        } catch (e) {
            console.error(e);
        }
    }

    get url() {
        return this.#url;
    }
}
