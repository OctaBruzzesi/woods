import React, { useEffect } from "react";
import { Text, View, useWindowDimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useWorkletCallback,
  withSpring,
  withRepeat,
  withTiming,
  withDelay,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import ESStyleSheet from "react-native-extended-stylesheet";

const Campfire = () => {
  const fireRotation = useSharedValue(43);
  const fireScale = useSharedValue(1);

  useEffect(() => {
    fireScale.value = withRepeat(withTiming(1.2, { duration: 3000 }), -1, true);
    fireRotation.value = withRepeat(
      withTiming(47, { duration: 900 }),
      -1,
      true
    );
  }, []);

  const fire1Animated = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${fireRotation.value}deg` },
        { scale: fireScale.value },
        { translateY: -45 },
        { translateX: -45 },
      ],
    };
  });

  const fire2Animated = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${fireRotation.value}deg` },
        { scale: fireScale.value },
        { translateY: -90 },
        { translateX: -90 },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[fire1Animated, styles.fire1]} />
      <Animated.View style={[fire2Animated, styles.fire2]} />
      <View style={styles.wood1} />
      <View style={styles.wood2} />
      <View style={styles.wood3} />
      <View style={styles.wood4} />
      <View style={styles.wood5} />
    </View>
  );
};

const styles = ESStyleSheet.create({
  container: {
    backgroundColor: "$primary",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "$dimension4",
  },
  fire1: {
    backgroundColor: "$fireYellow",
    position: "absolute",
    zIndex: 3,
    width: 50,
    height: 50,
  },
  fire2: {
    position: "absolute",
    backgroundColor: "$fireOrange",
    width: 150,
    height: 150,
  },
  wood1: {
    backgroundColor: "$wood",
    position: "absolute",
    transform: [{ rotate: "30deg" }, { translateY: 30 }],
    zIndex: 4,
    width: 20,
    height: 75,
  },
  wood2: {
    backgroundColor: "$wood",
    position: "absolute",
    transform: [{ rotate: "-30deg" }, { translateY: 30 }],
    zIndex: 4,
    width: 20,
    height: 75,
  },
  wood3: {
    backgroundColor: "$wood",
    position: "absolute",
    transform: [{ translateY: 30 }],
    zIndex: 4,
    width: 20,
    height: 75,
  },
  wood4: {
    backgroundColor: "$wood",
    zIndex: 4,
    position: "absolute",
    transform: [{ rotate: "61deg" }, { translateY: 30 }],
    width: 20,
    height: 75,
  },
  wood5: {
    backgroundColor: "$wood",
    zIndex: 4,
    position: "absolute",
    transform: [{ rotate: "-61deg" }, { translateY: 30 }],
    width: 20,
    height: 75,
  },
});

export default Campfire;
