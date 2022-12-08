import { FormControl, FormLabel, FormErrorMessage, Input } from "@chakra-ui/react"


export const InputForm = ({ label, name, error = null, ...res }) => {
    return(
        <FormControl  margin='1rem' isInvalid={!!error} >
        <FormLabel> {label} </FormLabel>
          <Input  name={name} id={name} {...res} />

          {!!error && <FormErrorMessage> {error} </FormErrorMessage>  }
      </FormControl>
    )
}