const imageToText = require('../modules/createWorker')
const api = require('../modules/api')

module.exports = async (req, res) => {

    if (req.file) {
        const image = `./uploads/${req.file.originalname}`
        const text = await imageToText(image)
        if (!text || text.length <= 3) {
            res.render('pages/uploadImage', {
                text: text,
                image: req.file.originalname
            })
        } else {
            const meds = await api.getMedicineData(text)
            res.render('pages/uploadImage', {
                text: text,
                meds: meds[0],
                image: req.file.originalname
            })
        }

    } else {
        res.render('pages/uploadImage')
    }
}