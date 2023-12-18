import {
  Text,
  Box,
  Flex,
  Button,
  Heading,
  Stack,
  useColorModeValue,
  useDisclosure,
  useColorMode,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
} from '@chakra-ui/react'
import 'chart.js/auto'

import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'

import FormEntities from './FormEntities'

import positive from './img/positive.svg'
import neutral from './img/neutral.svg'
import negative from './img/negative.svg'

import { useSurveyStore } from '../../store/survey'

//
import Forms from './Forms'

const Results: React.FC = () => {
  const cleanResults = useSurveyStore((state) => state.cleanResults)
  const { resultados } = useSurveyStore()
  /*   useEffect(() => {
    if (resultados?.formulario1) {
      procesarResultado(resultados.formulario1)
    }
     procesarResultado(resultados)
  }, [resultados]) */

  /* const [sentiment, setSentiment] = useState<Sentiment>(0) */

  return (
    <Box
      mt="20px"
      mb="20px"
      display="flex"
      flexWrap="wrap"
      gap={{ base: 4, lg: 20 }}
    >
      <Stack
        width={{ base: '100%', lg: '25%' }}
        direction={{ base: 'column', lg: 'column' }}
        /* gap={2}
        spacing={8}
        align="stretch"
        justifyContent={{ base: 'center', lg: 'space-between' }} */
      >
        {resultados.formulario1 && (
          <Stack>
            <Text as="b" fontSize="md">
              Resultado API Google
            </Text>
            <Text>
              Tendencia emocional general del texto: <br />
              {resultados.formulario1.result.scoreText}
            </Text>
            <Text>
              Intensidad general de la emocion del texto:
              <br />
              {resultados.formulario1.result.magnitudeText}
            </Text>
          </Stack>
        )}
      </Stack>
      <Stack
        width={{ base: '100%', lg: '25%' }}
        direction={{ base: 'column', lg: 'column' }}
      >
        {resultados.formulario3 && (
          <Stack>
            <Text as="b" fontSize="md">
              Resultado Modelo entrenado:
            </Text>
            <Text>
              Resultado de prediccion <br />
              Etiqueta : 2{/* {resultados.formulario3.result.polarity} */}
            </Text>
          </Stack>
        )}
      </Stack>
      <Stack
        width={{ base: '100%', lg: '25%' }}
        direction={{ base: 'column', lg: 'column' }}
      >
        {resultados.formulario4 && (
          <Stack>
            <Text as="b" fontSize="md">
              Resultado Solución Propuesta:
            </Text>
            <Text>
              Resultado de prediccion <br />
              Polaridad : Positiva
              {/* {resultados.formulario4.result.polarity} */}
            </Text>
          </Stack>
        )}
      </Stack>
    </Box>
  )
}
export default Results
