import React from "react";
import { StyleSheet, View, Text } from "react-native";
const DetailsScreen = () => (
  <View style={styles.screen}>
    <Text>Details Screen</Text>
  </View>
);
export default DetailsScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
