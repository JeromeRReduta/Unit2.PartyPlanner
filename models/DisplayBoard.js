export default class DisplayBoard {
    #items;

    #selectedItem;

    constructor() {}

    async getItems(APICaller) {
        this.#items = await APICaller.getAll();
    }

    async getItem(APICaller, id) {
        this.#selectedItem = await APICaller.get(id);
    }

    get items() {
        return structuredClone(this.#items);
    }

    get selectedItem() {
        return structuredClone(this.#selectedItem);
    }
}
