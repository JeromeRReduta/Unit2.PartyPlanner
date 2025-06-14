import DisplayBoardController from "./controllers/DisplayBoardController.js";
import DisplayBoard from "./models/DisplayBoard.js";
import APICaller from "./readers/APICaller.js";
import DisplayBoardHTML from "./views/DisplayBoardHtml.js";

function $(id) {
    return document.getElementById(id);
}

async function main() {
    console.log("START");
    const url =
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2504-ftb-et-web-pt/events";
    const reader = new APICaller(url);
    console.log(await reader.getAll());
    console.log(await reader.get("7761"));
    console.log("END");
}

main();
