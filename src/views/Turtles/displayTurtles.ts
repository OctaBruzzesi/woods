import { Dimensions } from 'react-native'

const circlePadding = 25
const radius = (Dimensions.get('screen').width - circlePadding * 2) / 2
const yPosition = Dimensions.get('screen').height / 2
const turtleRadius = 25

const calculatePosition = (index: number, count: number) => {
  'worklet'

  const circle = Math.PI * 2
  const groupRad = circle / count
  const turtleRad = groupRad * index - Math.PI / 2

  const x = Math.cos(turtleRad) * (radius - turtleRadius) + radius
  const y = Math.sin(turtleRad) * (radius - turtleRadius) + yPosition

  return { x, y }
}

const getMiddleTurtle = (
  index: number,
  count: number,
  selected: null | number
) => {
  'worklet'

  const selectedTurtlePosition = calculatePosition(selected, count)

  // Turtle goes to the center of the river
  if (index === selected) {
    return {
      x: radius,
      y: yPosition,
    }
  }

  const currentPosition = calculatePosition(index, count)

  const animatedY =
    currentPosition.y > selectedTurtlePosition.y
      ? yPosition * 3
      : -turtleRadius * 4

  // Turtle escapes from the screen
  return {
    x: currentPosition.x,
    y: animatedY,
  }
}

export const getTurtleCircle = (
  index: number,
  count: number,
  selected: null | number
) => {
  'worklet'

  if (selected !== null) {
    try {
      return getMiddleTurtle(index, count, selected)
    } catch (e) {
      console.log('animation error', e.message)

      return { x: 0, y: 0 }
    }
  }

  const circle = Math.PI * 2
  const groupRad = circle / count
  const turtleRad = groupRad * index - Math.PI / 2

  const x = Math.cos(turtleRad) * (radius - turtleRadius) + radius
  const y = Math.sin(turtleRad) * (radius - turtleRadius) + yPosition

  return { x, y }
}
