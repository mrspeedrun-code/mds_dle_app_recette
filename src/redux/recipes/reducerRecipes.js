import { LOAD_RECIPES, LOAD_RECIPES_SUCCESS, LOAD_RECIPES_ERROR } from "./typeRecipes";

const initialStateRecipes = {
  isLoading: false,
  recipes: [],
  error: ''
}

const recipeReducer = (state = initialStateRecipes, action) => {
  switch (action.type) {
    case LOAD_RECIPES:
      return {
        ...state,
        isLoading: true
      }
    case LOAD_RECIPES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        recipes: action.payload,
        error: ''
      }
    case LOAD_RECIPES_ERROR:
      return {
        ...state,
        isLoading: false,
        recipes: [],
        error: action.payload
      }

    default: return state
      break;
  }
}

export default recipeReducer;