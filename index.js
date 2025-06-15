import PartyFetcher from "./readers/PartyFetcher.js";

async function main() {
    const partyUrl =
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2504-FTB-ET-WEB-PT/events";
    const reader = new PartyFetcher(partyUrl);
    console.log("We have a reader @", reader);
    console.log(await reader.fetchAll());
    console.log(await reader.fetchByID(7761));
}

main();
