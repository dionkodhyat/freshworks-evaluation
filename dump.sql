CREATE TABLE park (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE groupOfDucks (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    park_id BIGSERIAL NOT NULL,
    time_fed TIME NOT NULL,
    food_quantity FLOAT NOT NULL,
    food_name VARCHAR(50) NOT NULL,
    group_size INTEGER, 
    FOREIGN KEY(park_id) REFERENCES park
);