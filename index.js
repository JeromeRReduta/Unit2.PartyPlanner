import PartyData from "./models/PartyData.js";
import PartyFetcher from "./readers/PartyFetcher.js";
import PartyDetailsView from "./views/PartyDetailsView.js";
import PartyListView from "./views/PartyListView.js";

function $(id) {
    return document.getElementById(id);
}

async function main() {
    const $app = $("app");
    $app.innerHTML = `
    <section class="top">
        <h1>Party Planner</h1>
    </section>
    <section class="bottom">
        <section class="left">
            <h2>Upcoming Parties</h2>
            <div id="party-list"></div>
        </section>
        <section class="right">
            <h2>Party Details</h2>
            <div id="party-details"></div>
        </section>
    </section>
    
    `;
    const partyUrl =
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2504-FTB-ET-WEB-PT/events";
    const reader = new PartyFetcher(partyUrl);
    const model = new PartyData();
    model.subscribe("onSetList", (list) => console.log("Subscribed: ", list));
    model.subscribe("onSetSelected", (selected) =>
        console.log("we got this:", selected)
    );
    model.list = await reader.fetchAll();
    console.log("selected before op:", model.selected);
    model.selected = await reader.fetchByID(7765);

    const listView = new PartyListView($("party-list"));
    listView.subscribe("onClick", (id) => console.log("Clicked on: ", id));
    listView.draw(model.list);

    const detailsView = new PartyDetailsView($("party-details"));
    detailsView.draw(model.selected);
}

main();
