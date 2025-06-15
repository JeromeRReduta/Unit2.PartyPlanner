export default class PartyData {
    #list = [];

    #selected = null;

    #subscribedFuncs = {
        onSetList: [],
        onSetSelected: [],
    };
    constructor() {}

    get list() {
        return structuredClone(this.#list);
    }

    set list(newList) {
        this.#list = newList;
        this.#subscribedFuncs["onSetList"].forEach((func) => func(this.list));
    }

    get selected() {
        return structuredClone(this.#selected);
    }

    set selected(newParty) {
        this.#selected = newParty;
        this.#subscribedFuncs["onSetSelected"].forEach((func) =>
            func(this.selected)
        );
    }

    subscribe(key, func) {
        this.#subscribedFuncs[key].push(func);
    }
}
