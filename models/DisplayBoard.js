export default class DisplayBoard {
  items;

  selectedItem;

  constructor() {
    this.items = [];
    this.selectedItem = null;
  }

  async getItems(APICaller) {
    this.items = await APICaller.getAll();
  }

  async getItem(APICaller, id) {
    this.selectedItem = await APICaller.get(id);
  }
}
