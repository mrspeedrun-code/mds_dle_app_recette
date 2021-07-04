import { createStore, combineReducers, applyMiddleware } from 'redux'
import recipeReducer from './recipes/reducerRecipes'
import ingredientReducer from './ingredients/reducerIngredients'

import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  recipes: recipeReducer,
  ingredients: ingredientReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export { store };