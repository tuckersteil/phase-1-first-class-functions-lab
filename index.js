// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
let newArray; 
const returnFirstTwoDrivers = function(x) {
    newArray = [x[0], x[1]]
    return newArray
}

let Array2;
const returnLastTwoDrivers = function(x){
    Array2 = [x[2], x[3]]
    return Array2
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(num1){
    return function(num2) {
        return num1 * num2;
    }
}

const fareMultiplier = createFareMultiplier(2);
const fareQuintupler = createFareMultiplier(5);

function fareDoubler(y){
    return 2 * y
}

function fareTripler(t){
    return 3 * t
}

function selectDifferentDrivers (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}

