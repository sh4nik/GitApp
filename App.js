import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import conf from './config';
import reducers from './src/reducers';
import AppNavigator from './src/navigator';

console.disableYellowBox = true;

const client = axios.create({
  baseURL: conf.gitUrl,
  responseType: 'json'
});

const store = createStore(reducers, applyMiddleware(axiosMiddleware(client), thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
