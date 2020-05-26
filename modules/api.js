const nodeFetch = require('node-fetch')
const stringSimilarity = require('string-similarity');
const Fuse = require('fuse.js');

async function fetch() {
    const url = 'https://hva-cmd-meesterproef-ai.now.sh/medicines'
    const response = await nodeFetch(url)
    const json = await response.json()
    return json
}

async function fetchOne(id) {
    const url = `https://hva-cmd-meesterproef-ai.now.sh/medicines?q=${id}`
    const response = await nodeFetch(url)
    const json = await response.json()
    return json
}

// find best match in the data
async function searchMedicine(value) {
    const medicines = await fetch()
    
    const options = {
        includeScore: true,
        includeMatches: true,
        minMatchCharLength: 2,
        threshold: 0.2,
        keys: [
            'name',
            'registrationNumber'
        ]
    }

    const fuse = new Fuse(medicines, options)
    const searchResult = fuse.search(value)   
    console.log(searchResult);
     
    return searchResult
}

async function getMedicine(value) {
    const medicine = await fetchOne(value);
    return medicine[0]
}

// search function
async function getMedicineData(value) {
    const medicines = await fetch()
    const medicineNames = medicines.map(medicine => medicine.name)
    const medicine = stringSimilarity.findBestMatch(value, medicineNames).bestMatch
    const medicineData = medicines.filter(meds => meds.name == medicine.target)
    return medicineData
}

module.exports = {
    getMedicineData,
    getMedicine,
    searchMedicine
}