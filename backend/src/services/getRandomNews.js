const apiNews = require('./apiNews');

async function getRandomNews() {
    try {
      const response = await apiNews.get('/top-headlines', {
        params: {
            q: 'corona',
            country: 'br',
            pageSize: 100,
            category: 'health'
        },
        headers: {
          Authorization: process.env.NEWS_API_TOKEN,
        }
      });
  
      const count = response.data.articles.length;
  
      const randomNumber = Math.floor(Math.random() * count);
  
      const articles = response.data.articles.map(article => ({
          title: article.title,
          source: article.source,
          description: article.description,
          link: article.url
      }));
  
      return articles[randomNumber];
  
    } catch(err){
      return err;
    }
}

module.exports = getRandomNews;