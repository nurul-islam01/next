import { sendMail } from '@/utils/mail';

export default async function handler(req, res) {
  try {
    const { method } = req;
    switch (method) {
      case 'POST': {
        sendMail(req.body)
          .then(() => {
            res.status(200).send('Success');
          })
          .catch((err) => {
            console.log(err);
            res.status(417).json({
              message: err.message
            });
          });
        break;
      }
      case 'GET': {
        res.status(200).send({ hi: 'Hey love you' });
        break;
      }
      default:
        res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: 'api_one',
      message: err.message
    });
  }
}
