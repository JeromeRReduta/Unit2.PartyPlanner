import PartyData from "./models/PartyData.js";
import PartyFetcher from "./readers/PartyFetcher.js";

async function main() {
    const partyUrl =
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2504-FTB-ET-WEB-PT/events";
    const reader = new PartyFetcher(partyUrl);
    const model = new PartyData();
    model.list = await reader.fetchAll();
    console.log("selected before op:", model.selected);
    model.selected = await reader.fetchByID(7761);
    console.log("list:", model.list);
    console.log("selected:", model.selected);
}

main();
