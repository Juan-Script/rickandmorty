import React, { useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, useAccordion, Box, Flex,} from '@chakra-ui/react'
import { todosPersonajes} from '../functions/funciones';

export default function CardComponent({personaje}) {

  // useEffect(() => {
  //   console.log(personaje)
  // }, []);

  return (

<Card
  margin={10}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={personaje.image}
    alt='Cardpersonaje'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{personaje.name}</Heading>

      {/* <Button>
      <a href='#'>Descubre más sobre mi</a>
      
      </Button> */}
    </CardBody>

    <CardFooter>
      <Box  borderRadius={5} color={'black'} padding={1.5} borderColor={'black'} borderWidth={'1px'}>
        {personaje.status}
      </Box>
    </CardFooter>
  </Stack>
</Card>

  
  )
}
