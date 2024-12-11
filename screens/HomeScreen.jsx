import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import DetailsScreen from "./DetailsScreen";
import { useNavigation } from "@react-navigation/native";

// const navigation = useNavigation();

const HomeScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate("DetailsScreen")}
    />
  </View>
);
export default HomeScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
