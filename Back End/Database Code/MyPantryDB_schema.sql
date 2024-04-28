-- Create database
CREATE DATABASE IF NOT EXISTS MyPantryDB;
USE MyPantryDB;

-- Table: Ingredients
CREATE TABLE IF NOT EXISTS Ingredients (
    ingredient_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    category VARCHAR(100)
);

-- Table: Pantry_Items
CREATE TABLE IF NOT EXISTS Pantry_Items (
    pantry_item_id INT AUTO_INCREMENT PRIMARY KEY,
    ingredient_id INT,
    quantity DECIMAL(10,2),
    unit VARCHAR(50),
    expiry_date DATE,
    FOREIGN KEY (ingredient_id) REFERENCES Ingredients(ingredient_id)
);

-- Table: Recipes
CREATE TABLE IF NOT EXISTS Recipes (
    recipe_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    instructions TEXT
);

-- Table: RecipeIngredients
CREATE TABLE IF NOT EXISTS RecipeIngredients (
    recipe_id INT,
    ingredient_id INT,
    quantity DECIMAL(10,2),
    unit VARCHAR(50),
    FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id),
    FOREIGN KEY (ingredient_id) REFERENCES Ingredients(ingredient_id)
);


-- Table: ShoppingList
CREATE TABLE IF NOT EXISTS ShoppingList (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    ingredient_id INT,
    quantity DECIMAL(10,2),
    unit VARCHAR(50),
    FOREIGN KEY (ingredient_id) REFERENCES Ingredients(ingredient_id)
);
