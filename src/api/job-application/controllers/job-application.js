const nodemailer = require('nodemailer');
const fs = require('fs');

module.exports = {
  sendForm: async (ctx) => {
    try {

      const {
        fullName,
        email,
        phoneNumber,
        position
      } = ctx.request.body;

      const file1 = ctx.request.files.file1;
      const file2 = ctx.request.files.file2 ? ctx.request.files.file2 : null;


      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: 'xpwo edmk ulha lukm',
        },
      });




      const emailMessage = {
        from: 'selmin@origin3agency.com',
        to: `selmin@origin3agency.com`,
        subject: `New Job Application - ${fullName} `,
        html: `<p>Full Name: <strong> ${fullName} </strong></p><br/>
        <p>Email: <strong> ${email}</strong></p><br/>
        <p>Phone number: <strong> ${phoneNumber}</strong></p><br/>
        <p>Position: <strong> ${position}</strong></p><br/>
       `,
        attachments: [
          {
            filename: `${fullName}  - CV.pdf`,
            path: file1.path
          },

        ]

      };
      if (file2 && file2.path) {
        emailMessage.attachments.push({
          filename: `${fullName}  - Cover Letter.pdf`,
          path: file2.path
        });
      }

      await transporter.sendMail(emailMessage);
      ctx.send({ message: `Email sent successfully! Sent to ${emailMessage.to}` });
    } catch (error) {
      console.error(error);
      ctx.send({ error: 'Failed to send email', details: error.toString() });
    }
  },
};
