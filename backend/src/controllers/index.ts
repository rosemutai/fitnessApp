import { Request, Response } from "express"
const Contact = require('../models/contact')

const createContact = async(req: Request, res: Response) => {
  const contact = req.body

  const contactToSave = new Contact(contact)

  try {
    const contact = await Contact.save(contactToSave)
    return res.status(201).json(contact)
  } catch (error) {
     res.status(409).json({message: error.message}) 
  }

}

module.exports = { createContact}