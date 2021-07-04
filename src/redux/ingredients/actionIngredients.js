import axios from 'axios'
import { LOAD_INGREDIENTS, LOAD_INGREDIENTS_SUCCESS, LOAD_INGREDIENTS_ERROR } from "./typeIngredients";
import * as service from '../../services/api';

const loadApiIngredients = () => {
  return {
    type: LOAD_INGREDIENTS
  }
}

const loadApiIngredientsSuccess = ingredients => {
  return {
    type: LOAD_INGREDIENTS_SUCCESS,
    payload: ingredients
  }
}

const loadApiIngreidentsError = error => {
  return {
    type: LOAD_INGREDIENTS_ERROR,
    payload: error
  }
}

export const getRecipeIngredientsById = (id) => {
  return dispatch => {

    dispatch(loadApiIngredients())

    service.API
      .get('/recipes/' + id + '/ingredientWidget.json' + service.API_KEY )
      .then(res => {
        const data = Object.assign(res.data, {recipe_id: id})
        console.log('action id', id)

        dispatch(loadApiIngredientsSuccess(data))
      })
      .catch( err => {
        dispatch(loadApiIngredientsSuccess(err.message))
      })
  }
}