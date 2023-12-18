import { IResourceComponentsProps } from '@refinedev/core'
import { ChakraUIEditInferencer } from '@refinedev/inferencer/chakra-ui'

export const BlogPostEdit: React.FC<IResourceComponentsProps> = () => {
  return (
    <ChakraUIEditInferencer
      fieldTransformer={(field) => {
        if (['locale', 'updatedAt', 'publishedAt'].includes(field.key)) {
          return false
        }

        return field
      }}
    />
  )
}
