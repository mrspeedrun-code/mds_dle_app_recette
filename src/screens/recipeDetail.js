import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, StatusBar } from 'react-native';
import { connect, useSelector } from 'react-redux'
import axios from 'axios';

// style
import { cardStyles, CardList } from '../styles/appRecipe.styles';
import { set } from 'react-native-reanimated';
import { Directions } from 'react-native-gesture-handler';

const RecipeDetail = () => {
  const recipes = useSelector(state => state.recipes)
  const ingredients = useSelector(state => state.ingredients)
  const [recipe, setRecipe] = useState('');


  useEffect(() => {
    let filteredData = recipes.recipes.filter(filter => {
      if(filter.id === ingredients.ingredients.recipe_id) setRecipe(filter)
    })
  }, []);

  return (
    <>
      <Image
        source = {{uri: recipe.image}}
        style = {{ height: 100, left: 0, right: 0 }}
      />
      <Text style = {{ fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>
        {recipe.title}
      </Text>
      <View style={{flexDirection: 'row', borderColor: '#ddd', borderWidth: 3}}>
      <FlatList
        data={ingredients.ingredients.ingredients}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RecipeDetail;