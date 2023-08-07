DROP DATABASE IF EXISTS movies_dev;

CREATE DATABASE movies_dev;

\c movies_dev;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    year INT,
    img BYTEA,
    rating INT,
    favorite_actor TEXT,
    would_rewatch BOOLEAN
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    title TEXT,
    content TEXT,
    rating NUMERIC CHECK (rating >= 0 AND rating <= 5),
    movie_id INTEGER REFERENCES movies (id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    userName VARCHAR(50) NOT NULL,
    password_hash VARCHAR(100) NOT NULL
);
