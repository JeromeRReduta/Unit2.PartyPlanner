// Like 80% of this code is referenced from https://github.com/FullstackAcademy/party-planner-admin/blob/main/index.js

export default class DisplayBoardHTML {
    #board;
    #$app;

    constructor(board, $app) {
        this.#board = board;
        this.#$app = $app;
    }

    #$upcomingParties() {
        const $ul = document.createElement("ul");
        $ul.id = "upcoming-parties";
        const liStrings = [];
        this.#board.itemLookup.forEach((value, key) => {
            const $li = document.createElement("li");
            const $a = document.createElement("a");
            $li.append($a);
            $a.href = "#";
            $a.id = key;
            $a.textContent = value.name;
            $ul.append($li);
        });
        // so apparently js map.foreach() takes args in order of value, THEN key
        // const $li = `<li><a href="#" id="${key}">${value.name}</a></li>`;

        return $ul;
    }

    #$partyDetails() {
        const $div = document.createElement("div");

        $div.className = "party-details";
        const party = this.#board.selectedItem;
        $div.innerHTML = party
            ? `
                <div><b>${party.name} #${party.id}</b></div>
                <div>${party.date}</div>
                <div><i>${party.location}</i></div>
                <div>${party.description}</div>
            `
            : `
                <div>Select a party!</div>
            `;
        return $div;
    }

    render() {
        this.#$app.innerHTML = `
        <main>
            <section class="first">
                <h1>Party Planner</h1>
            </section>
            <section class="second">
                <section class="left">
                    <h2>Upcoming Parties</h2>
                    <UpcomingParties></UpcomingParties>
                </section>
                <section class="right">
                    <h2>Party Details</h2>
                    <PartyDetails></PartyDetails>
                </section>
            </section>
        </main>
        `;
        this.#$app
            .querySelector("UpcomingParties")
            .replaceWith(this.#$upcomingParties());
        this.#$app
            .querySelector("PartyDetails")
            .replaceWith(this.#$partyDetails());
    }

    get board() {
        return this.#board;
    }

    get $app() {
        return this.#$app;
    }
}
