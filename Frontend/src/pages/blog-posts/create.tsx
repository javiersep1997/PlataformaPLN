import { IResourceComponentsProps } from '@refinedev/core'
import { ChakraUICreateInferencer } from '@refinedev/inferencer/chakra-ui'

export const BlogPostCreate: React.FC<IResourceComponentsProps> = () => {
  return (
    <ChakraUICreateInferencer
      fieldTransformer={(field) => {
        if (['locale', 'updatedAt', 'publishedAt'].includes(field.key)) {
          return false
        }

        return field
      }}
    />
  )
}
