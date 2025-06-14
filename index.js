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
    await model.getItems(reader);
    await model.getSelectedItem(reader, 7761);
    const view = new DisplayBoardHTML(model, document.querySelector("#app"));
    view.render();
}

main();
