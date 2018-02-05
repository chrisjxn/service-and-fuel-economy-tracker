CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    username VARCHAR(40), 
    email VARCHAR(40), 
    first_name VARCHAR(40), 
    last_name VARCHAR(40), 
    auth_id TEXT
);

CREATE TABLE vehicles (
    id SERIAL PRIMARY KEY, 
    user_id INTEGER REFERENCES users(id), 
    vehicle VARCHAR(40)
);

CREATE TABLE refuels (
    id SERIAL PRIMARY KEY, 
    vehicle_id INTEGER REFERENCES vehicles(id), 
    date DATE, 
    fuel_brand VARCHAR(20), 
    octane VARCHAR(10), 
    location VARCHAR(30), 
    gallons NUMERIC(5, 3), 
    price_gal NUMERIC(4, 3), 
    cost NUMERIC(5, 2), 
    odometer INTEGER, 
    notes VARCHAR(1000)
);