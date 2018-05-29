//import all library needed
import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header } from "./common";
import LoginForm from "./LoginForm";

//create component
class Main extends Component {
  //create state for checking login or not
  state = { loggedIn: false };
  //method life cycle
  componentWillMount() {
    //firebase web setup
    firebase.initializeApp({
      apiKey: "AIzaSyBMw5Sp3rbrL_7WIkP1A_81KLo-mAEEHlc",
      authDomain: "auth-c1b77.firebaseapp.com",
      databaseURL: "https://auth-c1b77.firebaseio.com",
      projectId: "auth-c1b77",
      storageBucket: "auth-c1b77.appspot.com",
      messagingSenderId: "531749549647"
    });
    //firebase checking user log in or log out
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  //display component in the screen
  render() {
    return (
      <View>
        <Header headerText="Authantication" />
        <LoginForm />
      </View>
    );
  }
}

//export component to be acces in other class
export default Main;
