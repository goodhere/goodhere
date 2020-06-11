CREATE OR REPLACE VIEW "public"."favorites_count" AS 
 SELECT favorites.record_id,
    count(DISTINCT favorites.user_id) AS count
   FROM favorites
  WHERE (favorites.deleted_at IS NULL)
  GROUP BY favorites.record_id;
