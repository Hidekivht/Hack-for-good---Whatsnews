module.exports = {
  async index(req, res) {
    const fakeNewsList = {
      item_1: 'Governo do Brasil anuncia vacina do coronavírus',
      item_2: 'China anuncia vacina para coronavírus',
      item_3: 'Beber muita água e fazer gargarejo com água morna, sal e vinagre previne coronavírus',
      item_4: 'Beber álcool previne e mata o novo coronavirus',
      item_5: 'Comer ou beber chá de alho mata e previne o novo coronavirus',
      item_6: 'Cocaina mata o novo coronavirus',
      item_7: 'Prender a respiração por 10 segundos para descobrir se esta infectado com o novo coronavirus'
    }

    return res.json(fakeNewsList);
  }
}