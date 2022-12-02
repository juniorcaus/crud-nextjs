import { Box, Button, Flex,  Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { InputForm } from "../components/Input";


export default function Home() {

  const [clients, setClients] = useState([])

  const [id, setId] = useState(null)
  const [name, setName] = useState('')    
  const [email, setEmail] = useState('')    


// FUNÇÃO PARA CRIAR / CADASTRAR OS DADOS DO CLIENTE COM NOEM E EMAIL
 const handleSubmitCreateClient = (e) => {
    e.preventDefault()

    if(!name && !email) return 

    setClients(clients.concat({_id: new  Date().getMilliseconds().toString(),name, email}))

    setName('') // para limpar os textos do formulário quando cadastrar o nome e email
    setEmail('')
  }

  //FUNÇÃO PARA ATUALIZAR OS DADOS DO NOME E EMAIL DO CLIENTE
  const handleSubmitUpdateClient = (e) => {
    e.preventDefault()

    if(!name && !email) return 

    setClients(clients.map(client => client._id === id ? {name, email, _id: id} : client))

    setName('') // para limpar os textos do formulário quando cadastrar o nome e email
    setEmail('')
    setId(null)
  }


  // FUNÇÃO PARA DELETAR OS DADOS DO CADASTRO DO CLIENTE
  const handleDeleteClient = (_id) => {
    setClients(clients.filter(client => client._id !== _id))
  }

  const handleChangeName = (text) => {
    setName(text)
  }

  const handleChangeEmail = (text) => {
    setEmail(text)
  }

  const handleShowUpdateClientForm = (client) => {
    setId(client._id)
    setName(client.name)
    setEmail(client.email)
  }

  return (
    <Box  margin='4'  >

    <Flex color='white' justifyContent='space-between' >
        <Text color='black' fontSize='2xl' > Lista de CLientes</Text>
        <Button colorScheme='blue'>+</Button>
    </Flex>
                                      {/* SE TIVER ID VAI PEDIR PARA FAZER UPDATE DO CADASTRO DO CLIENTE, SE NÃO VAI PEDIR PARA CRIAR UM NOVO CLIENTE */}
    <VStack margin='1rem' as="form" onSubmit={id ? handleSubmitUpdateClient : handleSubmitCreateClient} >  
  
      <InputForm label="Nome" name="name" value={name} onChange={e => handleChangeName(e.target.value)} />

      <InputForm label="Email" name="email" value={email} type="email" onChange={e => handleChangeEmail(e.target.value)} />

      <Button fontSize='sm' alignSelf='flex-end' colorScheme='blue' type="submit" >{id? 'Atualizar' : 'Cadastrar'}</Button>
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
          {clients.map(client => ( 
             <Tr key={client.email} >
             <Td>{client.name}</Td>
             <Td>{client.email}</Td>
             <Td> 
               <Flex justifyContent='space-between' >
                 <Button size='sm' fontSize='smaller' colorScheme='yellow' mr='2' onClick={ () => handleShowUpdateClientForm(client) } >Editar</Button>
                 <Button size='sm' fontSize='smaller' colorScheme='red' onClick={() => handleDeleteClient(client._id)} >Remover</Button>

               </Flex>
             </Td>
           </Tr>

          ))}  
    
        </Tbody>
        
      </Table>
</TableContainer>
    
    </Box>
  )
}
