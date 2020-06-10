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

//full page load
// window.addEventListener('load', function () {
//     setTimeout(() => {
//         loader.className += " hidden"
//     }, 0)
// })
inputFile.addEventListener('change', () => {
    if (inputFile.files.length == 1) {
        console.log('yerps', inputFile.files)
        uploadBtn.click()
    }

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