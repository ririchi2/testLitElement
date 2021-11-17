/* eslint-disable indent */
import { RickAndMorty } from "./components/RickAndMorty";

const uri = "https://rickandmortyapi.com/api/character/";
const charData = [];

const request = () => {
    return fetch(uri)
        .then((response) => response.json())
        .then((data) => {
            data.results.forEach(element => {
                charData.push({
                    name: element.name,
                    photoUrl: element.image,
                    episodes: element.episode
                });
            });
        });
};

async function build() {
    await request();

    charData.forEach((character) => {
        const element = new RickAndMorty();
        element.setAttribute("name", character.name);
        element.setAttribute("photoUrl", character.photoUrl);
        element.setAttribute("episodes", element.episodes);
        document.body.appendChild(element);
    });
};

build();
