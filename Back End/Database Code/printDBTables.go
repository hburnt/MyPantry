package main

import (
    "database/sql"
    "fmt"
    _ "github.com/go-sql-driver/mysql"
)

const (
    mysqlHost     = "172.17.0.2" // Replace with the MySQL container's IP address
    mysqlPort     = "3306"
    mysqlUser     = "root"
    mysqlPassword = "CloudNative"
    mysqlDatabase = "MyPantryDB"
)

func connectToMySQL() (*sql.DB, error) {
    dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", mysqlUser, mysqlPassword, mysqlHost, mysqlPort, mysqlDatabase)
    db, err := sql.Open("mysql", dsn)
    if err != nil {
        return nil, err
    }
    return db, nil
}

func fetchTables(db *sql.DB) ([]string, error) {
    rows, err := db.Query("SHOW TABLES")
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    var tables []string
    for rows.Next() {
        var table string
        if err := rows.Scan(&table); err != nil {
            return nil, err
        }
        tables = append(tables, table)
    }

    if err := rows.Err(); err != nil {
        return nil, err
    }

    return tables, nil
}
func main() {
    db, err := connectToMySQL()
    if err != nil {
        fmt.Printf("Error connecting to MySQL: %v\n", err)
        return
    }
    defer db.Close()

    tables, err := fetchTables(db)
    if err != nil {
        fmt.Printf("Error fetching tables: %v\n", err)
        return
    }

    fmt.Println("Tables in the database:")
    for _, table := range tables {
        fmt.Println(table)
    }
}