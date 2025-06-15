function $(id) {
    return document.getElementById(id);
}

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
        try {
            await this.board.getItems(this.reader);
            this.view.render();
            this.#registerListeners();
            this.view.render();
            console.log("done init");
        } catch (e) {
            console.error("AAAAAAAAH", e);
        }
    }

    #registerListeners() {
        console.log($("upcoming-parties"));
        $("upcoming-parties").addEventListener("click", () => {
            console.log("a");
            return true;
        });

        console.log("registered");
    }

    async selectItem(id) {
        await this.board.getSelectedItem(this.reader, id);
        this.view.render();
    }

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
