export default class PartyListView {
    #$elem;
    #subscribedFuncs = {
        onClick: [],
    };

    constructor($elem) {
        this.#$elem = $elem;
    }

    draw(parties) {
        this.#$elem.innerHTML = "";
        this.#$elem.append(this.#partyList(parties));
    }

    #partyList(parties) {
        const $ul = document.createElement("ul");
        for (let party of parties) {
            const $li = document.createElement("li");
            $ul.append($li);
            const $a = document.createElement("a");
            $li.append($a);
            $a.href = "#";
            $a.id = party.id;
            $a.textContent = party.name;
        }
        $ul.addEventListener("click", (event) => {
            if (event.target.id !== 0 && !event.target.id) {
                return false;
            }
            this.#subscribedFuncs["onClick"].forEach((func) =>
                func(event.target.id)
            );
            return true;
        });
        return $ul;
    }

    subscribe(key, func) {
        this.#subscribedFuncs[key].push(func);
    }
}
