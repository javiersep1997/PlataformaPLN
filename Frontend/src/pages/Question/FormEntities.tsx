import { useForm, SubmitHandler } from 'react-hook-form'
import {
  Text,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Textarea,
} from '@chakra-ui/react'

import { useSurveyStore } from '../../store/survey'
import { useCloudStore } from '../../store/cloud'
import { useMutation } from '@tanstack/react-query'
import { formulario2Request } from '../../api/survey'
import { CloudRequest } from '../../api/cloud'

export interface Inputs {
  answer: string
}

const FormNlp: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>()

  const { setFormulario2 } = useSurveyStore()
  const { setCloudData } = useCloudStore()

  const { mutate: enviarFormulario } = useMutation(
    (data: string) => formulario2Request(data),
    {
      onSuccess: (data) => {
        setFormulario2(data)
      },
    }
  )

  const { mutate: enviarFormularioCloud } = useMutation(
    (data: string) => CloudRequest(data),
    {
      onSuccess: (data) => {
        setCloudData(data)
      },
    }
  )

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Send both requests
    enviarFormulario(data.answer)
    enviarFormularioCloud(data.answer)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h3" size="lg">
        Entidades Google NLP
      </Heading>
      <FormControl isRequired id="answerApiGoogle">
        <FormLabel>Texto de prueba</FormLabel>
        <Textarea
          size="lg"
          height={200}
          width={400}
          {...register('answer', { required: 'Este campo es requerido' })}
          placeholder="Ingrese el texto"
        />
        {errors.answer && <Text>{errors.answer.message}</Text>}
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Enviar
      </Button>
    </form>
  )
}

export default FormNlp
