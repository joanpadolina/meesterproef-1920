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

inputFile.addEventListener('change', (e) => {
    const img = e.target.files[0];
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