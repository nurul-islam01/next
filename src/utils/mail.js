const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'pop.hostinger.com',
  secure: true,
  port: 465,
  auth: {
    user: 'iqbal.hossan@bornil.shop',
    pass: 'bornil@Iqubal@20'
  }
});

exports.sendMail = (body) => {
  const { subject = '', email, name = '', message = '' } = body;

  return transporter.sendMail({
    from: 'contact@nurul.dev',
    to: 'nurul.islam3f@gmail.com',
    subject: `${subject} from ${email}`,
    text: message
  });
};
