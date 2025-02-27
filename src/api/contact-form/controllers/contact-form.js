
const nodemailer = require('nodemailer');

module.exports = {
  sendForm: async (ctx) => {
    try {
      const {
        fullName,
        email,
        subject,
        message,
      } = ctx.request.body.data;



      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_TOKEN,
        },
        debug: true,
      }, {
        logger: true
      });



      let emailText =
        `Full Name: ${fullName}\n` +
        `Email: ${email}\n` +
        `${message}`;

      const emailMessage = {
        from: 'selmin@origin3agency.com',
        to: `selmin@origin3agency.com`,
        subject: subject,
        text: emailText,
      };

      await transporter.sendMail(emailMessage);
      ctx.send({ message: `Email sent successfully!` });
    } catch (error) {
      console.error(error)
      ctx.send({ error: 'Failed to send email', details: error.message });
    }
  },
};
