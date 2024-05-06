//@ts-check
const API_URL = 'https://api.adviceslip.com/advice';

const fetchRandomAdvice = async () => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error('No se pudo obtener el consejo aleatorio')
    }

    const data = await response.json()

    console.log('Consejo aleatorio:', data.slip.advice)

  } catch (error) {
    console.error('Error fetching random advice:', error)
  }
}

fetchRandomAdvice();