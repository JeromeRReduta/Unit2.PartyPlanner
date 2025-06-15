export default class DisplayBoard {
    #itemLookup = new Map();

    #selectedItem;

    constructor() {}

    async getItems(APICaller) {
        const fullItems = await APICaller.getAll();
        fullItems.forEach((item) => this.#itemLookup.set(item.id, item));
        console.log(this.#itemLookup);
    }

    async getSelectedItem(APICaller, id) {
        this.#selectedItem = await APICaller.get(id);
    }

    get itemLookup() {
        return structuredClone(this.#itemLookup);
    }

    get selectedItem() {
        return structuredClone(this.#selectedItem);
    }
}
