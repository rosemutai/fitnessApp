import { Request, Response } from "express"
const https = require('https')
const Contact = require('../models/contact')
require('dotenv').config()
const LISTID = process.env.LISTID

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

const subscribeToNewsletter = (req: Request, res: Response) => {

  const {email} = req.body

  let data = {
    members: [{
      email_address: email,
      status: 'subscribed',
    }]
  }

  const jsonData = JSON.stringify(data)
  const url = `https://us14.api.mailchimp.com/3.0/lists/${LISTID}`
  const options = {
    method: "POST",
    auth: process.env.MAILCHIMPAPI
  }

  const request = https.request(url, options, (response: Response) => {
    if(response.statusCode === 200) {
      return res.status(201).json({ msg: "You have successfully subscribed to our email"})
    }
    else {
      return res.status(409).json({ msg: "Failed to subscribe to our email, please try again later"})
    }
  })
  request.write(jsonData)
  request.end()

}

module.exports = { createContact, subscribeToNewsletter}