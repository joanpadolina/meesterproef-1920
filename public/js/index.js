console.log('welcome to the clientside')

// document query
const medsSection = document.querySelector('.meds-results')
const upload = document.querySelector('.upload')
const loader = document.querySelector('.loading-state')

// full page load
window.addEventListener('load', function(){
    setTimeout(()=>{
        loader.className += " hidden"
    },2000)
})

// upload button starts loading
upload.addEventListener('click', () => {
    setTimeout(()=>{
        loader.className += " show"
    },1000)

})
// animation end after content reveal
medsSection.addEventListener('load', () => {
    setTimeout(()=>{
        loader.className += " hidden"
    },1000)
})
