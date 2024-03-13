import pg from "pg";
import dotenv from 'dotenv';

dotenv.config();

//console.log(process.env)

const db = new pg.Client({
  user: process.env.USERNAMEE,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: 'StickyNotes',
  ssl: false,
});
db.connect();

export default db;