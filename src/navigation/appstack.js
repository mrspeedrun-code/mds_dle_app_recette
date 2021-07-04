import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { RecipeScreen } from '../screens';
import recipeDetail from '../screens/recipeDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={RecipeScreen} />
      <Stack.Screen name="Details" component={recipeDetail} />
    </Stack.Navigator>
  )
}

export default App;