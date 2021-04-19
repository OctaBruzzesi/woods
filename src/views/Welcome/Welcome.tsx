import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ESStyleSheet from "react-native-extended-stylesheet";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Drag")}
          style={styles.button}
        >
          <Text style={styles.text}>Drag a Tree</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Fire")}
          style={styles.button}
        >
          <Text style={styles.text}>Sit next to the Campfire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = ESStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$primary",
    padding: "$dimension4",
  },
  content: {
    paddingTop: "$dimension5",
  },
  title: {
    fontSize: 52,
    color: "$secondary",
    fontWeight: "800",
    paddingTop: 95,
  },
  titleContainer: {
    borderBottomWidth: 3,
    borderBottomColor: "$secondary",
  },
  button: {
    backgroundColor: "$secondary",
    padding: "$dimension4",
    borderRadius: "$dimension2",
  },
  text: {
    fontSize: 19,
    fontWeight: "500",
    color: "$text",
  },
});

export default Welcome;
