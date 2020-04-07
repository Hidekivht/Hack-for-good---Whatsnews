const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio');
const client = new twilio(accountSid, authToken);
const getRandomNews = require('./services/getRandomNews');

const news = getRandomNews;

console.log('news received: ', news.title);

client.messages
        .create({
          from: 'whatsapp:+14155238886',
          to: 'whatsapp:+5511972201982',
          body: `teste de envio de mensagem whatsapp \n\n Testando 2 linha \n\nTítulo: ${news.title}`,
        }).then(message => console.log(message))