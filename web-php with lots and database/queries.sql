INSERT INTO Category (name, code)
VALUES
('Доски и лыжи', 'boards'),
('Крепления', 'attachment'),
('Ботинки', 'boots'),
('Одежда', 'clothing'),
('Инструменты', 'tools'),
('Разное', 'other');
INSERT INTO User(email, username, password, contacts)
VALUES
('user1@mail.ru', 'Коля', 'qwerty', '+794234231'),
('user2@mail.ru', 'Иван', 'wasd', '+74994321');

INSERT INTO Lot (name, description, image, price, end_date, step, author, category)
VALUES
('2014 Rossignol District Snowboard', 'Доски и лыжи', 'img/lot-1.jpg', 10999, '2023-09-21', 10, 1, 1),
('DC Ply Mens 2016/2017 Snowboard', 'Доски и лыжи', 'img/lot-2.jpg', 159999, '2023-09-23', 20, 2, 1),
('Крепления Union Contact Pro 2015 года размер L/XL', 'Крепления', 'img/lot-3.jpg', 8000, '2023-09-20', 30, 1, 2),
('Ботинки для сноуборда DC Mutiny Charocal', 'Ботинки', 'img/lot-4.jpg', 10999, '2023-09-20', 40, 2, 3),
('Куртка для сноуборда DC Mutiny Charocal', 'Одежда', 'img/lot-5.jpg', 7500, '2023-09-21', 50,1, 4),
('Маска Oakley Canopy', 'Разное', 'img/lot-6.jpg', 5400, '2023-09-22', 60, 2, 6);

INSERT INTO Bid (sum, user, lot)
VALUES
(150, 1, 1),
(200, 2, 2);

SELECT * FROM Category;

SELECT Lot.name, Lot.price, Lot.image, Category.name AS category_name, Lot.end_date FROM Lot JOIN Category ON Lot.category = Category.id WHERE Lot.end_date >= NOW() ORDER BY Lot.creation_date DESC;

SELECT Lot.id, Lot.name, Lot.price, Lot.image, Category.name AS name, Lot.end_date FROM Lot JOIN Category ON Lot.category = Category.id WHERE Lot.id = 1;

UPDATE Lot SET name = '2014 Rossignol District Snowboard' WHERE id = 1;

SELECT Bid.bid_date, Bid.sum, Lot.name, User.username AS username FROM Bid JOIN Lot ON Bid.lot = Lot.category JOIN User ON Bid.user = User.id WHERE Bid.lot = 1 ORDER BY Bid.bid_date




