DROP TABLE credentials

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
)

INSERT INTO users (username, password)
VALUES 
("user1001", "user1001"),
("inijugauser", "inijugauser")