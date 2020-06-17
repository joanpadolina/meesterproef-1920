const imageToText = require('../modules/createWorker')
const api = require('../modules/api')
const fs = require('fs')

module.exports = async (req, res) => {    
    if (req.file) {
        if (req.file.filename.includes('at')) {
            res.render('pages/scan', {
                image: req.file.filename,
                text: 'No data'
            })
        }
        const image = `./${req.file.path}`
        const text = await imageToText(image)
        const meds = await api.getMedicineData(text)
        try {
            // add new medicine id to history
            if (!req.session.medicineScans) {
                req.session.medicineScans = []
                req.session.medicineScans.push(meds[0].id)
                res.render('pages/scan', {
                    text: text,
                    meds: meds[0],
                    image: req.file.filename
                })
            } else {
                req.session.medicineScans.push(meds[0].id)
                res.render('pages/scan', {
                    text: text,
                    meds: meds[0],
                    image: req.file.filename
                })
            }
        } catch {
            console.log(meds)
            if (!meds[0] || !meds[0].id) {
                res.render('pages/scan', {
                    text: text,
                    image: req.file.filename
                })
            }
        }
        
        fs.unlink(req.file.path, function(err) {
            if(err && err.code == 'ENOENT') {
                // file doens't exist
                console.info("File doesn't exist, won't remove it.");
            } else if (err) {
                // other errors, e.g. maybe we don't have enough permission
                console.error("Error occurred while trying to remove file");
            } else {
                console.info(`removed`);
            }
        });
    } else {
        res.render('pages/scan')
    }
}