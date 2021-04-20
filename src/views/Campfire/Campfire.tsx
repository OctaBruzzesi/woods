import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  withRepeat,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import ESStyleSheet from "react-native-extended-stylesheet";
import { LinearGradient } from "expo-linear-gradient";

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

  const fireLightAnimated = useAnimatedStyle(() => {
    return {
      transform: [{ scale: fireScale.value }, { translateY: -75 }],
    };
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.3)", "transparent"]}
        style={styles.terrain}
      />
      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.3)"]}
        style={styles.stratophere}
      />
      <View
        // colors={["transparent", "rgba(0, 0, 0, 0.3)"]}
        style={styles.mountain}
      />
      <Animated.View style={[fireLightAnimated, styles.fireLight]} />
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  fireLight: {
    position: "absolute",
    backgroundColor: "$black",
    zIndex: 4,
    opacity: 0.1,
    borderRadius: 75,
    width: 150,
    height: 150,
  },
  stratophere: {
    position: "absolute",
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    height: 450,
    backgroundColor: "#67A9F5",
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
  terrain: {
    position: "absolute",
    flex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: 530,
    backgroundColor: "$primary",
  },
  mountain: {
    position: "absolute",
    borderRightWidth: 50,
    borderLeftWidth: 50,
    borderBottomWidth: 59,
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    borderBottomColor: "$text",
    left: 50,
    bottom: 445,
    width: 0,
    height: 0,
  },
});

export default Campfire;
