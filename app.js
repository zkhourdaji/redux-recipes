import { createStore } from 'redux';
import store from './store/store';
import addRecipe from './actions/recipe';
import addIngredient from './actions/ingredient';

store.dispatch(addRecipe('Pancake'));
store.dispatch(addIngredient('Pancake', 'Eggs', 3));
window.store = store;