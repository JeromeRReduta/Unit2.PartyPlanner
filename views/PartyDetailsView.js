export default class PartyDetailsView {
    #$elem;
    #subscribedFuncs = {};

    constructor($elem) {
        this.#$elem = $elem;
    }

    draw(party) {
        this.#$elem.innerHTML = this.#$partyDetails(party); // safe to use innerhtml here b/c we have no listeners - if we add some listeners, we will need to start appending
    }

    #$partyDetails(party) {
        return `
            <div id="selected-data">
                <h3>${party.name} #${party.id}</h3>
                <p>${party.date}
                <p>${party.location}</p>
                <p>${party.description}</p>
            </div>
        `;
    }

    subscribe(key, func) {
        this.#subscribedFuncs[key].push(func);
    }
}
