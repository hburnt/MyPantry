# Use an official MySQL image as the base
FROM mysql:latest

# Set environment variables (customize as needed)
ENV MYSQL_ROOT_PASSWORD=CloudNative
ENV MYSQL_DATABASE=MyPantryDB

# Copy your SQL file into the container
COPY MyPantryDB_schema.sql /docker-entrypoint-initdb.d/

# Expose the MySQL port
EXPOSE 3306