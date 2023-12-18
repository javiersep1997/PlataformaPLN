import { useState, useEffect } from 'react'
import { useSurveyStore } from '../../store/survey'
import { ResultNLP } from '../../interfaces/survey'
import {
  Text,
  Box,
  Button,
  Stack,
  Card,
  CardBody,
  SimpleGrid,
  Image,
} from '@chakra-ui/react'
import 'chart.js/auto'

import positive from './img/positive.svg'
import neutral from './img/neutral.svg'
import negative from './img/negative.svg'

import Forms from './Forms'
import Results from './Results'
import FormEntities from './FormEntities'

import CloudChart from '../../components/charts/CloudChart'
import { useCloudStore } from '../../store/cloud'

const Emoji = ({ sentiment }: { sentiment: number }) => {
  if (sentiment === 1) {
    return (
      <Image
        boxSize="300"
        ml={200}
        objectFit="cover"
        src={positive}
        className="emoji"
      />
    )
  }
  if (sentiment === 0) {
    return (
      <Image
        boxSize="300"
        ml={200}
        objectFit="cover"
        src={neutral}
        className="emoji"
      />
    )
  }

  return (
    <Image
      boxSize="300"
      ml={200}
      objectFit="cover"
      src={negative}
      className="emoji"
    />
  )
}

const NLP = (data: ResultNLP) => {
  let resultado = 0
  data.polarity === 2
    ? (resultado = 1)
    : data.polarity === 1
    ? (resultado = 0)
    : (resultado = -1)
  return resultado
}

const Question: React.FC = () => {
  const [sentiment, setSentiment] = useState<number>(0)
  const cleanResults = useSurveyStore((state) => state.cleanResults)

  const { resultados } = useSurveyStore()
  const { cloudData } = useCloudStore()

  /* console.log(JSON.stringify(cloudData, null, 2)) */

  useEffect(() => {
    setSentiment(0)
    if (resultados?.formulario4) {
      const sentiment = NLP(resultados.formulario4.result)
      setSentiment(sentiment)
    }
  }, [resultados.formulario4])

  return (
    <Box>
      <Text fontSize={30} fontWeight={700}>
        Prueba de API
      </Text>
      <Forms />
      <Results />

      <Stack
        mt="20px"
        mb={4}
        width="100%"
        direction={{ base: 'column', lg: 'row' }}
        gap={2}
      >
        <FormEntities />
        {/* {resultados?.formulario4 && <Emoji sentiment={sentiment} />} */}
      </Stack>
      <Text as="b" fontSize="md">
        Entidades Resultantes :
      </Text>
      {resultados.formulario2 && (
        <div>
          <SimpleGrid
            mt={4}
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            {resultados.formulario2.result.entities?.map((entity) => {
              return (
                <Card key={entity.name}>
                  <CardBody>
                    <div className="flex-1">
                      Nombre:{' '}
                      <Text as="b" fontSize="md">
                        {entity.name}
                      </Text>
                    </div>
                    <Text className="flex-1">Tipo: {entity.type}</Text>
                    <Text className="flex-1">
                      Importancia: {entity.salience}
                    </Text>
                    <Text className="flex-1">
                      N° Menciones:
                      <Text as="b" fontSize="md">
                        {entity.mentions}
                      </Text>{' '}
                    </Text>
                  </CardBody>
                </Card>
              )
            })}
          </SimpleGrid>

          {resultados.formulario2.result.entities && (
            <Stack
              mt="20px"
              width="100%"
              direction={{ base: 'column', lg: 'row' }}
              gap={2}
              justifyContent={'center'}
            >
              <CloudChart chartData={cloudData} />
            </Stack>
          )}
        </div>
      )}
      <br />
      <Button
        mt={4}
        colorScheme="teal"
        type="button"
        onClick={() => cleanResults()}
      >
        Limpiar Respuestas
      </Button>
    </Box>
  )
}
export default Question
