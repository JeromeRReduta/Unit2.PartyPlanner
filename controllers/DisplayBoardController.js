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
        // set up stuff.....

        document.addEventListener("click", (event) => {
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
