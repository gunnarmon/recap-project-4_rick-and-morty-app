import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const searchBarInput = document.querySelector("#search-bar-input");
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

let urlCharacters = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`;

async function fetchCharacters() {
  const response = await fetch(urlCharacters);
  const data = await response.json();
  const characterData = data.results;
  maxPage = data.info.pages;
  /* console.log(data); */
  cardContainer.innerHTML = "";
  //mapen der characterData aus den fetch daten und direkte anwendung der CharacterCard fonction auf die einzelnen Objekte:
  characterData
    .map(CharacterCard)
    //für jede CharacterCard wird eine .forEach methode angewandt um diese an den cardContainer angehängt:
    .forEach((card) => {
      cardContainer.append(card);
    });
  pagination.textContent = `${page} / ${maxPage}`;
}

fetchCharacters();

nextButton.addEventListener("click", () => {
  if (page === maxPage) {
    return;
  }
  page++;
  urlCharacters = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`;
  fetchCharacters();
});

prevButton.addEventListener("click", () => {
  if (page === 1) {
    return;
  }
  page--;
  urlCharacters = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`;
  fetchCharacters();
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchQuery = searchBarInput.value;
  urlCharacters = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`;
  fetchCharacters();
});

/* updateSearchResults(searchText) */
