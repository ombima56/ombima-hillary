import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
export async function POST(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try{

    const { email, subject, message } = req.body();

    if (!email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    console.log(email, subject, message)
    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transport = nodemailer.createTransport({
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
    });

    const data = await transport.sendMail({
      from: `Hillary Ombima <hillaryombima6@gmail.com>`,
      to: email,
      subject,
      text: message,
      html: `
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>`
      ,
    });

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error });
  }
}