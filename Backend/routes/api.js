import express from "express";
const router = express.Router();
import db from "../db.js";


// get all todos

router.get('/todos/:userEmail', async (req, res) => {
  console.log(req)
  const { userEmail }  = req.params
  console.log(userEmail)
  try {
    const todos = await db.query('SELECT * FROM todos WHERE user_email = $1', [userEmail])
    res.json(todos.rows)
  } catch (err) {
    console.error(err)
  }
})

//module.exports = router; CommonJS

export default router; // ES6 (ECMAScript)