import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { RecipeScreen } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const App = props => {
    return (
        <Navigator>
          <Screen name="recipe" component={RecipeScreen} />
        </Navigator>
    )
}

export default App;