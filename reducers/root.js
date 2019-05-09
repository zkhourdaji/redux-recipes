import recipesReducer from './recipes';
import ingredientReducer from './ingredients';
import { combineReducers } from 'redux';

const reducer = (state, action) => {
    return Object.assign({}, state, {
        recipes: recipesReducer(state.recipes, action),
        ingredients: ingredientReducer(state.ingredients, action)
    });
};



export default combineReducers({
    recipes: recipesReducer,
    ingredients:ingredientReducer
});