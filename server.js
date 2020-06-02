const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT

const upload = require('./modules/multer')
const cookieParser = require('cookie-parser')

//routes
const scanImage = require('./routes/scanner')
const search = require('./routes/search')
const home = require('./routes/home')
const medicine = require('./routes/medicine')
const uploadPage = require('./routes/uploadPage')

app
    .use(express.urlencoded({
        extended: true
    }))
    .use(express.static('public'))
    .use(cookieParser())
    .use('/image', express.static('uploads'))
    .set('view engine', 'ejs')
    .set('views', 'views')
    .get('/', home)
    .get('/upload-image-page', uploadPage)
    .get('/search', search)
    .get('/medicine/:id', medicine)
    .post('/upload-image-page', upload, uploadPage)
    .post('/upload', upload, scanImage)

app.listen(port, () => console.log('listening to ' + port))