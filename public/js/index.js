console.log('welcome to the clientside')

// document query
const medsSection = document.querySelector('.meds-result')
const uploadBtn = document.querySelector('.upload')
const inputFile = document.querySelector('#file')
const loader = document.querySelector('.loading-state')
const placeHolder = document.querySelector('.place-holder')
const imgPlaceHolder = document.querySelector('.imageplaceholder')
const formContainer = document.querySelector('.form-container')
//full page load
// window.addEventListener('load', function () {
//     setTimeout(() => {
//         loader.className += " hidden"
//     }, 0)
// })
inputFile.addEventListener('click', () => {
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
    formContainer.style.display ="none"
}