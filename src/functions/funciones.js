import axios from 'axios'

const todosPersonajes = async () => {
	const peticion = await axios.get('https://rickandmortyapi.com/api/character')
    return peticion.data.results
}

export {
    todosPersonajes
}



