const imageToText = require('../modules/createWorker')
const api = require('../modules/api')
const jwt = require('jsonwebtoken')

// scanned medicine id
const scanHistory = []

module.exports = async (req, res) => {
    
    if (req.file) {
        const image = `./uploads/${req.file.originalname}`
        const text = await imageToText(image)
        const meds = await api.getMedicineData(text)

        const cookieConfig = {
            maxAge: 1000000000
        }
        
        // add new medicine id
        const newScanHistory = scanHistory;
        scanHistory.push(meds[0].id)

        const scanned = jwt.sign({ medicine: newScanHistory }, 'secret')
        res.cookie('scanHistory', scanned, cookieConfig)

        res.render('pages/uploadImage', { text:text, meds:meds[0], image:req.file.originalname})
    } else {
        res.render('pages/uploadImage')
    }
}