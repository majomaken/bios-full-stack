const API_URL = 'https://rickandmortyapi.com/api/character';
const wrapperCharacters = document.getElementById('wrapperCharacters')
const CHARACTERS = [
  {
    name: 'Rick',
    status: 'Alive',
    species: 'Human'
  },
  {
    name: 'Rick',
    status: 'Alive',
    species: 'Human'
  },{
    name: 'Rick',
    status: 'Alive',
    species: 'Human'
  },{
    name: 'Rick',
    status: 'Alive',
    species: 'Human'
  },{
    name: 'Rick',
    status: 'Alive',
    species: 'Human'
  },{
    name: 'Rick',
    status: 'Alive',
    species: 'Human'
  },{
    name: 'Rick',
    status: 'Alive',
    species: 'Human'
  },{
    name: 'Rick',
    status: 'Alive',
    species: 'Human'
  },{
    name: 'Rick',
    status: 'Alive',
    species: 'Human'
  },{
    name: 'Rick',
    status: 'Alive',
    species: 'Human'
  },
]
const fetchRickAndMortyApi = async () => {
  try {
    const response = await fetch(API_URL);
    const responseJson = await response.json();
    const results = responseJson.results;

    results.map((character) => {
      const div = document.createElement('div');
      div.innerHTML = `<span>${character.name}</span>`
      wrapperCharacters.appendChild(div)
    })
    

  } catch (error) {
    console.error('Error fetching random advice:', error)
  }
}

fetchRickAndMortyApi();