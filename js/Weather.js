var temperatures = [-11.2, 14.4, 13.0, 17.3, 21.7, 18.2, 28];
var temperatureUpperLimits = [0, 15, 20, 25, 50];
var offers = [
    "Ma forró csokit is árusítunk.",
    "Melegedj át egy teával nálunk!",
    "Ma finom sütivel várunk.",
    "Ma fagyit is kínálunk.",
    "Hűsítsd le magad egy jéghideg limonádéval!"
];

function weatherWidget() {
    const day = document.querySelector('#day').value;
    const temperatureDiv = document.querySelector('#temperature');
    temperatureDiv.innerHTML = temperatures[day] + ' &deg;C';
    for (let i = 0; i < temperatureUpperLimits.length; i++) {
        if (temperatures[day] <= temperatureUpperLimits[i]) {
            temperatureDiv.innerHTML += '<br>' + offers[i] + '</span>';
            break;
        }
    }
}

document.getElementById('min').innerHTML = "Minimum: " + minTemperature() + ' &deg;C';
document.getElementById('max').innerHTML = "Maximum: " + maxTemperature() + ' &deg;C';
document.getElementById('avg').innerHTML = "Átlag: " + avgTemperature().toFixed(2) + ' &deg;C';

function minTemperature() {
    let min = temperatures.length != 0 ? temperatures[0] : 0;
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] < min) {
            min = temperatures[i]
        }
    }
    return min;
}


function maxTemperature() {
    let max = temperatures.length != 0 ? temperatures[0] : 0;
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] > max) {
            max = temperatures[i]
        }
    }
    return max;
}


function avgTemperature() {
    let avg = 0;
    for (let i = 0; i < temperatures.length; i++) {
        avg += temperatures[i];
    }
    return temperatures.length != 0 ? avg / temperatures.length : 0;
}