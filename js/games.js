export class Games {
  constructor() {
    this.apiUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
    this.headers = {
      'x-rapidapi-key': 'f21aaf98d8msh9be100d376a6daep153afcjsnc2263e85a485',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    };
  }

  async getGames(category = 'mmorpg') {
    const response = await fetch(`${this.apiUrl}?category=${category}`, {
      method: 'GET',
      headers: this.headers
    });
    return await response.json();
  }
}
