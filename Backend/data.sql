CREATE DATABASE StickyNotes;

CREATE TABLE todos (
  id VARCHAR(50) PRIMARY KEY,
  user_email VARCHAR(50),
  title VARCHAR(30),
  progress INT,
  date VARCHAR(300)
);

CREATE TABLE users (
  email VARCHAR(250) PRIMARY KEY,
  hashed_password VARCHAR(250)
);