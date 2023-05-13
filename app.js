const pokeURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const container = document.querySelector('#container');

for (let i=1; i<=1010; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const pokeLabel = document.createElement('span');
    pokeLabel.innerText = `#${i}`;
    const pokeImg = document.createElement('img');
    pokeImg.src = `${pokeURL}${i}.png`;

    pokemon.appendChild(pokeImg);
    pokemon.appendChild(pokeLabel);
    container.appendChild(pokemon);
}