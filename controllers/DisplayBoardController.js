export default class DisplayBoardController {
    #board;

    #view;

    #reader;

    constructor(board, view, reader) {
        this.#board = board;
        this.#view = view;
        this.#reader = reader;
    }

    async init() {
        await this.#board.getItems(this.#reader);

        document.addEventListener("click", async (event) => {
            /* event => this.selectItem(id) */
            /* then this.#view.render() */
        });
    }

    async selectItem(id) {}

    get board() {
        return this.#board;
    }

    get view() {
        return this.#view;
    }

    get reader() {
        return this.#reader;
    }
}
