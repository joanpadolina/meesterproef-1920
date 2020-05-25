const {
	createWorker
} = require('tesseract.js')

const tesseract = require('node-tesseract-ocr');

const worker = createWorker({
	logger: m => console.log(m),
})

async function imageToText(image) {
	const config = {
		lang: "eng",
		oem: 1,
		psm: 3,
	}

	return tesseract.recognize(image, config)
		.then(text => text)
		.catch(error => {
			console.log(error.message)
		})
}

module.exports = imageToText