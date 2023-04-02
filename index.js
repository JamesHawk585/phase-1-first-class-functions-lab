
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const copyOfDrivers = drivers.slice();


const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2)
} 

const returnLastTwoDrivers = function(array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const firstTwoDrivers = selectingDrivers[0](copyOfDrivers);
const lastTwoDrivers = selectingDrivers[1](copyOfDrivers);

// console.log(firstTwoDrivers);
// console.log(lastTwoDrivers);

function createFareMultiplier(multiplier) {
    return function(fare) {
    return fare * multiplier
    }
}

const fareDoubler = function fareDoubler(fare) {
    return fare * 2;
}

const fareTripler = function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(drivers, callbackFunction) {
    return callbackFunction(drivers);
    }

const logFirstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
// console.log(firstTwoDrivers);

const logLastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
// console.log(returnLastTwoDrivers);

console.log(firstTwoDrivers);
console.log(lastTwoDrivers);
