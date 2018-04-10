SELECT * FROM properties
WHERE user_id = $1
AND rent >= $2;