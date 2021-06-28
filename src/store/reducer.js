import * as Types from './types'

const initialState =  {
  recipes: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_RECIPES:
        return { ...state, recipes: action.payload.recipes }
    default: return state;
  }
}

export { reducer };