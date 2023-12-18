import { Stack } from '@chakra-ui/react'
import { SubmitHandler } from 'react-hook-form'
import Form from './Form'
import { useSurveyStore } from '../../store/survey'
import { useMutation } from '@tanstack/react-query'

import {
  formulario1Request,
  formulario3Request,
  formulario4Request,
} from '../../api/survey'

type Inputs = {
  answer: string
}

const Forms: React.FC = () => {
  const { setFormulario1, setFormulario3, setFormulario4 } = useSurveyStore()

  const { mutate: enviarFormulario1 } = useMutation(
    (data: string) => formulario1Request(data),
    {
      onSuccess: (data) => {
        setFormulario1(data)
      },
    }
  )
  const { mutate: enviarFormulario3 } = useMutation(
    (data: string) => formulario3Request(data),
    {
      onSuccess: (data) => {
        setFormulario3(data)
      },
    }
  )
  const { mutate: enviarFormulario4 } = useMutation(
    (data: string) => formulario4Request(data),
    {
      onSuccess: (data) => {
        setFormulario4(data)
      },
    }
  )
  const onSubmitFormulario1: SubmitHandler<Inputs> = (data: {
    answer: string
  }) => {
    enviarFormulario1(data.answer)
  }

  const onSubmitFormulario3: SubmitHandler<Inputs> = (data: {
    answer: string
  }) => {
    enviarFormulario3(data.answer)
  }

  const onSubmitFormulario4: SubmitHandler<Inputs> = (data: {
    answer: string
  }) => {
    enviarFormulario4(data.answer)
  }
  return (
    <Stack
      width="100%"
      direction={{ base: 'column', lg: 'row' }}
      // gap={4}
      spacing={8}
      align="flex-start"
      marginTop={'20px'}
    >
      <Form onSubmit={onSubmitFormulario1} tittle={'Google NLP'} />
      <Form onSubmit={onSubmitFormulario3} tittle={'Modelo Entrenado'} />
      <Form onSubmit={onSubmitFormulario4} tittle={'Solución Propuesta'} />
    </Stack>
  )
}

export default Forms
