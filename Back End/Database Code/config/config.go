// config/config.go

package config

import (
    "encoding/json"
    "os"
)

// Config represents the configuration of the application.
type Config struct {
    SpoonacularAPIKey string `json:"spoonacular_api_key"`
    MySQLHost         string `json:"mysql_host"`
    MySQLPort         string `json:"mysql_port"`
    MySQLDatabase     string `json:"mysql_database"`
    MySQLUser         string `json:"mysql_user"`
    MySQLPassword     string `json:"mysql_password"`
}

var (
    configFilePath = "config.json"
    cfg            Config
)

// LoadConfig loads the configuration from a JSON file.
func LoadConfig() error {
    file, err := os.Open(configFilePath)
    if err != nil {
        return err
    }
    defer file.Close()

    decoder := json.NewDecoder(file)
    if err := decoder.Decode(&cfg); err != nil {
        return err
    }

    return nil
}

// GetConfig returns the loaded configuration.
func GetConfig() Config {
    return cfg
}
