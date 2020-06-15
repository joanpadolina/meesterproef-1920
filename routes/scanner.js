const imageToText = require('../modules/createWorker')
const api = require('../modules/api')

module.exports = async (req, res) => {
    if (req.file) {
        const image = `./uploads/${req.file.originalname}`
        const text = await imageToText(image)
        const meds = await api.getMedicineData(text)

        // text.length = for pictures without text
        // meds.rating = for pictures with text but rating smimmilarity is low
        console.log(meds[0])

        try {
            if (!meds || text.length < 3) {
                res.render('pages/scan', {
                    text: text,
                    image: req.file.originalname
                })
            }
            // add new medicine id to history
            if(req.session.medicineScans){
                req.session.medicineScans.push(meds[0].id)

                res.render('pages/scan', {
                    text: text,
                    meds: meds[0],
                    image: req.file.originalname
                })
            }
        } catch {
            res.render('pages/scan', {
                text: text,
                meds: meds[0],
                image: req.file.originalname
            })
        }



    } else {
        res.render('pages/scan')
    }
}