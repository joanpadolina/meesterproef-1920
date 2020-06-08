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

async function getMedicine(value) {
    const medicine = await fetchOne(value);
    return medicine[0]
}

// find best match
async function getMedicineData(value) {
    const medicines = await fetch()
    const rvgResults = stringifyJson(value)
    const final = rvgResults.split(' ')
    const medicineNames = medicines.map(medicine => medicine.name)
    const medicine = stringSimilarity.findBestMatch(value, medicineNames).bestMatch

    if (rvgResults) {
        const rvgData = medicines.filter(meds => meds.registrationNumber.includes(final[1]))
        return rvgData
    }
    if (value) {
        const medicineData = medicines.filter(meds => meds.name == medicine.target)
        return medicineData
    } else {

        const noValue = "No value found"
        return noValue
    }
}

function regexComply(stringResults) {
    const text = stringResults
    const regex = /(rvg \d+(\.\d)*)|(eu \d+(\.\d)*)| (rvh \d+(\.\d)*)/gi
    const found = text.match(regex)
    // console.log(found)
    return found
}

function stringifyJson(value) {
    return JSON.stringify(regexComply(value)).replace(/[\[\]"]+/g, "")
}

module.exports = {
    getMedicineData,
    getMedicine,
    searchMedicine
}