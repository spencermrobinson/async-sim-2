CREATE TABLE IF NOT EXISTS properties(
    id SERIAL,
    user_id INTEGER REFERENCES users (id),
    name VARCHAR(20),
    description VARCHAR(200),
    address VARCHAR(30),
    city VARCHAR(20),
    state VARCHAR(12),
    zip INTEGER,
    image TEXT,
    loan VARCHAR(20),
    mortgage VARCHAR(20),
    rent VARCHAR(20)
);