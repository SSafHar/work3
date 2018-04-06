import * as express from 'express';
import { setInternalServerError } from '../utils/request-helpers';

export const emailRouter = express.Router();

import nodemailer = require('nodemailer');

const email = 'info@cerberus.team';
const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: email,
    pass: 'TheArt0fWar123'
  }
});
const sendMail = (to, res) => {
  transporter.sendMail(to, (error, info) => {
    if(error) {
      setInternalServerError(res, error);
      return;
    }
    res.send(nodemailer.getTestMessageUrl(info));
  });
};

emailRouter.post('/', (req, res) => {
  const emailData = req.body;

  const mailToCerberus = {
    from: email,
    to: email,
    subject: emailData.serviceTitle,
    html: `<b><i>${emailData.name}</i> ${emailData.email} <br> ${emailData.description}</b>`
  };

  const mailToSender = {
    from: email,
    to: emailData.email,
    subject: 'Cerberus response',
    html: `
            <b><i>Dear ${emailData.name}</i>
            <br>Thanks for applying. Your message is send to us and we will replay as soon as possible.</b>
          `
  };

  sendMail(mailToCerberus, res);
  sendMail(mailToSender, res);
});
