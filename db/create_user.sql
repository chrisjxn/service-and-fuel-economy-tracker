INSERT INTO users (username, email, first_name, last_name, auth_id) 
VALUES ($1, $2, $3, $4, $5) 
RETURNING *;