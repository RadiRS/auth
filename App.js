//import library
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/components/Main";

//create component
export default class App extends React.Component {
  //display component in the screen
  render() {
    return (
      <View>
        <Main />
      </View>
    );
  }
}
