import { Games } from './games.js';
import { Details } from './details.js';
import { UI } from './ui.js';

const gamesAPI = new Games();
const detailsAPI = new Details();
const ui = new UI();

const detailsSection = document.querySelector('.details');
const btnClose = document.getElementById('btnClose');

(async function init() {
  const allGames = await gamesAPI.getGames();
  ui.displayGames(allGames);
})();


document.addEventListener('click', async (e) => {
  const card = e.target.closest('.game');
  if (card) {
    const id = card.getAttribute('data-id');
    const game = await detailsAPI.getDetails(id);
    ui.displayDetails(game);
    detailsSection.classList.remove('d-none');
    detailsSection.classList.add('d-block');
  }
});


btnClose.addEventListener('click', () => {
  detailsSection.classList.add('d-none');
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', async () => {

  
    navLinks.forEach(l => l.classList.remove('active'));

 
    link.classList.add('active');


    const category = link.getAttribute('data-category');

    const allGames = await gamesAPI.getGames(category);


    ui.displayGames(allGames);
  });
});
