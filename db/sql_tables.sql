CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    username VARCHAR(40), 
    email VARCHAR(40), 
    first_name VARCHAR(40), 
    last_name VARCHAR(40), 
    auth_id TEXT
);