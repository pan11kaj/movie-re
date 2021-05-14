import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import HomeScreen from './Screens/homeScreen';
import RecomScreen from './Screens/recommendation';
import PopularScreen from './Screens/popular';
import { createAppContainer } from 'react-navigation';
export default function App() {
  return (
    <AppContainer />
  );
}

const AppTopNavigation = createMaterialTopTabNavigator({
  recommendedmovies: {
    screen: RecomScreen, navigationOptions: { tabBarLabel: 'recommended' }
    , tabBarOption: {
      tabStyle: { backgroundColor: '#fff' },
      labelStyle:{color:'#000'},
      indicatorStyle:{backgroundColor:"#000"}
    }
  },
  popular_movies: { screen: PopularScreen, navigationOptions: { tabBarLabel: 'popular' }, 
  tabBarOption: {
    tabStyle: { backgroundColor: '#fff' },
    labelStyle:{color:'#000'},
    indicatorStyle:{backgroundColor:"#000"}}
  }
})
const AppStackNavigator = createStackNavigator({
  home: { screen: HomeScreen, navigationOptions: { headerShown: false } },
  appTopNav: {
    screen: AppTopNavigation,
    navigationOptions: { headerBackTitle: null, headerTintColor: '#fff', headerTitle: 'recommended_movie', headerStyle: { backgroundColor: '#d500f9' } }
    , headerTitleStyle:{ fontSize: RFValue(18) }
  }
},
  {
    initialRouteName: 'home'
  }
)
const AppContainer = createAppContainer(AppStackNavigator)
