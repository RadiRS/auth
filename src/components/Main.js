import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header } from "./common";
import LoginForm from "./LoginForm"

class Main extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBMw5Sp3rbrL_7WIkP1A_81KLo-mAEEHlc",
      authDomain: "auth-c1b77.firebaseapp.com",
      databaseURL: "https://auth-c1b77.firebaseio.com",
      projectId: "auth-c1b77",
      storageBucket: "auth-c1b77.appspot.com",
      messagingSenderId: "531749549647"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authantication" />
        <LoginForm />
      </View>
    );
  }
}

export default Main;
