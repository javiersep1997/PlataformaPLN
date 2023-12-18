//Funcion procesar JSON y obtener los resultados

export const getPolarity = (response, tag) => {
  let polaridad = ''
  let scoreText = response.scoreText
  let magnitudeText = response.magnitudeText
  //con operador ternario
  scoreText >= 0.4 && magnitudeText >= 0.8 && tag === 2
    ? (polaridad = 'Positivo')
    : scoreText > 0.2 &&
      magnitudeText >= 0.0 &&
      magnitudeText < 2.0 &&
      (tag === 0 || tag === 1)
    ? (polaridad = 'Positivo')
    : scoreText > -0.2 && scoreText < 0.2 && tag === 1
    ? (polaridad = 'Neutro')
    : scoreText <= -0.2 &&
      magnitudeText < 2.0 &&
      magnitudeText >= 0.1 &&
      tag === 0
    ? (polaridad = 'Negativo')
    : scoreText <= -0.4 && magnitudeText >= 2.0 && tag === 0
    ? (polaridad = 'Negativo')
    : (polaridad = 'Neutro')

  return polaridad
}
