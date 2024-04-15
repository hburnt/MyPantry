// userData.js

let userData = {}; // Simulated storage for user data tied to UID

// Function to add a user's data (pantry items, recipes, shopping list items)
function addUser(uid, pantryItems, recipeData, shoppingListItems) {
    userData[uid] = { pantryItems, recipeData, shoppingListItems };
}

// Function to retrieve a user's pantry items
function getPantryItems(uid) {
    return userData[uid] ? userData[uid].pantryItems : null;
}

// Function to retrieve a user's recipes
function getRecipes(uid) {
    return userData[uid] ? userData[uid].recipeData : null;
}

// Function to retrieve a user's shopping list items
function getShoppingListItems(uid) {
    return userData[uid] ? userData[uid].shoppingListItems : null;
}

// Function to update a user's pantry items
function updatePantryItems(uid, pantryItems) {
    if (userData[uid]) {
        userData[uid].pantryItems = pantryItems;
    }
}

// Function to update a user's recipes
function updateRecipes(uid, recipeData) {
    if (userData[uid]) {
        userData[uid].recipeData = recipeData;
    }
}

// Function to update a user's shopping list items
function updateShoppingListItems(uid, shoppingListItems) {
    if (userData[uid]) {
        userData[uid].shoppingListItems = shoppingListItems;
    }
}

module.exports = {
    addUser,
    getPantryItems,
    getRecipes,
    getShoppingListItems,
    updatePantryItems,
    updateRecipes,
    updateShoppingListItems
};
