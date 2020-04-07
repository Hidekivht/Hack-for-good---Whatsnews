const getRandomNews = require('../services/getRandomNews');

module.exports = {
  async index(req, res) {
    const randomNews = await getRandomNews();

    return res.json(randomNews);
  },

  async create(req, res) {
    
  }
}