DELETE FROM properties
WHERE id = $1;

SELECT * FROM properties
WHERE user_id= $2;