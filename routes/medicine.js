const api = require('../modules/api')

module.exports = async (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    const medicine = await api.getMedicine(id);
    res.render('pages/medicineSearch', { medicine } )
} 