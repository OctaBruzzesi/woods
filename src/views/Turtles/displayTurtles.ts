import { Dimensions } from 'react-native'

const circlePadding = 25
const radius = (Dimensions.get('screen').width - circlePadding * 2) / 2
const yPosition = Dimensions.get('screen').height / 2
const turtleRadius = 25

export const getTurtleCircle = (index: number, count: number) => {
  'worklet'

  const circle = Math.PI * 2
  const groupRad = circle / count
  const turtleRad = groupRad * index - Math.PI / 2

  const x = Math.cos(turtleRad) * (radius - turtleRadius) + radius
  const y = Math.sin(turtleRad) * (radius - turtleRadius) + yPosition

  return { x, y }
}
