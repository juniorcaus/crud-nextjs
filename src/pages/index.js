import { Box, Button, Flex,  Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { InputForm } from "../components/Input";


export default function Home() {

  const [clients, setClients] = useState([])
  const [isFormOpen, setIsFormOpen] = useState(false) // const para abrir e fechar o formulario de nome e email para cadastro

  const [id, setId] = useState(null)
  const [name, setName] = useState('')    
  const [email, setEmail] = useState('')  
  
  const [errors, setErros] = useState({name: null, email: null})

  const isValidFormData = () =>  {
    if(!name) {
      setErros({name: 'Nome é requerido'})
      return false
    } 

    if(!email) {
      setErros({email: 'Email é requerido'})
      return false
    }

    if(clients.some(client => client.email === email && client._id !== id)) {
      setErros({email: "Email já cadastrado!"})
      return
    }

    setErros({})
    return true
  }


// FUNÇÃO PARA CRIAR / CADASTRAR OS DADOS DO CLIENTE COM NOEM E EMAIL
 const handleSubmitCreateClient = (e) => {
    e.preventDefault()

    if(!isValidFormData()) return
    
    setClients(clients.concat({_id: new  Date().getMilliseconds().toString(),name, email}))

    setName('') // para limpar os textos do formulário quando cadastrar o nome e email
    setEmail('')
    toggleFormState() // para ocultar o menu de cadastro, quando clicar em cadastrar
  }

  //FUNÇÃO PARA ATUALIZAR OS DADOS DO NOME E EMAIL DO CLIENTE
  const handleSubmitUpdateClient = (e) => {
    e.preventDefault()

    if(!isValidFormData()) return

    setClients(clients.map(client => client._id === id ? {name, email, _id: id} : client))

    setName('') // para limpar os textos do formulário quando cadastrar o nome e email
    setEmail('')
    setId(null)
    toggleFormState() // para ocultar o menu de cadastro, quando clicar em cadastrar
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
    setIsFormOpen(true)
  }

  const toggleFormState = () => {
    setIsFormOpen(!isFormOpen)
  }

  return (
    <Box  margin='4'  >

    <Flex color='white' justifyContent='space-between' >
        <Text color='black' fontSize='2xl' > Lista de CLientes</Text>
        <Button colorScheme='blue' onClick={toggleFormState} > {isFormOpen ? '-' : '+'} </Button>
    </Flex>

    { isFormOpen && (
                                            //  SE TIVER ID VAI PEDIR PARA FAZER UPDATE DO CADASTRO DO CLIENTE, SE NÃO VAI PEDIR PARA CRIAR UM NOVO CLIENTE 
    <VStack margin='1rem' as="form" onSubmit={id ? handleSubmitUpdateClient : handleSubmitCreateClient} >  
  
      <InputForm label="Nome" name="name" value={name} onChange={e => handleChangeName(e.target.value)} error={errors.name} />

      <InputForm label="Email" name="email" value={email} type="email" onChange={e => handleChangeEmail(e.target.value)} error={errors.email} />

      <Button fontSize='sm' alignSelf='flex-end' colorScheme='blue' type="submit" >{id? 'Atualizar' : 'Cadastrar'}</Button>
    </VStack>  
      )}

    <TableContainer>
      <Table variant='simple' margin='7'>
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
