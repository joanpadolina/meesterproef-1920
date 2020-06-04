const imageToText = require('../modules/createWorker')
const api = require('../modules/api')

module.exports = async (req, res) => {
    
    if (req.file) {
        const image = `./uploads/${req.file.originalname}`
        const text = await imageToText(image)
        const meds = await api.getMedicineData(text)

        // add new medicine id to history
        req.session.scanHistory.push(meds[0].id)

        res.render('pages/uploadImage', { text:text, meds:meds[0], image:req.file.originalname})
    } else {
        res.render('pages/uploadImage')
    }
}