import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, StatusBar } from 'react-native';
import * as Types from '../store/types'
import { connect } from 'react-redux'
import axios from 'axios';

// style
import { cardStyles, CardList } from '../styles/appRecipe.styles';

const api = 'https://jsonplaceholder.typicode.com/users/1/todos'
const spoonacularAPI = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=0cc1acca598f4125a2abf1a515ab06bd'

const App = (props) => {
  const [recipeData, setRecipeData] = useState([]);

  const fetchDataCall = async(api) => {
    let response = await axios
      .get(api)
      .then(async function(res) {
        return res;
      })
      .catch(function(error) {
        console.log(error)
      })
    return response;
  }

  const fetchData = async () => {
    const response = await fetchDataCall(api);
    console.log(response)

    setRecipeData(response.data)

    // Save Recipes To Redux
    props.updateRecipes(response.data)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={recipeData}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{
          padding: 20,
          paddingTop: StatusBar.currentHeight || 42
        }}
        renderItem={({ item }) => (
          <CardList>
            <Image
              source = {{uri: 'https://spoonacular.com/recipeImages/716426-312x231.jpg'}}
              style = {{ width: 70, height: 70 }}
            />
            <View>
              <Text style={styles.item}>{item.title}</Text>
            </View>
          </CardList>

        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  updateRecipes: recipes => dispatch({
    type: Types.UPDATE_RECIPES, payload: {
    recipes
  }})
});

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(App);