// https://github.com/SqueezyDough/meesterproef-1920/blob/master/dev-assets/js/scanner.js

const video = document.querySelector("#videoElement");
const window_path = window.location.pathname

if (navigator.mediaDevices.getUserMedia) {

  navigator.mediaDevices.getUserMedia({
    video: true
  })
  const window_path_split = window_path.split('/')
  console.log(window_path_split)

  switch (window_path_split[1]) {
    case 'upload-image-page':
      const tesseract_worker = Tesseract.createWorker({})

      navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            width: {
              ideal: 480
            },
            height: {
              ideal: 360
            },
            facingMode: 'enviroment'
          }
        })
        .then((stream) => {
          video.srcObject = stream
          recognizeRVG(tesseract_worker)
        })
        .catch((err) => {
          console.log('Error: ', err)
        })
      break;
  }
} else {
  console.log('Your browser down not support video streams')
}

function getBase64Image() {
  const canvas = document.createElement('canvas'),
    context = canvas.getContext('2d')
  canvas.width = video.offsetWidth
  canvas.height = video.offsetHeight
  context.drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight)
  return canvas.toDataURL('image/jpeg')
}

async function recognizeRVG(tesseract_worker) {
  let result = null
  const base64_image = getBase64Image()
  await tesseract_worker.load()
  await tesseract_worker.loadLanguage('eng')
  await tesseract_worker.initialize('eng')

  try {
    result = await tesseract_worker.recognize(base64_image)
    console.log(result.data.text)
    if (result.data.text === '') {
      throw 'No words detected'
    }

    // const code_prefix_index = result.data.words.findIndex(word => {
    //   return word.text.toLowerCase() === 'rvg' || word.text.toLowerCase === 'rvh' || word.text.toLowerCase === 'eu'
    // })

    // // Check if RVG has been found inside word list
    // if(code_prefix_index === -1) throw 'RVG/RVH not detected inside words list'

    // const detected_code = result.data.words[code_prefix_index +1]

    // const suspected_medicines_container = document.querySelector('.overview__cards')
    // appendTesseractOutput(detected_code)
    // appendLoadingState(suspected_medicines_container)

    // if(detected_code.choices.length > 1) {
    //   // TODO SEARCH API FOR ALL THE CHOICES IF THERE ARE ANY
    //   const ordered_coices = detected_code.choices.sort((a, b) => {
    //     return b.confidence - a.confidence
    //   })
    // } else {
    //   const suspected_code = {
    //     code: detected_code.text,
    //     confidence: detected_code.confidence
    //   }

    //   const suspected_medicines = await searchMedicine(suspected_code)

    //   const medicine_cards = await fetch('/upload-image-page', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(suspected_medicines)
    //   })
    //     .then(response => response.json())

    //   removeLoadingState(suspected_medicines_container)
    //   medicine_cards.forEach(card => {
    //     suspected_medicines_container.insertAdjacentHTML('beforeend', card)
    //   })
    // }
  } catch (error) {
    console.log(error)
    recognizeRVG(tesseract_worker)
  }
}