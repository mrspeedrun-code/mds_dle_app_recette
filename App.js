import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import AppStack from './src/navigation/appstack'
import {Provider} from 'react-redux'
import {store} from './src/store/store'

// Styled Components
import { Container } from './src/styles/appRecipe.styles'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Container>
          <AppStack/>
        </Container>
      </NavigationContainer>
    </Provider>
  );
}
