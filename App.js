import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {createStore} from 'redux'
import { Provider} from 'react-redux'
import reducer from './reducers'
import { blue, white } from './utils/colors'
import { createBottomTabNavigator,TabNavigator, createStackNavigator, DrawerNavigator } from 'react-navigation'
import { FontAwesome, Ionicons, Entypo } from '@expo/vector-icons'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import middleware from './middleware/index';
import SingleDeck from './components/SingleDeck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DeckList',
      tabBarIcon: ({ tintColor }) => <Entypo name='archive' size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NewDeck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? blue : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : blue,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
  },
  SingleDeck: {
    screen: SingleDeck,
    navigationOptions: {
      headerTintColor: blue,
      headerStyle: {
        backgroundColor: white
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: blue,
      headerStyle: {
        backgroundColor: white
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: blue,
      headerStyle: {
        backgroundColor: white
      }
    }
  },
})


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)} >
        <View style={{flex:1}}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

