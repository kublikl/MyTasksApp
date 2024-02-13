import express from "express";
const router = express.Router();

import testAction from "../controllers/api/test.js";

router.get('/', testAction);


//module.exports = router; CommonJS

export default router; // ES6 (ECMAScript)