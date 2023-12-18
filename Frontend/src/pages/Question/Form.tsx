import { useForm, SubmitHandler } from 'react-hook-form'
import {
  Text,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Textarea,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

type Inputs = {
  answer: string
}
type FormProps = {
  onSubmit: SubmitHandler<Inputs>
  tittle?: string
}
const Form: React.FC<FormProps> = ({ onSubmit, tittle }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h2" size="md">
        {tittle}
      </Heading>
      <FormControl isRequired id="answerApiGoogle">
        <FormLabel>Texto de prueba</FormLabel>
        <Textarea
          size="lg"
          height={200}
          width={400}
          {...register('answer', { required: 'Este campo es requerido' })}
          placeholder={`Ingrese el texto de Prueba`}
        />

        {errors.answer && <Text color="red.500">{errors.answer.message}</Text>}
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Enviar
      </Button>
    </form>
  )
}
export default Form

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  tittle: PropTypes.string,
}
