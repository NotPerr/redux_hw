import React from "react";
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from "./src/redux/store";
import HomeScreen from "./src/screens/HomeScreen";



const App = () => {
  return (
    <Provider store = {store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;