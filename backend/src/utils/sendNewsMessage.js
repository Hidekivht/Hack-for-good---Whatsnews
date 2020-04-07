const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const connection = require('../database/connection');
const getRandomNews = require('../services/getRandomNews');

async function sendNewsMessage() {  

  const users = await connection('users')
    .select('*');
  
  users.map(async user => {
    const news = await getRandomNews();

    console.log(user.name);

    await client.messages
      .create({
        from: 'whatsapp:+14155238886',
        body: `Sua notícia de hoje \n*Título*: ${news.title}\n\n*Descrição*: ${news.description} \n\n*Link*: ${news.link}\n\nAs noticias são retiradas através da API NewsAPI ( https://newsapi.org/ )`,
        to: `${user.phone}`
      })
  })
}

module.exports = sendNewsMessage;