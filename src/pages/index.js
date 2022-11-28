import { Box, Button, Flex, FormControl, FormLabel, Input, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";


export default function Home() {
  return (
    <Box  margin='4'  >

    <Flex color='white' justifyContent='space-between' >
        <Text color='black' fontSize='2xl' > Lista de CLientes</Text>
        <Button colorScheme='blue'>+</Button>
    </Flex>

    <VStack margin='1rem' >
      <FormControl margin='1rem' >
        <FormLabel>Name</FormLabel>
          <Input type='text' />
      </FormControl>

      <FormControl  margin='1rem' >
        <FormLabel>Email address</FormLabel>
          <Input type='email' />
      </FormControl>

      <Button fontSize='sm' alignSelf='flex-end' colorScheme='blue' >Cadastro</Button>
    </VStack>  

    <TableContainer>
      <Table variant='simple'>
        <Thead bgColor='blue.500' >
          <Tr>
            <Th textColor='white' >Name</Th>
            <Th textColor='white' >Email</Th>
            <Th textColor='white' >Action</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>jr</Td>
            <Td>jrjrjrjr@gmail.com</Td>
            <Td > 
              <Flex justifyContent='space-between' >
                <Button size='sm' fontSize='smaller' colorScheme='yellow' mr='2'  >Editar</Button>
                <Button size='sm' fontSize='smaller' colorScheme='red' >Remover</Button>
              </Flex>
            </Td>
          </Tr>
    
        </Tbody>
        
      </Table>
</TableContainer>
    
    </Box>
  )
}
