//import all library needed
import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
import { Header, Button, CardSection, Spinner } from "./common";
import LoginForm from "./LoginForm";

//create component
class Main extends Component {
  //create state for checking login or not
  state = { loggedIn: null };
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

  onButtonPress() {}

  //renderConten
  renderContent() {
    //check if user login
    switch (this.state.loggedIn) {
      //user log in show log out button
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
        break;
      //if user not log in show Login Form
      case false:
        return <LoginForm />;
        break;
      //default display spinner
      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        );
        break;
    }
  }

  //display component in the screen
  render() {
    return (
      <View>
        <Header headerText="Authantication" />
        {this.renderContent()}
      </View>
    );
  }
}

//export component to be acces in other class
export default Main;
