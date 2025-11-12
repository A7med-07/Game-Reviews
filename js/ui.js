export class UI {
  displayGames(games) {
    const container = document.getElementById('gamesData');
    let cartona = '';

    games.forEach(game => {
      cartona += `
      <div class="col">
        <div class="card h-100 bg-transparent game" role="button" data-id="${game.id}">
          <div class="card-body">
            <figure class="position-relative">
              <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}">
            </figure>
            <figcaption>
              <div class="hstack justify-content-between">
                <h3 class="h6 small">${game.title}</h3>
                <span class="badge text-bg-primary">Free</span>
              </div>
              <p class="card-text small text-center text-secondary opacity-50">${game.short_description.split(' ').slice(0, 14).join(' ')}</p>
            </figcaption>
          </div>
          <footer class="card-footer small hstack justify-content-between">
            <span class="badge badge-color">${game.genre}</span>
            <span class="badge badge-color">${game.platform}</span>
          </footer>
        </div>
      </div>`;
    });

    container.innerHTML = cartona;
  }

  displayDetails(game) {
    const content = document.getElementById('detailsContent');
    content.innerHTML = `
      <div class="col-md-4">
        <img src="${game.thumbnail}" alt="${game.title}" class="w-100">
      </div>
      <div class="col-md-8">
        <h3>Title: ${game.title}</h3>
        <p>Category: <span class="badge text-bg-info">${game.genre}</span></p>
        <p>Platform: <span class="badge text-bg-info">${game.platform}</span></p>
        <p>Status: <span class="badge text-bg-info">${game.status}</span></p>
        <p class="small">${game.description}</p>
        <a href="${game.game_url}" class="btn btn-outline-warning" target="_blank">Show Game</a>
      </div>`;
  }
}
