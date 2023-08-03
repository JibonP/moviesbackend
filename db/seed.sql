-- Insert movies
\c movies_dev
INSERT INTO movies (name, description, year, img, rating, favorite, actor, would_rewatch)
VALUES
  ('The Shawshank Redemption', 'Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.', 1994, 'image_url_1', 9, true, 'Tim Robbins, Morgan Freeman', true),
  ('Inception', 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', 2010, 'image_url_2', 8, true, 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page', false),
  ('La La Land', 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.', 2016, 'image_url_3', 8, false, 'Ryan Gosling, Emma Stone', true);

-- -- Insert reviews
-- INSERT INTO reviews (bookmark_id, reviewer, title, content, rating)
-- VALUES
--   (1, 'John', 'One of the Best Movies Ever', 'This movie is a masterpiece. The storytelling, the acting, everything is just perfect. Highly recommended.', 5),
  