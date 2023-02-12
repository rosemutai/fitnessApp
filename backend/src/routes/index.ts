import express from "express";
const { createContact } = require('../controllers/index')

const router = express.Router()

router.post('/contact', createContact )

module.exports = router