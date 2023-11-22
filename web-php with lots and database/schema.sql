CREATE TABLE IF NOT EXISTS Category (
                          id INT PRIMARY KEY AUTO_INCREMENT,
                          name VARCHAR(255) NOT NULL UNIQUE,
                          code VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS User (
                        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                        registration_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                        email VARCHAR(255) NOT NULL UNIQUE,
                        username VARCHAR(255) NOT NULL,
                        password VARCHAR(255) NOT NULL,
                        contacts VARCHAR(255) NOT NULL
    );

CREATE TABLE IF NOT EXISTS Lot (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                    name VARCHAR(255) NOT NULL,
                    description VARCHAR(255) NOT NULL,
                    image VARCHAR(255) NOT NULL,
                    price int NOT NULL,
                    end_date DATE NOT NULL,
                    step int NOT NULL,
                    author INT NOT NULL,
                    winner INT,
                    category INT NOT NULL,
                    FOREIGN KEY (author) REFERENCES User(id),
                    FOREIGN KEY (winner) REFERENCES User(id),
                    FOREIGN KEY (category) REFERENCES Category(id)
);

CREATE TABLE IF NOT EXISTS Bid (
                     id INT PRIMARY KEY AUTO_INCREMENT,
                     bid_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                     sum int NOT NULL,
                     user INT NOT NULL,
                     lot INT NOT NULL,
                     FOREIGN KEY (user) REFERENCES User(id),
                     FOREIGN KEY (lot) REFERENCES Lot(id)
);