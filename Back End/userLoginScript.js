// backend.js

const { addPantryItems, getPantryItems, updatePantryItems, updateRecipes, updateShoppingListItems } = require('./userData');

// Function to add a user to the simulated database (for demonstration purposes)
function addUser(username, password, uid) {
    users.push({ username, password, uid });
    // Initialize empty data object for the user
    addPantryItems(uid, {});
}

// Function to authenticate a user
function authenticateUser(username, password) {
    // Find the user by username
    const user = users.find(user => user.username === username);

    // Check if the user exists and the password matches
    if (user && user.password === password) {
        return { success: true, uid: user.uid, message: 'Authentication successful' };
    } else {
        return { success: false, message: 'Invalid username or password' };
    }
}

// Adding some sample users for demonstration
addUser('user1', 'password1', 'uid1');
addUser('user2', 'password2', 'uid2');

// Adding sample user data for demonstration
updatePantryItems('uid1', {
        vegetables: [
            { name: "Tomatoes", quantity: 3, expiration: "2024-05-01", nutrients: { calories: 20, protein: 1, fat: 0.5, carbs: 5 } },
            { name: "Bell Peppers", quantity: 2, expiration: "2024-04-20", nutrients: { calories: 30, protein: 1.5, fat: 0.7, carbs: 7 } },
            { name: "Spinach", quantity: 1, expiration: "2024-04-22", nutrients: { calories: 15, protein: 2, fat: 0.3, carbs: 3 } },
            // Additional vegetables for various meals
            { name: "Broccoli", quantity: 2, expiration: "2024-04-25", nutrients: { calories: 25, protein: 3, fat: 0.5, carbs: 5 } },
            { name: "Carrots", quantity: 4, expiration: "2024-04-23", nutrients: { calories: 30, protein: 1, fat: 0.2, carbs: 7 } }
        ],
        grains: [
            { name: "Pasta", quantity: 2, expiration: "2024-04-20", nutrients: { calories: 40, protein: 2, fat: 0.8, carbs: 10 } },
            { name: "Rice", quantity: 1, expiration: "2024-04-25", nutrients: { calories: 50, protein: 2.5, fat: 1, carbs: 12 } },
            // Additional grains for various meals
            { name: "Quinoa", quantity: 1, expiration: "2024-05-01", nutrients: { calories: 50, protein: 2, fat: 1, carbs: 10 } },
            { name: "Whole Wheat Bread", quantity: 1, expiration: "2024-04-27", nutrients: { calories: 70, protein: 3, fat: 1, carbs: 12 } }
        ],
        proteins: [
            { name: "Chicken Breast", quantity: 2, expiration: "2024-04-18", nutrients: { calories: 120, protein: 25, fat: 2, carbs: 0 } },
            { name: "Salmon Fillet", quantity: 1, expiration: "2024-04-17", nutrients: { calories: 150, protein: 20, fat: 6, carbs: 0 } },
            // Additional proteins for various meals
            { name: "Ground Beef", quantity: 1, expiration: "2024-04-20", nutrients: { calories: 200, protein: 22, fat: 14, carbs: 0 } },
            { name: "Tofu", quantity: 1, expiration: "2024-04-22", nutrients: { calories: 80, protein: 8, fat: 4, carbs: 2 } }
        ],
        sauces: [
            { name: "Marinara Sauce", quantity: 1, expiration: "2024-05-01", nutrients: { calories: 50, protein: 2, fat: 2, carbs: 10 } },
            { name: "Soy Sauce", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 10, protein: 1, fat: 0, carbs: 2 } },
            // Additional sauces for various meals
            { name: "Pesto Sauce", quantity: 1, expiration: "2024-05-10", nutrients: { calories: 70, protein: 1, fat: 7, carbs: 1 } },
            { name: "BBQ Sauce", quantity: 1, expiration: "2024-05-15", nutrients: { calories: 50, protein: 0, fat: 0, carbs: 12 } }
        ],
        misc: [
            { name: "Olive Oil", quantity: 1, expiration: "2025-01-01", nutrients: { calories: 120, protein: 0, fat: 14, carbs: 0 } },
            { name: "Garlic", quantity: 3, expiration: "2024-04-24", nutrients: { calories: 5, protein: 0.2, fat: 0, carbs: 1 } },
            { name: "Parmesan Cheese", quantity: 1, expiration: "2024-07-01", nutrients: { calories: 110, protein: 10, fat: 7, carbs: 0 } },
            // Additional miscellaneous items for various meals
            { name: "Balsamic Vinegar", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 20, protein: 0, fat: 0, carbs: 5 } },
            { name: "Honey", quantity: 1, expiration: "2024-05-01", nutrients: { calories: 60, protein: 0, fat: 0, carbs: 17 } }
        ],
        cheese: [
            { name: "Cheddar Cheese", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 110, protein: 7, fat: 9, carbs: 0 } },
            { name: "Mozzarella Cheese", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 90, protein: 6, fat: 7, carbs: 1 } },
            // Additional cheese for various meals
            { name: "Feta Cheese", quantity: 1, expiration: "2024-05-25", nutrients: { calories: 70, protein: 4, fat: 6, carbs: 1 } },
            { name: "Parmigiano-Reggiano", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 120, protein: 8, fat: 10, carbs: 0 } }
        ],
        dairy: [
            { name: "Milk", quantity: 1, expiration: "2024-04-30", nutrients: { calories: 150, protein: 8, fat: 5, carbs: 12 } },
            { name: "Yogurt", quantity: 2, expiration: "2024-05-15", nutrients: { calories: 100, protein: 4, fat: 3, carbs: 12 } },
            // Additional dairy items for various meals
            { name: "Eggs", quantity: 12, expiration: "2024-04-30", nutrients: { calories: 70, protein: 6, fat: 5, carbs: 1 } },
            { name: "Butter", quantity: 1, expiration: "2024-05-10", nutrients: { calories: 100, protein: 0, fat: 11, carbs: 0 } }
        ]
});

updateRecipes('uid1', {
    dinner: [
        { name: "Spaghetti Carbonara", ingredients: ["Pasta", "Bacon", "Eggs", "Parmesan Cheese", "Garlic"], nutrients: { calories: 450, protein: 20, fat: 25, carbs: 35 } },
        { name: "Grilled Salmon with Asparagus", ingredients: ["Salmon Fillet", "Asparagus", "Lemon", "Olive Oil", "Salt", "Pepper"], nutrients: { calories: 380, protein: 30, fat: 20, carbs: 15 } }
    ],
    lunch: [
        { name: "Caprese Salad", ingredients: ["Tomatoes", "Mozzarella Cheese", "Basil Leaves", "Balsamic Vinegar", "Salt", "Pepper"], nutrients: { calories: 250, protein: 15, fat: 20, carbs: 10 } },
        { name: "Chicken Caesar Salad", ingredients: ["Chicken Breast", "Romaine Lettuce", "Parmesan Cheese", "Caesar Dressing", "Croutons"], nutrients: { calories: 320, protein: 25, fat: 15, carbs: 20 } }
    ],
    breakfast: [
        { name: "Avocado Toast", ingredients: ["Bread", "Avocado", "Egg", "Salt", "Pepper", "Chili Flakes"], nutrients: { calories: 300, protein: 10, fat: 15, carbs: 25 } },
        { name: "Oatmeal with Berries", ingredients: ["Oats", "Milk", "Berries", "Honey", "Cinnamon"], nutrients: { calories: 280, protein: 8, fat: 5, carbs: 45 } }
    ],
    quick: [
        { name: "Vegetable Stir Fry", ingredients: ["Mixed Vegetables", "Soy Sauce", "Garlic", "Ginger", "Sesame Oil"], nutrients: { calories: 200, protein: 10, fat: 8, carbs: 25 } },
        { name: "Quesadillas", ingredients: ["Tortillas", "Chicken", "Cheese", "Salsa", "Sour Cream"], nutrients: { calories: 350, protein: 20, fat: 18, carbs: 30 } }
    ]
});

updateShoppingListItems('uid1', {
        vegetables: [
            { name: "Tomatoes", quantity: 3, expiration: "2024-05-01", nutrients: { calories: 20, protein: 1, fat: 0.5, carbs: 5 } },
            { name: "Bell Peppers", quantity: 2, expiration: "2024-04-20", nutrients: { calories: 30, protein: 1.5, fat: 0.7, carbs: 7 } },
            { name: "Spinach", quantity: 1, expiration: "2024-04-22", nutrients: { calories: 15, protein: 2, fat: 0.3, carbs: 3 } },
            // Additional vegetables for various meals
            { name: "Broccoli", quantity: 2, expiration: "2024-04-25", nutrients: { calories: 25, protein: 3, fat: 0.5, carbs: 5 } },
            { name: "Carrots", quantity: 4, expiration: "2024-04-23", nutrients: { calories: 30, protein: 1, fat: 0.2, carbs: 7 } }
        ],
        grains: [
            { name: "Pasta", quantity: 2, expiration: "2024-04-20", nutrients: { calories: 40, protein: 2, fat: 0.8, carbs: 10 } },
            { name: "Rice", quantity: 1, expiration: "2024-04-25", nutrients: { calories: 50, protein: 2.5, fat: 1, carbs: 12 } },
            // Additional grains for various meals
            { name: "Quinoa", quantity: 1, expiration: "2024-05-01", nutrients: { calories: 50, protein: 2, fat: 1, carbs: 10 } },
            { name: "Whole Wheat Bread", quantity: 1, expiration: "2024-04-27", nutrients: { calories: 70, protein: 3, fat: 1, carbs: 12 } }
        ],
        proteins: [
            { name: "Chicken Breast", quantity: 2, expiration: "2024-04-18", nutrients: { calories: 120, protein: 25, fat: 2, carbs: 0 } },
            { name: "Salmon Fillet", quantity: 1, expiration: "2024-04-17", nutrients: { calories: 150, protein: 20, fat: 6, carbs: 0 } },
            // Additional proteins for various meals
            { name: "Ground Beef", quantity: 1, expiration: "2024-04-20", nutrients: { calories: 200, protein: 22, fat: 14, carbs: 0 } },
            { name: "Tofu", quantity: 1, expiration: "2024-04-22", nutrients: { calories: 80, protein: 8, fat: 4, carbs: 2 } }
        ],
        sauces: [
            { name: "Marinara Sauce", quantity: 1, expiration: "2024-05-01", nutrients: { calories: 50, protein: 2, fat: 2, carbs: 10 } },
            { name: "Soy Sauce", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 10, protein: 1, fat: 0, carbs: 2 } },
            // Additional sauces for various meals
            { name: "Pesto Sauce", quantity: 1, expiration: "2024-05-10", nutrients: { calories: 70, protein: 1, fat: 7, carbs: 1 } },
            { name: "BBQ Sauce", quantity: 1, expiration: "2024-05-15", nutrients: { calories: 50, protein: 0, fat: 0, carbs: 12 } }
        ],
        misc: [
            { name: "Olive Oil", quantity: 1, expiration: "2025-01-01", nutrients: { calories: 120, protein: 0, fat: 14, carbs: 0 } },
            { name: "Garlic", quantity: 3, expiration: "2024-04-24", nutrients: { calories: 5, protein: 0.2, fat: 0, carbs: 1 } },
            { name: "Parmesan Cheese", quantity: 1, expiration: "2024-07-01", nutrients: { calories: 110, protein: 10, fat: 7, carbs: 0 } },
            // Additional miscellaneous items for various meals
            { name: "Balsamic Vinegar", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 20, protein: 0, fat: 0, carbs: 5 } },
            { name: "Honey", quantity: 1, expiration: "2024-05-01", nutrients: { calories: 60, protein: 0, fat: 0, carbs: 17 } }
        ],
        cheese: [
            { name: "Cheddar Cheese", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 110, protein: 7, fat: 9, carbs: 0 } },
            { name: "Mozzarella Cheese", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 90, protein: 6, fat: 7, carbs: 1 } },
            // Additional cheese for various meals
            { name: "Feta Cheese", quantity: 1, expiration: "2024-05-25", nutrients: { calories: 70, protein: 4, fat: 6, carbs: 1 } },
            { name: "Parmigiano-Reggiano", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 120, protein: 8, fat: 10, carbs: 0 } }
        ],
        dairy: [
            { name: "Milk", quantity: 1, expiration: "2024-04-30", nutrients: { calories: 150, protein: 8, fat: 5, carbs: 12 } },
            { name: "Yogurt", quantity: 2, expiration: "2024-05-15", nutrients: { calories: 100, protein: 4, fat: 3, carbs: 12 } },
            // Additional dairy items for various meals
            { name: "Eggs", quantity: 12, expiration: "2024-04-30", nutrients: { calories: 70, protein: 6, fat: 5, carbs: 1 } },
            { name: "Butter", quantity: 1, expiration: "2024-05-10", nutrients: { calories: 100, protein: 0, fat: 11, carbs: 0 } }
        ]
});

// Adding sample user data for demonstration
updatePantryItems('uid2', {
    vegetables: [
        { name: "Tomatoes", quantity: 3, expiration: "2024-05-01", nutrients: { calories: 20, protein: 1, fat: 0.5, carbs: 5 } },
        { name: "Bell Peppers", quantity: 2, expiration: "2024-04-20", nutrients: { calories: 30, protein: 1.5, fat: 0.7, carbs: 7 } },
        { name: "Spinach", quantity: 1, expiration: "2024-04-22", nutrients: { calories: 15, protein: 2, fat: 0.3, carbs: 3 } },
        // Additional vegetables for various meals
        { name: "Broccoli", quantity: 2, expiration: "2024-04-25", nutrients: { calories: 25, protein: 3, fat: 0.5, carbs: 5 } },
        { name: "Carrots", quantity: 4, expiration: "2024-04-23", nutrients: { calories: 30, protein: 1, fat: 0.2, carbs: 7 } }
    ],
    grains: [
        { name: "Pasta", quantity: 2, expiration: "2024-04-20", nutrients: { calories: 40, protein: 2, fat: 0.8, carbs: 10 } },
        { name: "Rice", quantity: 1, expiration: "2024-04-25", nutrients: { calories: 50, protein: 2.5, fat: 1, carbs: 12 } },
        // Additional grains for various meals
        { name: "Quinoa", quantity: 1, expiration: "2024-05-01", nutrients: { calories: 50, protein: 2, fat: 1, carbs: 10 } },
        { name: "Whole Wheat Bread", quantity: 1, expiration: "2024-04-27", nutrients: { calories: 70, protein: 3, fat: 1, carbs: 12 } }
    ],
    proteins: [
        { name: "Chicken Breast", quantity: 2, expiration: "2024-04-18", nutrients: { calories: 120, protein: 25, fat: 2, carbs: 0 } },
        { name: "Salmon Fillet", quantity: 1, expiration: "2024-04-17", nutrients: { calories: 150, protein: 20, fat: 6, carbs: 0 } },
        // Additional proteins for various meals
        { name: "Ground Beef", quantity: 1, expiration: "2024-04-20", nutrients: { calories: 200, protein: 22, fat: 14, carbs: 0 } },
        { name: "Tofu", quantity: 1, expiration: "2024-04-22", nutrients: { calories: 80, protein: 8, fat: 4, carbs: 2 } }
    ],
    sauces: [
        { name: "Marinara Sauce", quantity: 1, expiration: "2024-05-01", nutrients: { calories: 50, protein: 2, fat: 2, carbs: 10 } },
        { name: "Soy Sauce", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 10, protein: 1, fat: 0, carbs: 2 } },
        // Additional sauces for various meals
        { name: "Pesto Sauce", quantity: 1, expiration: "2024-05-10", nutrients: { calories: 70, protein: 1, fat: 7, carbs: 1 } },
        { name: "BBQ Sauce", quantity: 1, expiration: "2024-05-15", nutrients: { calories: 50, protein: 0, fat: 0, carbs: 12 } }
    ],
    misc: [
        { name: "Olive Oil", quantity: 1, expiration: "2025-01-01", nutrients: { calories: 120, protein: 0, fat: 14, carbs: 0 } },
        { name: "Garlic", quantity: 3, expiration: "2024-04-24", nutrients: { calories: 5, protein: 0.2, fat: 0, carbs: 1 } },
        { name: "Parmesan Cheese", quantity: 1, expiration: "2024-07-01", nutrients: { calories: 110, protein: 10, fat: 7, carbs: 0 } },
        // Additional miscellaneous items for various meals
        { name: "Balsamic Vinegar", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 20, protein: 0, fat: 0, carbs: 5 } },
        { name: "Honey", quantity: 1, expiration: "2024-05-01", nutrients: { calories: 60, protein: 0, fat: 0, carbs: 17 } }
    ],
    cheese: [
        { name: "Cheddar Cheese", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 110, protein: 7, fat: 9, carbs: 0 } },
        { name: "Mozzarella Cheese", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 90, protein: 6, fat: 7, carbs: 1 } },
        // Additional cheese for various meals
        { name: "Feta Cheese", quantity: 1, expiration: "2024-05-25", nutrients: { calories: 70, protein: 4, fat: 6, carbs: 1 } },
        { name: "Parmigiano-Reggiano", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 120, protein: 8, fat: 10, carbs: 0 } }
    ],
    dairy: [
        { name: "Milk", quantity: 1, expiration: "2024-04-30", nutrients: { calories: 150, protein: 8, fat: 5, carbs: 12 } },
        { name: "Yogurt", quantity: 2, expiration: "2024-05-15", nutrients: { calories: 100, protein: 4, fat: 3, carbs: 12 } },
        // Additional dairy items for various meals
        { name: "Eggs", quantity: 12, expiration: "2024-04-30", nutrients: { calories: 70, protein: 6, fat: 5, carbs: 1 } },
        { name: "Butter", quantity: 1, expiration: "2024-05-10", nutrients: { calories: 100, protein: 0, fat: 11, carbs: 0 } }
    ]
});

updateRecipes('uid2', {
dinner: [
    { name: "Spaghetti Carbonara", ingredients: ["Pasta", "Bacon", "Eggs", "Parmesan Cheese", "Garlic"], nutrients: { calories: 450, protein: 20, fat: 25, carbs: 35 } },
    { name: "Grilled Salmon with Asparagus", ingredients: ["Salmon Fillet", "Asparagus", "Lemon", "Olive Oil", "Salt", "Pepper"], nutrients: { calories: 380, protein: 30, fat: 20, carbs: 15 } }
],
lunch: [
    { name: "Caprese Salad", ingredients: ["Tomatoes", "Mozzarella Cheese", "Basil Leaves", "Balsamic Vinegar", "Salt", "Pepper"], nutrients: { calories: 250, protein: 15, fat: 20, carbs: 10 } },
    { name: "Chicken Caesar Salad", ingredients: ["Chicken Breast", "Romaine Lettuce", "Parmesan Cheese", "Caesar Dressing", "Croutons"], nutrients: { calories: 320, protein: 25, fat: 15, carbs: 20 } }
],
breakfast: [
    { name: "Avocado Toast", ingredients: ["Bread", "Avocado", "Egg", "Salt", "Pepper", "Chili Flakes"], nutrients: { calories: 300, protein: 10, fat: 15, carbs: 25 } },
    { name: "Oatmeal with Berries", ingredients: ["Oats", "Milk", "Berries", "Honey", "Cinnamon"], nutrients: { calories: 280, protein: 8, fat: 5, carbs: 45 } }
],
quick: [
    { name: "Vegetable Stir Fry", ingredients: ["Mixed Vegetables", "Soy Sauce", "Garlic", "Ginger", "Sesame Oil"], nutrients: { calories: 200, protein: 10, fat: 8, carbs: 25 } },
    { name: "Quesadillas", ingredients: ["Tortillas", "Chicken", "Cheese", "Salsa", "Sour Cream"], nutrients: { calories: 350, protein: 20, fat: 18, carbs: 30 } }
]
});

updateShoppingListItems('uid2', {
    vegetables: [
        { name: "Tomatoes", quantity: 3, expiration: "2024-05-01", nutrients: { calories: 20, protein: 1, fat: 0.5, carbs: 5 } },
        { name: "Bell Peppers", quantity: 2, expiration: "2024-04-20", nutrients: { calories: 30, protein: 1.5, fat: 0.7, carbs: 7 } },
        { name: "Spinach", quantity: 1, expiration: "2024-04-22", nutrients: { calories: 15, protein: 2, fat: 0.3, carbs: 3 } },
        // Additional vegetables for various meals
        { name: "Broccoli", quantity: 2, expiration: "2024-04-25", nutrients: { calories: 25, protein: 3, fat: 0.5, carbs: 5 } },
        { name: "Carrots", quantity: 4, expiration: "2024-04-23", nutrients: { calories: 30, protein: 1, fat: 0.2, carbs: 7 } }
    ],
    grains: [
        { name: "Pasta", quantity: 2, expiration: "2024-04-20", nutrients: { calories: 40, protein: 2, fat: 0.8, carbs: 10 } },
        { name: "Rice", quantity: 1, expiration: "2024-04-25", nutrients: { calories: 50, protein: 2.5, fat: 1, carbs: 12 } },
        // Additional grains for various meals
        { name: "Quinoa", quantity: 1, expiration: "2024-05-01", nutrients: { calories: 50, protein: 2, fat: 1, carbs: 10 } },
        { name: "Whole Wheat Bread", quantity: 1, expiration: "2024-04-27", nutrients: { calories: 70, protein: 3, fat: 1, carbs: 12 } }
    ],
    proteins: [
        { name: "Chicken Breast", quantity: 2, expiration: "2024-04-18", nutrients: { calories: 120, protein: 25, fat: 2, carbs: 0 } },
        { name: "Salmon Fillet", quantity: 1, expiration: "2024-04-17", nutrients: { calories: 150, protein: 20, fat: 6, carbs: 0 } },
        // Additional proteins for various meals
        { name: "Ground Beef", quantity: 1, expiration: "2024-04-20", nutrients: { calories: 200, protein: 22, fat: 14, carbs: 0 } },
        { name: "Tofu", quantity: 1, expiration: "2024-04-22", nutrients: { calories: 80, protein: 8, fat: 4, carbs: 2 } }
    ],
    sauces: [
        { name: "Marinara Sauce", quantity: 1, expiration: "2024-05-01", nutrients: { calories: 50, protein: 2, fat: 2, carbs: 10 } },
        { name: "Soy Sauce", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 10, protein: 1, fat: 0, carbs: 2 } },
        // Additional sauces for various meals
        { name: "Pesto Sauce", quantity: 1, expiration: "2024-05-10", nutrients: { calories: 70, protein: 1, fat: 7, carbs: 1 } },
        { name: "BBQ Sauce", quantity: 1, expiration: "2024-05-15", nutrients: { calories: 50, protein: 0, fat: 0, carbs: 12 } }
    ],
    misc: [
        { name: "Olive Oil", quantity: 1, expiration: "2025-01-01", nutrients: { calories: 120, protein: 0, fat: 14, carbs: 0 } },
        { name: "Garlic", quantity: 3, expiration: "2024-04-24", nutrients: { calories: 5, protein: 0.2, fat: 0, carbs: 1 } },
        { name: "Parmesan Cheese", quantity: 1, expiration: "2024-07-01", nutrients: { calories: 110, protein: 10, fat: 7, carbs: 0 } },
        // Additional miscellaneous items for various meals
        { name: "Balsamic Vinegar", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 20, protein: 0, fat: 0, carbs: 5 } },
        { name: "Honey", quantity: 1, expiration: "2024-05-01", nutrients: { calories: 60, protein: 0, fat: 0, carbs: 17 } }
    ],
    cheese: [
        { name: "Cheddar Cheese", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 110, protein: 7, fat: 9, carbs: 0 } },
        { name: "Mozzarella Cheese", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 90, protein: 6, fat: 7, carbs: 1 } },
        // Additional cheese for various meals
        { name: "Feta Cheese", quantity: 1, expiration: "2024-05-25", nutrients: { calories: 70, protein: 4, fat: 6, carbs: 1 } },
        { name: "Parmigiano-Reggiano", quantity: 1, expiration: "2024-06-01", nutrients: { calories: 120, protein: 8, fat: 10, carbs: 0 } }
    ],
    dairy: [
        { name: "Milk", quantity: 1, expiration: "2024-04-30", nutrients: { calories: 150, protein: 8, fat: 5, carbs: 12 } },
        { name: "Yogurt", quantity: 2, expiration: "2024-05-15", nutrients: { calories: 100, protein: 4, fat: 3, carbs: 12 } },
        // Additional dairy items for various meals
        { name: "Eggs", quantity: 12, expiration: "2024-04-30", nutrients: { calories: 70, protein: 6, fat: 5, carbs: 1 } },
        { name: "Butter", quantity: 1, expiration: "2024-05-10", nutrients: { calories: 100, protein: 0, fat: 11, carbs: 0 } }
    ]
});

