import axios from 'axios'
import { LOAD_RECIPES, LOAD_RECIPES_SUCCESS, LOAD_RECIPES_ERROR } from "./typeRecipes";
import * as service from '../../services/api';

const loadApiRecipes = () => {
  return {
    type: LOAD_RECIPES
  }
}

const loadApiRecipesSuccess = recipes => {
  return {
    type: LOAD_RECIPES_SUCCESS,
    payload: recipes
  }
}

const loadApiRecipesError = error => {
  return {
    type: LOAD_RECIPES_ERROR,
    payload: error
  }
}

export const getRecipes = () => {
  return dispatch => {

    dispatch(loadApiRecipes())

    service.API
      .get('recipes/complexSearch' + service.API_KEY)
      .then(res => {
        dispatch(loadApiRecipesSuccess(res.data.results))
      })
      .catch( err => {
        dispatch(loadApiRecipesSuccess(err.message))
      })
  }
}