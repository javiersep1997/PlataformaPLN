// Extraer las entidades y las menciones de estas dentro de los comentarios
export const entitiesProcessing = (entities) => {
  // Filtro de repetidas
  entities = entitiesRepeated(entities)
  // Filtro por las condiciones
  entities = filterEntities(entities)

  return {
    entities: entities,
  }
}

// Limpia las entidades que esten repetidas y deja solo la que tenga mayor salience entre las repetidas
export const entitiesRepeated = (entities) => {
  for (let i = 0; i < entities.length; i++) {
    let mayorEntidad = entities[i]
    for (let j = 0; j < entities.length; j++) {
      if (entities[i].name === entities[j].name && i !== j) {
        if (entities[j].salience > mayorEntidad.salience) {
          //Reemplaza la entidad con mayor salience
          mayorEntidad = entities[j]
        }
        // Agrega las menciones que tenga al total
        mayorEntidad.mentions += entities[j].mentions
        //Quita la entidad que ya comparo
        entities.splice(j, 1)
      }
    }
  }
  return entities
}

// Dado una lista de entidades devuelve la misma lista filtradas por ciertas condiciones
/* 
  - Eliminar entidades con 3 o menos caracteres
  - Eliminar entidades con 11 o más caracteres
*/
export const filterEntities = (entities) => {
  const entitiesFiltered = entities
    .filter((d) => d.name.length > 3)
    .filter((d) => d.name.length < 11)
  return entitiesFiltered
}
