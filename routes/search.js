const api = require('../modules/api')

module.exports = async function (req,res) {
    const medicine = await api.searchMedicine(req.query.medicine)
    res.render('search', { medicine })
}