const jwt = require('jsonwebtoken')
const api = require('../modules/api')

module.exports = async (req, res) => {

    // if cookies exist show scanned history
    if(req.cookies.scanHistory) {
        const decoded = jwt.verify(req.cookies.scanHistory, 'secret')
        const medicineIds = decoded.medicine;
        const medicineData = await api.getMedicines(medicineIds)
        res.render('index', { history: medicineData })
    } else {
        res.render('index')
    }
}