package main

import (
    // "context"
    // "fmt"
    "log"
    "net/http"
    // "time"

    // "go.mongodb.org/mongo-driver/bson"
    // "go.mongodb.org/mongo-driver/mongo"
    // "go.mongodb.org/mongo-driver/mongo/options"
)

// const mongoURI = "mongodb://localhost:27017"

// Ingredient model
type Ingredient struct {
    ID       int    `bson:"ingredient_id,omitempty"`
    Name     string `bson:"name,omitempty"`
    Category string `bson:"category,omitempty"`
}

// PantryItem model
type PantryItem struct {
    ID         int     `bson:"pantry_item_id,omitempty"`
    User       string  `bson:"user,omitempty"`
    Ingredient Ingredient `bson:"ingredient,omitempty"`
    Quantity   float64 `bson:"quantity,omitempty"`
    Unit       string  `bson:"unit,omitempty"`
    ExpiryDate string  `bson:"expiry_date,omitempty"`
}

// Recipe model
type Recipe struct {
    ID           int    `bson:"recipe_id,omitempty"`
    Name         string `bson:"name,omitempty"`
    Instructions string `bson:"instructions,omitempty"`
}

// RecipeIngredient model
type RecipeIngredient struct {
    Recipe     Recipe    `bson:"recipe,omitempty"`
    Ingredient Ingredient `bson:"ingredient,omitempty"`
    Quantity   float64   `bson:"quantity,omitempty"`
    Unit       string    `bson:"unit,omitempty"`
}

// ShoppingListItem model
type ShoppingListItem struct {
    ID       int       `bson:"item_id,omitempty"`
    Ingredient Ingredient `bson:"ingredient,omitempty"`
    Quantity   float64 `bson:"quantity,omitempty"`
    Unit       string  `bson:"unit,omitempty"`
}

func handleAboutPage(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "FrontEnd/aboutPage.html")
}

func handleContactPage(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "FrontEnd/contactPage.html")
}

func handleCookNowPage(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "FrontEnd/cookNowPage.html")
}

func handleLandingPage(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "FrontEnd/landingPage.html")
}

func handleLoginPage(w http.ResponseWriter, r *http.Request) {
    http.Redirect(w, r, "/pantry", http.StatusSeeOther)
}

func handlePantryPage(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "FrontEnd/pantryPage.html")
}

func handleRecipePage(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "FrontEnd/recipePage.html")
}

func handleShoppingListPage(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "FrontEnd/shoppingListPage.html")
}

func handleTempMainPage(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "FrontEnd/tempMainPage.html")
}

func main() {
    // Set up MongoDB connection
    // clientOptions := options.Client().ApplyURI(mongoURI)
    // client, err := mongo.Connect(context.Background(), clientOptions)
    // if err != nil {
    //     log.Fatal(err)
    // }
    // defer client.Disconnect(context.Background())

    // Access a MongoDB collection
    // database := client.Database("MyPantryDB")
    // pantryItemsCollection := database.Collection("Pantry_Items")
    // items := getItemsFromSpoonacular()


    // Initialize router
    router := http.NewServeMux()

    router.HandleFunc("/about", handleAboutPage)
    router.HandleFunc("/contact", handleContactPage)
    router.HandleFunc("/cook-now", handleCookNowPage)
    router.HandleFunc("/landing", handleLandingPage)
    router.HandleFunc("/login", handleLoginPage)
    router.HandleFunc("/pantry", handlePantryPage)
    router.HandleFunc("/recipes", handleRecipePage)
    router.HandleFunc("/shopping-list",handleShoppingListPage)
    router.HandleFunc("/temp-main", handleTempMainPage)
    router.Handle("/", http.FileServer(http.Dir(".")))


    // Start server
    log.Println("Server started on port 8000")
    log.Fatal(http.ListenAndServe(":8000", router))
}



