import { Request, Response } from "express"
const https = require('https')
const Contact = require('../models/contact')
require('dotenv').config()
const LISTID = process.env.LISTID

const sgMail = require('@sendgrid/mail')
const sgClient = require('@sendgrid/client')
sgMail.setApiKey(process.env.SENDGRIDAPI)
sgClient.setApiKey(process.env.SENDGRIDAPI)

type contactType = {
  conf_num: number,
  custom_fields: {}
}

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

// const subscribeToNewsletter = (req: Request, res: Response) => {

//   const {email} = req.body

//   let data = {
//     members: [{
//       email_address: email,
//       status: 'subscribed',
//     }]
//   }

//   const jsonData = JSON.stringify(data)
//   const url = `https://us14.api.mailchimp.com/3.0/lists/${LISTID}`
//   const options = {
//     method: "POST",
//     auth: process.env.MAILCHIMPAPI
//   }

//   const request = https.request(url, options, (response: Response) => {
//     if(response.statusCode === 200) {
//       return res.status(201).json({ msg: "You have successfully subscribed to our email"})
//     }
//     else {
//       return res.status(409).json({ msg: "Failed to subscribe to our email, please try again later"})
//     }
//   })
//   request.write(jsonData)
//   request.end()

// }

function randNum() {
 return Math.floor(Math.random() * 90000) + 10000;
}

async function addContact( email:string, confNum:number) {
 const customFieldID = await getCustomFieldID('conf_num');

  const data = {
   "contacts": [{
     "email": email,
     "custom_fields": {}
   }]
  };
 data.contacts[0].custom_fields[customFieldID] = confNum;
 const request = {
   url: `/v3/marketing/contacts`,
   method: 'PUT',
   body: data
 }
 return sgClient.request(request);
}

async function getCustomFieldID(customFieldName:string) {
 const request = {
   url: `/v3/marketing/field_definitions`,
   method: 'GET',
 }
 const response = await sgClient.request(request);
 const allCustomFields = response[1].custom_fields;
 return allCustomFields.find(x => x.name === customFieldName).id;
}

const subscribeToNewsletter = async (req: Request, res: Response) => {

  const confirmationNum :number = randNum()
  const params = new URLSearchParams({
    conf_num: confirmationNum.toString(),
    email: req.body.email,
  })

  const confirmationURL = req.protocol + '://' + req.headers.host + '/confirm/?' + params
  const msg = {
    to: req.body.email,
    from: 'rchepngetich0@gmail.com',
    subject: `Confirm your subscription to our newsletter`,
    html: `Hello,<br>Thank you for subscribing to our newsletter. 
      Please complete and confirm your subscription by <a href="${confirmationURL}"> clicking here</a>.`
  }
    await addConntact(req.body.email, confirmationNum)
    await sgMail.send(msg)
    res.render('message', 
    { message: 'Thank you for signing up for our newsletter! Please complete the process by confirming the subscription in your email inbox.' });

}

module.exports = { createContact, subscribeToNewsletter}