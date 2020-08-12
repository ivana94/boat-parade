CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    item VARCHAR,
    quantity INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);