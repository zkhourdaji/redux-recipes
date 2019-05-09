import {createStore} from 'redux';

const reducer = (state, action) => state;
const initialState ={
    recipes: [
        {
            name:'Omlette'
        }
    ],
    ingredients:[
        {
            recipe:'Omelette',
            name:'Egg',
            quantity:2
        }
    ]
};

const store = createStore(reducer, initialState);
window.store = store;