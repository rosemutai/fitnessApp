import express from "express";
const { createContact, subscribeToNewsletter } = require('../controllers/index')

const router = express.Router()

router.post('/contact', createContact )
router.post('/subscribe', subscribeToNewsletter)

module.exports = router