package main

import (
	"log"
	"net/http"
)

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
	// Initialize router
	router := http.NewServeMux()

	router.HandleFunc("/about", handleAboutPage)
	router.HandleFunc("/contact", handleContactPage)
	router.HandleFunc("/cook-now", handleCookNowPage)
	router.HandleFunc("/landing", handleLandingPage)
	router.HandleFunc("/login", handleLoginPage)
	router.HandleFunc("/pantry", handlePantryPage)
	router.HandleFunc("/recipes", handleRecipePage)
	router.HandleFunc("/shopping-list", handleShoppingListPage)
	router.HandleFunc("/temp-main", handleTempMainPage)
	router.Handle("/", http.FileServer(http.Dir(".")))

	// Start server
	log.Println("Server started on port 127.0.0.1:8000")
	log.Fatal(http.ListenAndServe("127.0.0.1:8000", router))
}
