import { LOAD_INGREDIENTS, LOAD_INGREDIENTS_SUCCESS, LOAD_INGREDIENTS_ERROR } from "./typeIngredients";

const initialStateIngredients = {
  isLoading: false,
  ingredients: [],
  error: ''
}

const ingredientReducer = (state = initialStateIngredients, action) => {
  switch (action.type) {
    case LOAD_INGREDIENTS:
      return {
        ...state,
        isLoading: true
      }
    case LOAD_INGREDIENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ingredients: action.payload,
        error: ''
      }
    case LOAD_INGREDIENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        ingredients: [],
        error: action.payload
      }

    default: return state
      break;
  }
}

export default ingredientReducer;