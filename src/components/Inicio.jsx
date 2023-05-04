import React, {useEffect, useState} from 'react'
import { todosPersonajes} from '../functions/funciones';
import { Box } from '@chakra-ui/react'
import CardComponent from './CardComponent';

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null)

  useEffect(()=>{
    todosPersonajes().then((response) => {
      setPersonajes(response)
    })
  },[])
  
  

  return (
    <>
      {/* {Array.isArray(personajes) ? (
        personajes.map(personaje => (
          <div key={personaje.id}>
            <a href={personaje.image}>{personaje.name}</a>

          </div>
        ))
      ) : (
        <p>No hay personajes</p>
      )} */}

      {Array.isArray(personajes) ? (
        personajes.map(personaje => (
          <Box margin='auto' w='50%'>
            <CardComponent personaje={personaje}/>
          </Box>
        ))
      ) : null}
    </>
  );
  
  
        } 
  


        


export default Inicio