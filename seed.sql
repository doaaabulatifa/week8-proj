-- CREATE TABLE users (
--     user_id SERIAL PRIMARY KEY,
--     username VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL
-- );
-- CREATE TABLE categories (
--     category_id SERIAL PRIMARY KEY,
--     category_name VARCHAR(100) NOT NULL
-- );

-- CREATE TABLE facts (
--     fact_id SERIAL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     link VARCHAR(255) NOT NULL,
--     content VARCHAR(255) NOT NULL,
--     user_id INT REFERENCES users(user_id),
--     category_id INT REFERENCES categories(category_id)
-- );

-- CREATE TABLE comments (
--     comment_id SERIAL PRIMARY KEY,
--     fact_id INT REFERENCES facts(fact_id),
--     user_id INT REFERENCES users(user_id),
--     comment_text TEXT NOT NULL
-- );

-- CREATE TABLE likes (
--     fact_id INT REFERENCES facts(fact_id),
--     user_id INT REFERENCES users(user_id),
  
-- );

-- INSERT INTO facts (title, content, link, category_id, user_id)
-- VALUES ('Clouds', 'A cloud weighs around a million tonnes', 'https://www.sciencefocus.com/planet-earth/how-much-does-a-cloud-weigh', 1, 1),
--        ('Children', 'Children are born naturally good and the world corrupts them.', 'https://www.theguardian.com/lifeandstyle/2013/oct/11/20-things-should-know-about-children', 2, 4),
--        ('Watermelons', 'Watermelons are popular hostess gifts in China', 'https://www.mashed.com/816747/watermelons-are-popular-hostess-gifts-in-this-country/', 6, 2),
--        ('Nigeria', 'As a multiethnic country, Nigeria has over 520 spoken languages among its residents', 'https://worldpopulationreview.com/countries/nigeria/language', 4, 5),
--        ('Philippines', 'The Philippines is made up of over 7,600 islands.', 'https://en.wikipedia.org/wiki/List_of_islands_of_the_Philippines', 4, 4),
--        ('Goats', 'Goats have accents', 'https://www.treehugger.com/animal-news-4846084', 3, 3);
-- INSERT INTO users (username, email) 
-- VALUES 
-- ('Tim', 'tim@xy.com'),
-- ('Manny', 'manny@xy.com'),
-- ('Jo', 'Jo@xy.com'),
-- ('Keth', 'keth@xy.com'),
-- ('Lisa', 'lisa@xy.com'),
-- ('adam', 'adam@xy.com'),
-- ('Asma', 'asma@xy.com'),
-- ('Rayan', 'rayan@xy.com');

-- INSERT INTO categories (category_name) 
-- VALUES 
-- ('Science'),
-- ('Children'),
-- ('Nature'),
-- ('Countries'),
-- ('Traveling'),
-- ('Food'),
-- ('Health');
