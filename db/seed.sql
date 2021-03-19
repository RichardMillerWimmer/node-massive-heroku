-- Saves initail code for setting up database incase someone else if working on this entire directory.

CREATE TABLE item (
item_id SERIAL PRIMARY KEY,
name VARCHAR(20),
size VARCHAR(10)
);

INSERT INTO item (name, size)
VALUES ('shirt', 'medium'), ('chore coat', 'large'), ('hat', 'large');