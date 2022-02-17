/* eslint-disable prettier/prettier */
import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen'
import SearchByShowScreen from './src/screens/SearchByShowScreen'
import SearchByPeopleScreen from './src/screens/SearchByPeopleScreen'

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Filmes: SearchByShowScreen,
  Personagem: SearchByPeopleScreen,
});

let AppNavigatorView = createAppContainer(TabNavigator);

const App = () =>
{
  return (
    <AppNavigatorView />
  );
};

export default App
