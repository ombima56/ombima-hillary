/* eslint-disable no-undef */
import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // --- Google OAuth and Gmail API setup ---
    // In a real application, the access_token would be securely obtained
    // after the user completes the OAuth consent flow and stored/retrieved securely.
    // For demonstration, we'll assume an access_token is available.
    // You would typically get this from a database or session after the OAuth handshake.
    const accessToken = process.env.GOOGLE_ACCESS_TOKEN; // Placeholder for access token

    if (!accessToken) {
      return NextResponse.json({ error: 'Google access token not available. Please complete OAuth flow.' }, { status: 401 });
    }

    const oauth2Client = new google.auth.OAuth2(
      process.env.VITE_Client_ID,
      process.env.VITE_Client_SECRET,
      // The redirect URI for your OAuth flow. This should match what you configured in Google Cloud Console.
      // For this send route, it's not directly used, but it's part of OAuth2Client setup.
      // You'll define a proper redirect URI when setting up the OAuth callback route.
      'http://localhost:3000/api/auth/google/callback' // Placeholder redirect URI
    );

    oauth2Client.setCredentials({ access_token: accessToken });

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    const raw = Buffer.from(
      `From: ${email}\r\n` +
      `To: ${process.env.RECIPIENT_EMAIL}\r\n` + // Use the recipient email from env
      `Subject: ${subject}\r\n` +
      `Content-Type: text/html; charset=utf-8\r\n` +
      `Content-Transfer-Encoding: quoted-printable\r\n` +
      `\r\n` +
      `<h1>${subject}</h1>\n` +
      `<p>Thank you for contacting us!</p>\n` +
      `<p>New message submitted:</p>\n` +
      `<p>${message}</p>`
    ).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: raw,
      },
    });

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}