import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect, useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { getRecipes } from '../redux/recipes/actionRecipes'
import { getRecipeIngredientsById } from '../redux/ingredients/actionIngredients';

// style
import { cardStyles, CardList } from '../styles/appRecipe.styles';

const RecipeList = ({ navigation, apiData, apiRecipes }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    apiRecipes()
  }, [apiRecipes]);

  const resolveNavigation = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        navigation.navigate('Details')
      }, 250);
    })
  }

  const asyncDispatchRecipe = async (id) =>{
    dispatch(getRecipeIngredientsById(id))

    await resolveNavigation()
  }

  const displayApiData = apiData.isLoading ? (
    <Text>Loading ...</Text>
  )
  : apiData.error ? (
    <Text>{apiData.error}</Text>
  )
  :
  (
      <View style={styles.container}>
        <FlatList
          data={apiData.recipes}
          contentContainerStyle={{
            padding: 20,
            paddingTop: StatusBar.currentHeight || 42
          }}
          renderItem={({ item }) => (
            <CardList>
              <Image
                source = {{uri: item.image}}
                style = {{ width: 70, height: 70 }}
              />
              <View>
                <TouchableOpacity onPress={() => {
                  //dispatch(getRecipeIngredientsById(item.id))
                  //navigation.navigate('Details')
                  asyncDispatchRecipe(item.id)
                }}
                  style={styles.btn}
                >
                  <Text style={styles.item}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            </CardList>

          )}
        />
      </View>
    )

    return (
      <React.Fragment>
        { displayApiData }
      </React.Fragment>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    marginVertical: 10,
    backgroundColor: 'white',
    padding: 20,
    paddingHorizontal: 25,
    borderRadius: 8
  }
});

const mapStateToProps = state => {
  return {
    apiData: state.recipes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    apiRecipes: () => dispatch(getRecipes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)