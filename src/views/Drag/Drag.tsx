import React from "react";
import { Text, View, useWindowDimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useWorkletCallback,
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import ESStyleSheet from "react-native-extended-stylesheet";

type Context = {
  offsetX: number;
  offsetY: number;
};

const Drag = () => {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);

  const getInertia = useWorkletCallback((velocity: number) => {
    return velocity * 0.1;
  });

  const handleGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context: Context) => {
      context.offsetX = translationX.value;
      context.offsetY = translationY.value;
    },
    onActive: (event, context) => {
      translationX.value = event.translationX + context.offsetX;
      translationY.value = event.translationY + context.offsetY;
    },
    onEnd: (event, context) => {
      translationX.value = withSpring(
        event.translationX + context.offsetX + getInertia(event.velocityX),
        {
          velocity: event.velocityX,
        }
      );
      translationY.value = withSpring(
        event.translationY + context.offsetY + getInertia(event.velocityY),
        {
          velocity: event.velocityY,
        }
      );
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translationX.value },
        { translateY: translationY.value },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={handleGestureEvent}>
        <Animated.View style={[style, styles.tree]}>
          <View style={styles.triangle1} />
          <View style={styles.triangle2} />
          <View style={styles.triangle3} />
          <View style={styles.wood} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = ESStyleSheet.create({
  container: {
    backgroundColor: "$primary",
    flex: 1,
    justifyContent: "center",
    padding: "$dimension4",
  },
  tree: {
    height: 160,
    width: 180,
  },
  triangle1: {
    borderLeftWidth: 90,
    borderRightWidth: 90,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "green",
    zIndex: 3,
    transform: [{ translateY: 85 }],
    width: 0,
    height: 0,
  },
  triangle2: {
    borderLeftWidth: 90,
    borderRightWidth: 90,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "green",
    zIndex: 3,
    transform: [{ translateY: 40 }],
    width: 0,
    height: 0,
  },
  triangle3: {
    borderLeftWidth: 90,
    borderRightWidth: 90,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "green",
    zIndex: 3,
    transform: [{ translateY: 9 }],
    width: 0,
    height: 0,
  },
  text: {
    textAlign: "center",
  },
  wood: {
    backgroundColor: "$wood",
    alignSelf: "center",
    width: 20,
    height: 75,
  },
});

export default Drag;
