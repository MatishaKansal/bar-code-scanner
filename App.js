import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import ScanScreen from "./Screens/ScanScreen";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <ScanScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
