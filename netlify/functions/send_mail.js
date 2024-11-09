const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { fullname, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abhinavrajput207@gmail.com',
      pass: 'xtnp gsfp upzy nxxq',
    },
  });

  const mailOptions = {
    from: email,
    to: 'abhinavtechee@gmail.com',
    subject: `Portfolio Contact Us by ${fullname}`,
    html: `
      <html>
      <head>
        <style>
          body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          h2 {
            color: #4CAF50;
            border-bottom: 2px solid #4CAF50;
            padding-bottom: 10px;
          }
          p {
            line-height: 1.6;
            margin: 10px 0;
          }
          .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 0.9em;
            color: #777;
          }
        </style>
      </head>
      <body>
        <div class='container'>
          <h2>Contact Us Message</h2>
          <p><strong>Full Name:</strong> ${fullname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: 'Message sent successfully!',
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Failed to send message: ${error.message}`,
    };
  }
};