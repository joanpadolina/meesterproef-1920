const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT

const upload = require('./modules/multer')

//routes
const scanImage = require('./routes/scanner')
const search = require('./routes/search')
const medicine = require('./routes/medicine')
const home = require('./routes/home')
const uploadPage = require('./routes/uploadPage')

app
    .use(express.urlencoded({
        extended: true
    }))
    .use(express.static('public'))
    .use('/image', express.static('uploads'))
    .set('view engine', 'ejs')
    .set('views', 'views')
    .get('/upload-image-page', uploadPage)
    .get('/search', search.get)
    .post('/search', search.post)
    .post('/upload-image-page', upload, uploadPage)
    .get('/search', search)
    .get('/medicine/:id', medicine)
    .post('/upload', upload, scanImage)

app.listen(port, () => console.log('listening to ' + port))