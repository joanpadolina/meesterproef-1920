const tesseract = require('node-tesseract-ocr');

async function imageToText(image) {
	const config = {
		lang: "eng",
	}

	return tesseract.recognize(image, config)
		.then(text => text)
		.catch(error => {
			console.log(error.message)
		})
}

module.exports = imageToText