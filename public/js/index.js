console.log('welcome to the clientside')

// document query
const medsSection = document.querySelector('.meds-result')
const upload = document.querySelector('.upload')
const loader = document.querySelector('.loading-state')

//full page load
// window.addEventListener('load', function () {
//     setTimeout(() => {
//         loader.className += " hidden"
//     }, 0)
// })

// upload button starts loading

upload.addEventListener('click', (e) => {
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

console.log(medsSection.childElementCount)
if (medsSection.childElementCount > 3) {
    medsSection.classList.replace('meds-result', 'meds-results')
}