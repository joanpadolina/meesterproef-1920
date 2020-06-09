console.log('welcome to the clientside')

// document query
const medsSection = document.querySelector('.meds-result')
const uploadBtn = document.querySelector('.upload')
const inputFile = document.querySelector('#file')
const loader = document.querySelector('.loading-state')
const placeHolder = document.querySelector('.place-holder')
const imgPlaceHolder = document.querySelector('.imageplaceholder')
const formContainer = document.querySelector('.form-container')

const reader = new FileReader()
const previewImg = document.querySelector('.imageplaceholder img')

reader.onload = e => {
    previewImg.src = e.target.result;
}
// https://medium.com/@KeithAlpichi/vanilla-js-building-an-image-selector-and-image-previewer-151cddc939e

inputFile.addEventListener('change', (e) => {
    const img = e.target.files[0];
    reader.readAsDataURL(img);
        uploadBtn.click()

    // if (inputFile.files.length == 1) {
    //     console.log('yerps', inputFile.files)
    //     uploadBtn.click()
    // }
})

// uploadBtn button starts loading
uploadBtn.addEventListener('click', (e) => {
    setTimeout(() => {
        loader.className += " show"
    }, 400)
})

// animation end after content reveal
medsSection.addEventListener('load', () => {
    setTimeout(() => {
        loader.className += " show"
    }, 1000)

})

if (medsSection.childElementCount >= 1) {
    medsSection.classList.replace('meds-result', 'meds-results')
    placeHolder.className += " container"
    imgPlaceHolder.children[1].style.display = "none"
} else{
  formContainer.style.display ="none"
}

// const worker = Tesseract.createWorker({})

// async function getTextFromImage() {
//     await worker.load()
//     await worker.loadLanguage('nld')
//     await worker.initialize('nld')
//     await worker.setParameters({
//         tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxy'
//     })
//     const { data: { text } } = await worker.recognize(previewImg.src)

//     await worker.terminate()

//     return text
// }

// getTextFromImage()
//   .then(console.log)