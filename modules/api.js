const nodeFetch = require('node-fetch')
const stringSimilarity = require('string-similarity');
const FuzzySearch = require('fuzzy-search');

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

// find correct medicine by name
async function searchMedicine(value) {
    const medicines = await fetch()
    const fuzzy = new FuzzySearch(medicines, ['name']);
    const result = fuzzy.search(value);
    return result
}

// find one medicine by id
async function getMedicine(value) {
    const medicine = await fetchOne(value);
    return medicine[0]
}

// find multiple medicines by id
async function getMedicines(value) {
    const medicines = await fetch(value);
    const medicinesArray = medicines.filter(medicine => value.includes(medicine.id))
    return medicinesArray;
}

// find best match by name
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
    getMedicines,
    searchMedicine
}