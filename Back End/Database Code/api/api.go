// api/api.go

package api

import (
    "context"
    "database/sql"
)

// Ingredient represents an ingredient fetched from the API.
type Ingredient struct {
    Name     string `json:"name"`
    Category string `json:"category"`
}

// APIResponse represents the response structure from the Spoonacular API.
type APIResponse struct {
    Results []Ingredient `json:"results"`
}

// FetchIngredientsFromAPI fetches ingredients from the Spoonacular API based on the provided query.
func FetchIngredientsFromAPI(ctx context.Context, query, apiKey string) ([]Ingredient, error) {
    url := fmt.Sprintf("https://api.spoonacular.com/food/ingredients/search?query=%s&apiKey=%s", query, apiKey)
    req, err := http.NewRequestWithContext(ctx, http.MethodGet, url, nil)
    if err != nil {
        return nil, err
    }

    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        return nil, err
    }
    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        return nil, err
    }

    var apiResponse APIResponse
    if err := json.Unmarshal(body, &apiResponse); err != nil {
        return nil, err
    }

    return apiResponse.Results, nil
}

// StoreIngredients stores ingredients in the database.
func StoreIngredients(ctx context.Context, db *sql.DB, ingredients []Ingredient) error {
    tx, err := db.BeginTx(ctx, nil)
    if err != nil {
        return err
    }
    defer tx.Rollback()

    stmt, err := tx.PrepareContext(ctx, "INSERT INTO Ingredients (name, category) VALUES (?, ?)")
    if err != nil {
        return err
    }
    defer stmt.Close()

    for _, ingredient := range ingredients {
        _, err := stmt.ExecContext(ctx, ingredient.Name, ingredient.Category)
        if err != nil {
            return err
        }
    }

    return tx.Commit()
}