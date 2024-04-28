package main

import (
	"context"
    "database/sql"
    "fmt"
    "log"

    "github.com/hburnet/MyPantry/Back%20End/Database%20Code/api"
    "github.com/hburnet/MyPantry/Back%20End/Database%20Code/config"

    _ "github.com/go-sql-driver/mysql"
)

func main() {
    // Initialize configuration
    config.Init()

    // Open database connection
    db, err := sql.Open("mysql", fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", config.Get().MySQLUser, config.Get().MySQLPassword, config.Get().MySQLHost, config.Get().MySQLPort, config.Get().MySQLDatabase))
    if err != nil {
        log.Fatalf("Error connecting to database: %v\n", err)
    }
    defer db.Close()

    // // Fetch ingredients from Spoonacular API
    // ingredients, err := api.FetchIngredientsFromAPI(context.Background(), "apple")
    // if err != nil {
    //     log.Fatalf("Error fetching ingredients: %v\n", err)
    // }

    // // Store ingredients in database
    // err = api.StoreIngredients(context.Background(), db, ingredients)
    // if err != nil {
    //     log.Fatalf("Error storing ingredients: %v\n", err)
    // }

    // fmt.Println("Ingredients stored successfully!")
}