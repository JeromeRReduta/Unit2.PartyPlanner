export default class PartyViewModel {
    #fetcher;

    #model;

    #listView;

    #detailsView;

    constructor(fetcher, model, listView, detailsView) {
        this.#fetcher = fetcher;
        this.#model = model;
        this.#listView = listView;
        this.#detailsView = detailsView;
    }

    init() {
        this.#model.subscribe("onSetList", (parties) =>
            this.#listView.draw(parties)
        );
        this.#model.subscribe("onSetSelected", (party) =>
            this.#detailsView.draw(party)
        );
        this.#listView.subscribe("onClick", async (id) => {
            try {
                if (id !== 0 && !id) {
                    return;
                }
                this.#model.selected = await this.#fetcher.fetchByID(id);
            } catch (e) {
                console.error(e);
            }
        });
    }
}
