import { db } from "../database/db.js";

export async function findAllProducts(req, res) {
  try {
    const products = await db.query("SELECT * FROM produtos");
    res.send(products.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function findProductsById(req, res) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) return res.sendStatus(400);

  try {
    const product = await db.query(
			`SELECT * FROM produtos WHERE id = $1;`, 
			[id]
		);

		if(product.rows.length === 0) return res.sendStatus(404);

    res.send(product.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function createProduct(req, res) {
  const { nome, preco, condicao } = req.body;

  try {
    await db.query(
      `INSERT INTO produtos (nome, preco, condicao) VALUES ($1, $2, $3);`,
      [nome, preco, condicao]
    );
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
