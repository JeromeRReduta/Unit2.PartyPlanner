export default class PartyData {
    #list = [];

    #selected = null;

    constructor() {}

    get list() {
        return structuredClone(this.#list);
    }

    set list(newList) {
        this.#list = newList;
    }

    get selected() {
        return structuredClone(this.#selected);
    }

    set selected(newParty) {
        this.#selected = newParty;
    }
}
