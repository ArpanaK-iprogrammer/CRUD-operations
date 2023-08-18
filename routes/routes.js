const express = require('express');
const authController = require('../controller/authController');
const crudvalidation = require('../middleware/crudvalidation')
const router = express.Router();

router.post("/insert",crudvalidation,authController.insertData);
router.put("/update/:store_id",crudvalidation,authController.updateData);
router.put("/delete/:store_id",authController.deleteData);
router.get("/read",authController.readData)

module.exports = router;
