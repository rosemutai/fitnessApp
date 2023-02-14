import { Request, Response } from "express"
const Contact = require('../models/contact')

const createContact = async(req: Request, res: Response) => {
  const contact = req.body

  const newContact = new Contact(contact)

  try {
    await newContact.save()
    return res.status(201).json(newContact)
  } catch (error) {
     res.status(409).json({message: error.message}) 
  }

}

module.exports = { createContact}