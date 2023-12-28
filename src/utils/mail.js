const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  secure: true,
  port: 465,
  auth: {
    user: 'hello@nurulislam.dev',
    pass: 'sultan@20'
  }
});

exports.sendMail = (body) => {
  const { subject = '', email, name = '', message = '' } = body;

  return transporter.sendMail({
    from: 'hello@nurulislam.dev',
    to: 'nurul.islam@nurulislam.dev,nurul.islam3f@gmail.com',
    subject: `${subject} from ${email}`,
    text: message
  });
};
