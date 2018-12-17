/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login1 from "./src/screens/Login1";
import Login2 from "./src/screens/Login2";

import HomePage from "./src/screens/HomePage";
import Settings from "./src/screens/Settings";

import AddAccount from './src/screens/AddAccount';
import AddEntry from './src/screens/AddEntry';
import EditEntry from './src/screens/EditEntry';
import DeleteEntry from './src/screens/DeleteEntry';
import ChangePassword from './src/screens/ChangePassword';

const AppNavigator = createStackNavigator(
    {
      Login1Page: Login1,
      Login2Page: Login2,
      HomePage: {
        screen: HomePage,
        navigationOptions: () => ({
          header: null
        }),
      },
      SettingsPage: {
        screen: Settings,
        navigationOptions: () => ({
          header: null,
          mode: 'modal'
        })
      },
      AddAccountPage: AddAccount,
      AddEntryPage: AddEntry,
      EditEntryPage: EditEntry,
      DeleteEntryPage: DeleteEntry,
      ChangePasswordPage: ChangePassword
    },
    {
      initialRouteName: "Login1Page"
    }
);

export default createAppContainer(AppNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   welcome: {
//     fontFamily: "Roboto-Medium",
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   stuff: {
//     fontFamily: "Roboto-Regular",
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   instructions: {
//     fontFamily: "Roboto-ThinItalic",
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5
//   }
// });
