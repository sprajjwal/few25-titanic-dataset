// ================================================================

// Titanic Dataset challenges! 

// Your goal is to write some functions that will extract
// relevant data from the dataset. 

// Write your code here in this file. 

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant 
// piece of information from the data and return it. 

// =================================================================

// 1 ---------------------------------------------------------------
// Return the total number of passengers. 
// Return a number.

function getTotalPassengers(data) {
	return data.length
}

// 2 ---------------------------------------------------------------
// Return the number of surviving passengers. A passenger survived 
// if their survived property is "Yes".
// Return a number.

function getSurvivorCount(data) {
	return data.reduce((acc, passenger ) => {
		return passenger.fields.survived === "No" ? acc + 0 : acc + 1
	}, 0)
}

// 3 ---------------------------------------------------------------
// Return the number of passengers who did not survive. A passenger
// Return a number.

function getCasualityCount(data) {
	return data.reduce((acc, passenger ) => {
		return passenger.fields.survived === "Yes" ? acc + 0 : acc + 1
	}, 0) 
}

// 4 ---------------------------------------------------------------
// Return the number of passengers in any class. This function 
// takes the data and the passenger class a string. Fins all of the 
// passengers whose pclass matches and return the count. 
// Return a number

function countPassengersInClass(data, pclass) {
	return data.reduce((acc, passenger ) => {
		return passenger.fields.pclass === pclass ? acc + 1 : acc + 0
	}, 0)
}

// 5 ---------------------------------------------------------------
// Return the number of survivors in a class. This function takes 
// the data and passenger class. Return only passengers  

function getSurvivorCountForClass(data, pclass) {
	return data.reduce((acc, passenger ) => {
		return passenger.fields.survived === "Yes" && passenger.fields.pclass === pclass ? acc + 1 : acc + 0
	}, 0)
}

// 6 ---------------------------------------------------------------
// Return the number of passengers who did not survive in a class.
// This function takes the data and the passenger class and returns 
// the number of passengers who did not survive for that class. 

function getCasualityCountForClass(data, pclass) {
	return data.reduce((acc, passenger ) => {
		return passenger.fields.survived === "No" && passenger.fields.pclass === pclass ? acc + 1 : acc + 0
	}, 0)
}

// 7 ---------------------------------------------------------------
// Return the age of the youngest passenger. You'll need to filter
// passenger data where the age is missing. 

function getMinAge(data) {
	return Math.min(...data.filter(passenger => passenger.fields.age !== undefined).map(item => item.fields.age))
}

// 8 ---------------------------------------------------------------
// Return the age of the oldest passenger. 

function getMaxAge(data) {
	return Math.max(...data.filter(passenger => passenger.fields.age !== undefined).map(item => item.fields.age))
}

// 9 ---------------------------------------------------------------
// Return the number of passengers that embarked at a given stop. 
// Each passenger has a embarked property with a value of: S, C,
// or Q. 

function getEmbarkedCount(data, embarked) {
	return data.filter(passenger => passenger.fields.embarked === embarked).length
}

// 10 ---------------------------------------------------------------
// Return the lowest fair paid by any passenger. The fare is missing 
// for some passengers you'll need to filter this out! 

function getMinFare(data) {
	return Math.min(...data.filter(passenger => passenger.fields.fare !== undefined).map(item => item.fields.fare))
}

// 11 ---------------------------------------------------------------
// Return the highest fare paid by any passenger. Some of the 
// passengers are missing data for fare.

function getMaxFare(data) {
	return Math.max(...data.filter(passenger => passenger.fields.fare !== undefined).map(item => item.fields.fare))
}

// 12 ---------------------------------------------------------------
// Return the count of passengers by gender. 

function getPassengersByGender(data, gender) {
	return data.filter(passenger => passenger.fields.sex === gender).length
}

// 13 ---------------------------------------------------------------
// Return the number of passengers who survived by gender. 

function getSurvivorsByGender(data, gender) {
	return data.filter(passenger => passenger.fields.survived === "Yes" && passenger.fields.sex === gender).length
}

// 14 ---------------------------------------------------------------
// Return the number of passengers who did not survived by gender. 

function getCasualitiesByGender(data, gender) {
	return data.filter(passenger => passenger.fields.survived === "No" && passenger.fields.sex === gender).length
}

// 15 ---------------------------------------------------------------
// Write a function that returns an array of unique values for any
// property in the data. For example If we needed to find number 
// of passenger classes from data this function should return:
// [1,2,3]. If you wanted to find the number of embarkations the 
// function should return: ['S', 'C', 'Q']

function getUniqueValues(data, property) {
	const items = new Set()
	data.forEach(passenger => items.add(passenger.fields[property]))
	return Array.from(items)
}

// 16 --------------------------------------------------------------
// Return the total of all fares paid. 

function getTotalFare(data) {
	return data.reduce((acc, passenger) => acc = passenger.fields.fare !== undefined ? acc + passenger.fields.fare : acc, 0 )
}

// 17 --------------------------------------------------------------
// Return the average fare paid.

function getAverageFare(data) {
	const fares = data.filter(passenger => passenger.fields.fare !== undefined).map(passenger => passenger.fields.fare)
	return fares.reduce((acc, fare) => acc + fare, 0) / fares.length
}

// 18 --------------------------------------------------------------
// Return the median fare. The median is the value equal distance
// from the minimum and maximum values. 

function getMedianFare(data) {
	let fares = data.filter(passenger => passenger.fields.fare !== undefined).map(passenger => passenger.fields.fare)
	fares = fares.sort((a, b) => a - b);
	const mid = Math.floor(fares.length / 2)
	return fares.length % 2 !== 0 ? fares[mid] : (fares[mid - 1] + fares[mid]) / 2
}

// 19 --------------------------------------------------------------
// Return the average age of all passengers. 

function getAverageAge(data) {
	const ages = data.filter(passenger => passenger.fields.age !== undefined).map(passenger => passenger.fields.age)
	return ages.reduce((acc, age) => acc + age, 0) / ages.length
}

// 20 --------------------------------------------------------------
// Return the median age from passengers. 

function getMedianAge(data) {
	let ages = data.filter(passenger => passenger.fields.age !== undefined).map(passenger => passenger.fields.age)
	ages = ages.sort((a, b) => a - b);
	const mid = Math.floor(ages.length / 2)
	return ages.length % 2 !== 0 ? ages[mid] : (ages[mid - 1] + ages[mid]) / 2
}

// 21 --------------------------------------------------------------
// 

function getAverageAgeByGender(data, gender) {
	const ages = data.filter(passenger => passenger.fields.age !== undefined && passenger.fields.sex === gender)
		.map(passenger => passenger.fields.age)
	return ages.reduce((acc, age) => acc + age, 0) / ages.length
}

// 22 ---------------------------------------------------------------
// Return the number of passengers who survived by passenger class.

function getSurvivorsByPClass(data, pclass) {
	return data.filter(passenger => passenger.fields.pclass === pclass && passenger.fields.survived === "Yes").length
}

// 23 ---------------------------------------------------------------
// Return the number of passengers who survived by passenger class.

function getCasualitiesByPClass(data, pclass) {
	return data.filter(passenger => passenger.fields.pclass === pclass && passenger.fields.survived === "Yes").length
}


// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports.getTotalPassengers = getTotalPassengers
module.exports.getSurvivorCount = getSurvivorCount
module.exports.getCasualityCount = getCasualityCount
module.exports.getUniqueValues = getUniqueValues
module.exports.countPassengersInClass = countPassengersInClass
module.exports.getSurvivorCountForClass = getSurvivorCountForClass
module.exports.getCasualityCountForClass = getCasualityCountForClass
module.exports.getMinAge = getMinAge
module.exports.getMaxAge = getMaxAge
module.exports.getEmbarkedCount = getEmbarkedCount
module.exports.getMaxFare = getMaxFare
module.exports.getMinFare = getMinFare
module.exports.getPassengersByGender = getPassengersByGender
module.exports.getSurvivorsByGender = getSurvivorsByGender
module.exports.getCasualitiesByGender = getCasualitiesByGender
module.exports.getSurvivorsByPClass = getSurvivorsByPClass
module.exports.getCasualitiesByPClass = getCasualitiesByPClass
module.exports.getTotalFare = getTotalFare
module.exports.getAverageFare = getAverageFare
module.exports.getMedianFare = getMedianFare
module.exports.getAverageAge = getAverageAge
module.exports.getMedianAge = getMedianAge
module.exports.getAverageAgeByGender = getAverageAgeByGender