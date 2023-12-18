import { MdPlace } from 'react-icons/md'
import { Link } from 'react-router-dom'

import {
  Box,
  Text,
  Stack,
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
} from '@chakra-ui/react'

import { PropertyCardProps } from '../../interfaces/property'

const PropertyCard = ({
  id,
  title,
  location,
  price,
  photo,
}: PropertyCardProps) => {
  const bgColor = useColorModeValue(
    'refine.header.bg.light',
    'refine.header.bg.dark'
  )

  return (
    <Card
      /* component={Link} */
      /* to={`/properties/show/${id}`} */
      sx={{
        maxWidth: '330px',
        padding: '10px',
        '&:hover': {
          boxShadow: '0 22px 45px 2px rgba(176, 176, 176, 0.1)',
        },
        cursor: 'pointer',
      }}
      /* elevation={0} */
    >
      <CardHeader
        /* component="img" */
        width="100%"
        height={210}
        /* image={photo} */
        /* alt="card image" */
        sx={{ borderRadius: '10px' }}
      />
      <CardBody
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '10px',
          paddingX: '5px',
        }}
      >
        <Stack direction="column" gap={1}>
          <Text fontSize={16} fontWeight={500} color="#11142d">
            {title}
          </Text>
          <Stack direction="row" gap={0.5} alignItems="flex-start">
            <MdPlace
            /* sx={{
                fontSize: 18,
                color: '#11142d',
                marginTop: 0.5,
              }} */
            />
            <Text fontSize={14} color="#808191">
              {location}
            </Text>
          </Stack>
        </Stack>
        <Box
          px={1.5}
          py={0.5}
          borderRadius={1}
          bg={bgColor}
          height="fit-content"
        >
          <Text fontSize={12} fontWeight={600} color="#475be8">
            ${price}
          </Text>
        </Box>
      </CardBody>
    </Card>
  )
}

export default PropertyCard
