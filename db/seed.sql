\c movies_dev;



INSERT INTO movies (name, description, year, img, rating, favorite_actor, would_rewatch)
VALUES
  ('The Shawshank Redemption', 'Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.', 1994, 'image_url_1', 9, 'Tim Robbins, Morgan Freeman', true),
  ('Inception', 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', 2010, 'image_url_2', 8, 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page', false),
  ('La La Land', 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.', 2016, 'image_url_3', 8, 'Ryan Gosling, Emma Stone', true);

INSERT INTO reviews (movie_id, reviewer, title, content, rating)
VALUES
  (1, 'John', 'One of the Best Movies Ever', 'This movie is a masterpiece. The storytelling, the acting, everything is just perfect. Highly recommended.', 5),
  (2, 'Alex', 'Mind-Blowing Concept', 'Inception is a mind-bending movie that keeps you engaged throughout. The visuals and the concept are mind-blowing.', 4.5),
  (2, 'Michelle', 'Confusing but Brilliant', 'I enjoyed Inception, but its brilliance is evident here.', 4),
  (3, 'Emily', 'A Beautiful Love Story', 'La La Land is a beautiful and heartfelt love story. The music and performances are outstanding. I could watch this movie over and over again.', 4.5),
  (3, 'Michael', 'Good but Overrated', 'La La Land is visually stunning, and the chemistry between Ryan Gosling and Emma Stone is great. However, I feel it was a bit overhyped.', 3.5);


  