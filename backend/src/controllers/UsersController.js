const connection = require('../database/connection');

module.exports = {
  async create(req, res) {

    if(!req.body.setActive) {
      const { phone } = req.body;

      console.log(phone);

      await connection('users').where({
        phone: phone
      }).delete();

      return res.json({ message: 'Record deleted' });
    }

    const { name, city, uf, phone } = req.body;

    const isRegistered = await connection('users').where({
      phone
    }).select('*');

    if (isRegistered.length > 0) {
      await connection('users').where({
        phone
      }).update({
        name,
        city,
        uf,
        active: true,
      });

      return res.json(isRegistered[0]);
    }

    await connection('users').insert({
      name,
      city,
      uf,
      phone
    });

    const register = await connection('users').where({
      phone
    }).select('*');

    return res.json(register[0]);
  },

  async index(req, res) {
    const result = await connection('users').select('*');

    return res.json(result);
  }
}