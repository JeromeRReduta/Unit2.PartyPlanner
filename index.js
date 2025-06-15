import DisplayBoardController from "./controllers/DisplayBoardController.js";
import DisplayBoard from "./models/DisplayBoard.js";
import APICaller from "./readers/APICaller.js";
import DisplayBoardHTML from "./views/DisplayBoardHtml.js";

function $(id) {
    return document.getElementById(id);
}

async function main() {
    init();
}

async function init() {
    const url =
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2504-ftb-et-web-pt/events";
    const reader = new APICaller(url);
    const model = new DisplayBoard();
    const view = new DisplayBoardHTML(model, document.querySelector("#app"));
    const controller = new DisplayBoardController(model, view, reader);
    await controller.init();
}

main();
