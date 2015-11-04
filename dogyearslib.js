"use strict";

function calculateDogYears(humanYears, weight)
{
	let focalLength = 413.1781;
	let startAge = 25.48807;
	let startIncOffset = -2.35626;
	let eqCorrection = 134.9106;
	let ageIncOff = 2.369763;
	let startAgeOffset = 585.2361;
	let cutOffYear = 3;
	let cutOffMonths = cutOffYear * 12;
	
	let dogWeight = weight; 
	if (dogWeight < 5) {
		dogWeight = 5;
	}
	
	let dogAge = humanYears;
	
	if ( humanYears < cutOffYear ) {
		dogAge = cutOffYear;
	}
	
	let zb = ((dogWeight + startAgeOffset) * (dogWeight + startAgeOffset))/(eqCorrection * focalLength);
	let winc = zb + startIncOffset;
	
	let humanAge = (winc * (dogAge - ageIncOff)) + startAge;
	
	if ( humanYears < 3) {
		let humanAgeAt3 = humanAge;
		let underThreeFl = (humanAgeAt3 * humanAgeAt3)/(4 * cutOffMonths);
		let dogAgeInMonths = humanYears * 12;
		humanAge = Math.sqrt(4 * dogAgeInMonths * underThreeFl); 
	}
	return Math.round(humanAge * 10)/10;
}

module.exports = calculateDogYears;