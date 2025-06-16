import PartyData from "./models/PartyData.js";
import PartyFetcher from "./readers/PartyFetcher.js";
import PartyViewModel from "./viewmodels/PartyViewModel.js";
import PartyDetailsView from "./views/PartyDetailsView.js";
import PartyListView from "./views/PartyListView.js";

function $(id) {
    return document.getElementById(id);
}

function initHTML() {
    $("app").innerHTML = `
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
}

async function initData() {
    try {
        const partyUrl =
            "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2504-FTB-ET-WEB-PT/events";
        const fetcher = new PartyFetcher(partyUrl);
        const model = new PartyData();
        const listView = new PartyListView($("party-list"));
        const detailsView = new PartyDetailsView($("party-details"));
        const viewmodel = new PartyViewModel(
            fetcher,
            model,
            listView,
            detailsView
        );
        viewmodel.init();
        model.list = await fetcher.fetchAll();
    } catch (e) {
        console.error(e);
    }
}

async function main() {
    try {
        initHTML();
        await initData();
    } catch (e) {
        console.error(e);
    }
}

main();
