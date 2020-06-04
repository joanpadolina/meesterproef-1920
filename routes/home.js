const api = require('../modules/api')

module.exports = async (req, res) => {

    // if session exist show scanned history
    if(req.session.scanHistory) {
        const medicineIds = req.session.scanHistory;
        const medicineData = await api.getMedicines(medicineIds)
        console.log(medicineData);
        
        res.render('index', { history: medicineData })
    } else {
        req.session.scanHistory = [];
        res.render('index')
    }
    console.log(req.session);

}