INSERT into product (image_url, name, price)
VALUES ($1, $2, $3) RETURNING *
