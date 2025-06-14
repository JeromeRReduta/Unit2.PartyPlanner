export default class DisplayBoardHTML {
    #board;
    #$app;

    constructor(board, $app) {
        this.#board = board;
        this.#$app = $app;
    }

    #$upcomingParties() {
        const $ul = document.createElement("ul");
        const liStrings = [];
        this.#board.items
            .map((item) => `<li>${item.name}</li>`)
            .forEach((li) => liStrings.push(li));
        $ul.innerHTML = liStrings.join("\n");
        return $ul;
    }

    #$partyDetails() {
        return document.createElement("div");
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
}
