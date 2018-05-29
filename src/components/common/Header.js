// Import library for making a component
import React from "react";
import { Text, View } from "react-native";

// Make a component (using Functional Component for static data)
const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// Make a style
const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
};

// Meke the compent available to other parts of the app
export { Header };
