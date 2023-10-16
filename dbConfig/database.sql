CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE DATABASE signup;
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name TEXT NOT NULL,
    user_phone TEXT NOT NULL UNIQUE,
    user_email TEXT NOT NULL UNIQUE,
    user_password TEXT NOT NULL,
    user_token TEXT
);
SELECT * FROM users;
INSERT INTO users(user_name,user_email,user_password) values('pp1','pp@gmail.com','pp');

--psql -U postgres
--\c signup
--\dt
--heroku pg:psql
