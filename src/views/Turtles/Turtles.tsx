import React, { useState, useEffect, useMemo } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Animated, {
  withSpring,
  withSequence,
  withTiming,
  withRepeat,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import ESStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient'

import { getTurtleCircle } from './displayTurtles'
import { SafeAreaView } from 'react-native-safe-area-context'

const downIcon = require('../../../assets/down-arrow.png')
const upIcon = require('../../../assets/up-arrow.png')

const Turtle = ({ index, count }) => {
  const style = useAnimatedStyle(() => {
    const { x, y } = getTurtleCircle(index, count)

    return {
      transform: [
        {
          translateX: withSpring(x),
        },
        {
          translateY: withRepeat(
            withSequence(
              // some randomness in the motion
              withTiming(y - 5, { duration: 1500 - index * 30 }),
              withTiming(y + 5, { duration: 1500 - index * 30 })
            ),
            0,
            true
          ),
        },
        {
          scaleY: 1.5,
        },
      ],
    }
  })

  return <Animated.View style={[styles.turtle, style]} />
}

export const Turtles = () => {
  const [count, setCount] = useState(1)

  const turtles = useMemo(() => new Array(count).fill('turtle'), [count])

  const down = () => {
    setCount((prevValue) => (prevValue === 1 ? prevValue : prevValue - 1))
  }

  const up = () => {
    setCount((prevValue) => (prevValue === 10 ? prevValue : prevValue + 1))
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.values}>
          <TouchableOpacity onPress={down} style={styles.valueModifier}>
            <Image
              resizeMode="contain"
              style={styles.valueIcon}
              source={downIcon}
            />
          </TouchableOpacity>
          <View style={styles.valueBox}>
            <Text style={styles.valueText}>{count}</Text>
          </View>
          <TouchableOpacity onPress={up} style={styles.valueModifier}>
            <Image
              resizeMode="contain"
              style={styles.valueIcon}
              source={upIcon}
            />
          </TouchableOpacity>
        </View>
        {turtles.map((value, index) => (
          <Turtle key={`${value}-${index}`} index={index} count={count} />
        ))}
      </SafeAreaView>
      <LinearGradient
        colors={['rgba(37, 153, 207, 1)', 'rgba(15, 64, 169, 1)']}
        style={styles.river}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },
  turtle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    position: 'absolute',
    backgroundColor: '#94BB5A',
  },
  river: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  },
  values: {
    gap: 30,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  valueModifier: {
    width: 50,
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 12,
    justifyContent: 'center',
    padding: 12,
  },
  valueModifierText: {
    color: 'white',
    textAlign: 'center',
  },
  valueIcon: {
    width: '100%',
    tintColor: '#4589AD',
  },
  valueBox: {
    height: 50,
    width: 100,
    borderRadius: 12,
    justifyContent: 'center',
    backgroundColor: 'rgba(166, 219, 105, 0.9)',
  },
  valueText: {
    textAlign: 'center',
    color: 'white',
  },
})
