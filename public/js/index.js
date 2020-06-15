console.log('welcome to the clientside')

// document query
const medsSection = document.querySelector('.meds-result')
const uploadBtn = document.querySelector('.upload')
const inputFile = document.querySelector('#file')
const loader = document.querySelector('.loading-state')
const placeHolder = document.querySelector('.place-holder')
const imgPlaceHolder = document.querySelector('.imageplaceholder')
const formContainer = document.querySelector('.form-container')
const nav = document.querySelector('nav')
const imgSrc = document.querySelector('.placeholder-check')

window.addEventListener('scroll', e => {
    if (window.scrollY >= 45) {
        nav.children[0].childNodes[1].classList.add('scale-img')
        nav.classList.add('changeBg')
    } else {
        nav.children[0].childNodes[1].classList.remove('scale-img')
        nav.classList.remove('changeBg')
    }

})

const reader = new FileReader()
const previewImg = document.querySelector('.upload-image img')

reader.onload = e => {
    previewImg.src = e.target.result;
}
// https://medium.com/@KeithAlpichi/vanilla-js-building-an-image-selector-and-image-previewer-151cddc939e

async function imageToText(image) {

    const worker = Tesseract.createWorker({
        logger: m => console.log(m)
    });
    Tesseract.setLogging(true);
    work();

    async function work() {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');

        // let result = await worker.detect(image);
        // console.log(result.data);

        result = await worker.recognize(image);
        console.log(result.data);

        //   await worker.terminate();
    }
    c
    if(text){
        console.log('yes')
    }
}

function regexComply(stringResults) {
    const text = stringResults
    const regex = /(rvg \d+(\.\d)*)|(eu \d+(\.\d)*)| (rvh \d+(\.\d)*)/gi
    const found = text.match(regex)
    // console.log(found)
    return found
}

inputFile.addEventListener('change', (e) => {
    const img = e.target.files[0];
    const test = imageToText(img)
    console.log(test)
    reader.readAsDataURL(img);
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
} else {
    formContainer.style.display = "none"
}