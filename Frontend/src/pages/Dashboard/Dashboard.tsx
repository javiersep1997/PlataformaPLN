// Hook para acceder a un recurso en especifico, blog-posts, categories, etc
import { useList } from '@refinedev/core'
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
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Link,
} from '@chakra-ui/react'
import 'chart.js/auto'

import RadarChart from '../../components/charts/RadarChart'
import CloudChart from '../../components/charts/CloudChart'
import PieChart from '../../components/charts/PieChart'
import { useState } from 'react'
import {
  dataRadar,
  dataPolaritySeattle,
  dataPolarityBoston,
  dataPolarityPositive,
  dataPolarityNegative,
} from '../../data/dataRadar2'
import { cloudSeattle, cloudBoston } from '../../data/dataCloud2'

const Dashboard: React.FC = () => {
  const [reviewData, setReviewData] = useState({
    ...dataRadar,
  })

  const [cloudDataSeattle, setCloudDataSeattle] = useState({
    ...cloudSeattle,
  })
  /* console.log(JSON.stringify(cloudDataSeattle, null, 2)) */
  /* console.log(cloudDataSeattle) */
  const [cloudDataBoston, setCloudDataBoston] = useState({
    ...cloudBoston,
  })
  // Pie charts
  const [piePolaritySeattle, setPiePolaritySeattle] = useState({
    ...dataPolaritySeattle,
  })
  const [piePolarityBoston, setPiePolarityBoston] = useState({
    ...dataPolarityBoston,
  })

  const [piePolarityPositive, setPiePolarityPositive] = useState({
    ...dataPolarityPositive,
  })
  const [piePolarityNegative, setPiePolarityNegative] = useState({
    ...dataPolarityNegative,
  })

  return (
    <Box>
      <Text fontSize={30} fontWeight={700}>
        Muestras de Conjunto de datos
      </Text>

      <Stack
        mt="20px"
        width="100%"
        direction={{ base: 'column', lg: 'row' }}
        gap={2}
      >
        <RadarChart chartData={reviewData} />

        <Box>
          <Text as="b" fontSize={20}>
            Contexto
          </Text>
          <Text fontSize={16}>
            Desde 2008, los huéspedes y anfitriones utilizan Airbnb hospedarse
            de una manera más exclusiva y personalizada. Como parte de la
            iniciativa Airbnb Inside, se tiene las reseñas realizadas por los
            usuarios en las estancias de Seattle y Boston.
          </Text>
          <Text as="b" fontSize={18}>
            <br />
            Fuente
          </Text>
          <UnorderedList marginLeft={'30px'}>
            <ListItem>
              <Link
                href="https://www.kaggle.com/datasets/airbnb/seattle"
                isExternal
              >
                Seattle Dataset
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.kaggle.com/datasets/airbnb/boston"
                isExternal
              >
                Boston Dataset
              </Link>
            </ListItem>
          </UnorderedList>

          <Text as="b" fontSize={18}>
            <br />
            Contenido
          </Text>
          <Text fontSize={16}>
            Como parte de la muestra de utilidad de la herramientas se ha
            realizado lo siguiente:
          </Text>
          <UnorderedList marginLeft={'30px'}>
            <ListItem>
              Mostrar en un grafico del tipo radar la distribución de reseñas
              realizadas separandolas, desde claramente negativas hasta
              claramente positivas.
            </ListItem>
            <ListItem>
              Mostrar las palabras más utilizadas dentro de las reseñas,
              mediante un grafico de nube de palabras
            </ListItem>
            <ListItem>
              Mostrar distintas metricas de los resultados, como los resultados
              positivos y negativos a traves de distintos graficos
            </ListItem>
          </UnorderedList>
          <Text fontSize={16}>
            <br />
            El uso de gráficos de araña y nubes de palabras son técnicas
            populares para visualizar y resumir información en diferentes
            contextos, ademas de ser muy intuitivos para el usuario.
          </Text>
        </Box>
      </Stack>
      <Stack
        mt="20px"
        width="100%"
        direction={{ base: 'column', lg: 'row' }}
        gap={2}
        align={'flex-start'}
      >
        <Stack>
          <Text as="b" fontSize={18}>
            <br />
            Gráfico de Araña (Radar Chart):
          </Text>
          <OrderedList>
            <ListItem>
              <Text as="b">Comparación de múltiples variables: </Text>
              El gráfico de araña es especialmente útil cuando queremos comparar
              múltiples variables para varios elementos o categorías. Cada eje
              representa una variable y el área dentro del polígono formado por
              los ejes indica el valor relativo de cada variable.
            </ListItem>
            <ListItem>
              <Text as="b">Identificar patrones y tendencias: </Text>
              La visualización en forma de polígonos facilita la identificación
              de patrones y tendencias entre diferentes categorías. Puedes
              reconocer rápidamente qué categoría tiene valores más altos o más
              bajos en ciertas variables.
            </ListItem>
            <ListItem>
              <Text as="b">Resaltar fortalezas y debilidades: </Text>
              Los gráficos de araña permiten identificar las fortalezas y
              debilidades de diferentes elementos en función de sus valores en
              las variables. Esto es útil para tomar decisiones informadas en
              diversas áreas, como por ejemplo, comparar diferentes productos o
              equipos en un análisis de rendimiento.
            </ListItem>
          </OrderedList>
        </Stack>
        {/*  */}
        <Stack>
          <Text as="b" fontSize={18}>
            <br />
            Nube de Palabras (Word Cloud):
          </Text>
          <OrderedList>
            <ListItem>
              <Text as="b">Visualización de términos más relevantes: </Text>
              Las nubes de palabras son excelentes para resumir grandes
              cantidades de texto y visualizar rápidamente los términos más
              relevantes y frecuentes. Los términos que aparecen más veces en el
              texto son representados con mayor tamaño en la nube de palabras,
              lo que permite identificar patrones de forma intuitiva.
            </ListItem>
            <ListItem>
              <Text as="b">Análisis de sentimiento y temas clave: </Text>
              Las nubes de palabras son muy útiles en análisis de sentimiento,
              donde las palabras más frecuentes y destacadas pueden revelar cómo
              se sienten las personas hacia un tema específico. También se
              pueden utilizar para identificar temas clave en un conjunto de
              texto, como palabras asociadas a un tema central.
            </ListItem>
            <ListItem>
              <Text as="b">Comunicación efectiva de conceptos complejos: </Text>
              Las nubes de palabras pueden simplificar la comunicación de
              conceptos complejos, mostrando de manera visual y concisa los
              términos más importantes. Son ampliamente utilizadas en
              presentaciones, informes y análisis para hacer que la información
              sea más accesible y comprensible
            </ListItem>
          </OrderedList>
        </Stack>
      </Stack>

      <Text
        mt={'20px'}
        fontSize={30}
        fontWeight={700}
        align={'center'}
        width="70%"
      >
        Palabras más usadas en la encuesta docente
      </Text>
      <Stack
        mt="20px"
        width="100%"
        direction={{ base: 'column', lg: 'row' }}
        gap={2}
        align={'flex-start'}
      >
        <CloudChart chartData={cloudDataSeattle} />
        <CloudChart chartData={cloudDataBoston} />
      </Stack>
      <Stack
        mt="20px"
        width="100%"
        direction={{ base: 'column', lg: 'row' }}
        gap={2}
        align={'center'}
        justifyContent={'space-between'}
      >
        <PieChart chartData={piePolaritySeattle} title={'% Reseñas Seattle'} />
        <PieChart chartData={piePolarityBoston} title={'% Reseñas Boston'} />
        <PieChart
          chartData={piePolarityPositive}
          title={'Proporcion reseñas positivas'}
        />
        <PieChart
          chartData={piePolarityNegative}
          title={'Proporcion reseñas negativas'}
        />
      </Stack>
    </Box>
  )
}
export default Dashboard
