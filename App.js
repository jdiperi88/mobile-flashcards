import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore} from 'redux'
import { Provider} from 'react-redux'
import reducer from './reducers'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import DeckList from './components/DeckList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
