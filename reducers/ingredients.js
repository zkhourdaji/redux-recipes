const ingredientReducer = (ingredients = [], action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            const newIngredient = {
                name: action.name,
                quantity: action.quantity,
                recipe: action.recipe
            };
            return ingredients.concat(newIngredient);
    }
}

export default ingredientReducer;