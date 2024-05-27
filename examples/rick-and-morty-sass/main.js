const API_URL = 'https://rickandmortyapi.com/api/character';
const wrapperCharacters = document.getElementById('wrapperCharacters')

const fetchRickAndMortyApi = async () => {
  try {
    const response = await fetch(API_URL);
    const responseJson = await response.json();
    const results = responseJson.results;

    results.map((character) => {
      console.log('Detalle del personaje ==>', character)
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="card">
          <img src="${character.image}" alt="Carta del personaje ${character.name}">
          <span>${character.name}</span>
          <div class="detail">
            <span>Aparece en ${character.episode.length} episodios</span>
          </div>
        </div>
      `
      wrapperCharacters.appendChild(div)
    })
    

  } catch (error) {
    console.error('Error fetching random advice:', error)
  }
}

fetchRickAndMortyApi();