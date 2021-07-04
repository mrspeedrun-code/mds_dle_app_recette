import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AppStack from '../navigation/appstack'

// Styled Components
import { Container } from '../styles/appRecipe.styles'

export default function Main() {
  return (
    <NavigationContainer>
      <Container>
        <AppStack/>
      </Container>
    </NavigationContainer>
  );
}