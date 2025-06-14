export default class APICaller {
  url;

  constructor(url) {
    this.url = url;
  }

  async getAll() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`invalid url: ${url}`);
      }
      const json = await response.json();
      return json.data;
    } catch (e) {
      console.error(e);
    }
  }

  async get(id) {
    try {
      idUrl = `${this.url}/${id}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`invalid url: ${idUrl}`);
      }
      const json = response.json();
      return json.data;
    } catch (e) {
      console.error(e);
    }
  }
}
