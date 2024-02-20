import express from "express";
const router = express.Router();
import db from "../db.js";


// get all todos

router.get('/todos', async (req, res) => {

  try {
    const todos = await db.query('SELECT * FROM todos')
    res.json(todos.rows)
  } catch (err) {
    console.error(err)
  }
})

//module.exports = router; CommonJS

export default router; // ES6 (ECMAScript)