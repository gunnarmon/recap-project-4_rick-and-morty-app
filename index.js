import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

const urlCharacters = "https://rickandmortyapi.com/api/character";
const urlLocation = "https://rickandmortyapi.com/api/location";
const urlEpisodes = "https://rickandmortyapi.com/api/episodes";

async function fetchCharacters() {
  const response = await fetch(urlCharacters);
  const data = await response.json();
  const characterData = data.results;
  cardContainer.innerHTML = "";
  characterData
    .map(CharacterCard)
    /* .map((character) => {
      CharacterCard(character);
    }) */
    .forEach((card) => {
      cardContainer.append(card);
    });

  /* return characterData; */

  /*   characterData.results.forEach((character) => {
    const cardElement = CharacterCard(character);
    cardContainer.innerHTML = "";
    cardContainer.append(cardElement);
  }); */
}

fetchCharacters();
