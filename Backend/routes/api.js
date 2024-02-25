import express from "express";
const router = express.Router();
import db from "../db.js";
import { v4 as uuidv4 } from "uuid";
//import cors from "cors";

//router.use(cors())

router.use(express.json())


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

// create a new todo
router.post('/todos', async (req, res) => {
  const { user_email, title, progress, date } = req.body
  console.log(user_email, title, progress, date)
  const id = uuidv4()
  try {
    const newToDo = await db.query(`INSERT INTO todos(id, user_email, title, progress, date) VALUES($1, $2, $3, $4, $5)`,
      [id, user_email, title, progress, date])
    res.json(newToDo) 
  } catch (err) {
    console.error(err)
  }
})

//module.exports = router; CommonJS

export default router; // ES6 (ECMAScript)