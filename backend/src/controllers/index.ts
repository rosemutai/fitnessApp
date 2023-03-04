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
  email: string
  conf_num: number,
  custom_fields: {customm_field: number}
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

  const confirmationNum :number = Math.floor(Math.random() * 90000) + 10000;
  const params = new URLSearchParams({
    conf_num: confirmationNum.toString(),
    email: req.body.email,
  })

  const confirmationURL = `${req.protocol}://${req.headers.host}/confirm/?${params}`
  const msg = {
    to: req.body.email,
    from: process.env.SENDEREMAIL,
    subject: `Confirm your subscription to our newsletter`,
    html: `Hello,<br>Thank you for subscribing to our newsletter. 
      Please complete and confirm your subscription by <a href="${confirmationURL}"> clicking here</a>.`
  }

  try {
    await addContact(req.body.email, confirmationNum)
    await sgMail.send(msg)
    res.status(200).send('Thank you for subscribing! Please check your email to confirm your subscription.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error subscribing. Please try again later.');
  }

}

// confirmation link
const confirmEmail = async (req: Request, res: Response) => {
  const email = req.query.email?.toString()
  const conf_num = parseInt(req.query.conf_num?.toString())
  try {
    // Update subscriber status to confirmed in SendGrid marketing contact list
    await confirmContact(email, confNum);
    // Send welcome email to subscriber
    const welcomeMsg = {
      to: email,
      from: process.env.SENDEREMAIL,
      subject: 'Welcome to our newsletter!',
      html: `Hello,<br>Thank you for subscribing to our newsletter. We'll send you updates and news about our company regularly. Stay tuned!`,
    };
    await sgMail.send(welcomeMsg)
    res.status(200).send('Thank you for confirming your subscription. You will receive a welcome email shortly.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error confirming subscription. Please try again later.');
    
  }
}

// Add subscriber to SendGrid marketing contact list
async function addContact(email: string, confNum: number) {
  const customFieldID = await getCustomFieldID('conf_num');
  const data: any = {
    contacts: [
      {
        email: email,
        custom_fields: {},
      },
    ],
  };
  data.contacts[0].custom_fields[customFieldID] = confNum;
  const request = {
    url: '/v3/marketing/contacts',
    method: 'PUT',
    body: data,
  };
  await sgClient.request(request);
}



module.exports = { createContact, subscribeToNewsletter}