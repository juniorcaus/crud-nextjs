import { FormControl, FormLabel, Input } from "@chakra-ui/react"


export const InputForm = ({ label, name, ...res }) => {
    return(
        <FormControl  margin='1rem' >
        <FormLabel> {label} </FormLabel>
          <Input type='email' name={name} id={name} {...res} />
      </FormControl>
    )
}