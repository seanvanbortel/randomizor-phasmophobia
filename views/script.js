// ARRAYS
var mapArray = ['Edgefield', 'Tanglewood', 'Ridgeview', 'Bleasdale Farmhouse', 'Grafton Farmhouse', 'High School', 'Sunny Meadows', 'Sunny Meadows Restricted', 'Prison', 'Camp Woodwind', 'Maple Lodge Campsite'];
var lightsArray = ['Flashlight'];
var equipmentArray = ['EMF-reader', 'Spirit Box', 'Ghost Writing Book', 'Photo Camera', 'Video Camera', 'Crucifix', 'UV-flashlight', 'Head Gear', 'Igniter', 'Firelight', 'Incense', 'Motion Sensor', 'Sound Sensor', 'Salt', 'Parabolic Microphone', 'Sanity Medication', 'Thermometer', 'Tripod'];

let button = document.querySelector('button');
let result = document.getElementById("randomizer");
let resultOnPage = document.getElementById("result");

let darkMode = localStorage.getItem("dark-mode");

// FUNCTIONS
randomNumber = (min, max) => {
    let a = max - min + 1
    let b = Math.random() * a;
    let result = Math.floor(b) + min;
    return result;
}

function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

var randomizeMap = () => {
    var counter = 0;
    setInterval(() => {
        for (let i = 0; i < mapArray.length; i++) {
            if (counter === 1200) {
                clearInterval();
            }
            if (counter < 1200) {
                let index = randomNumber(0, mapArray.length - 1);
                result.innerText = mapArray[index];
                counter++;
            }
        }
    }, 20);
}



// result = temp.push(result.innerText).toString();
// console.log(temp);

var randomizeLight = () => {
    var counter = 0;
    setInterval(() => {
        for (let i = 0; i < lightsArray.length; i++) {
            if (counter === 100) {
                clearInterval();
            }
            if (counter < 100) {
                let index = randomNumber(0, lightsArray.length - 1);
                result.innerText = lightsArray[index] + ' ' + romanize(randomNumber(1,3));
                counter++;
            }
        }
    }, 20);
}

var temp = [];

var randomizeEquipment = () => {
    var counter = 0;
    setInterval(() => {
        for (let i = 0; i < equipmentArray.length; i++) {
            if (counter === 1000) {
                clearInterval();
            }
            if (counter < 1000) {
                let index = randomNumber(0, equipmentArray.length - 1);
                result.innerText = equipmentArray[index] + ' ' + romanize(randomNumber(1,3));
                counter++;
            }
        }
    }, 20);
    temp.push(result.innerText);
    temp.forEach(element => {
        for (let i = 0; i < temp.length; i++) {
            if (temp[0] == "Press the button") {
                temp.shift();
            }
            if (temp[i] != undefined) {
                resultOnPage.innerHTML = temp[i];
            }
            if (temp[i - 1] != undefined) {
                resultOnPage.innerHTML = temp[i] + '<br>' + temp[i - 1];
            }
            if (temp[i - 2] != undefined) {
                resultOnPage.innerHTML = temp[i] + '<br>' + temp[i - 1] + '<br>' + temp[i - 2] + '<br>';
            }
        }

        console.log(element);
    });
    console.log("Counter: " + counter + " Result: " + result.innerText + " Temp: " + temp);

}

const toggleDarkMode = () => {
    let body = document.querySelector('body');
    body.classList.toggle("dark-mode");
    if (darkMode == "enabled") {
        localStorage.setItem("dark-mode", "disabled");
    }
    else {
        localStorage.setItem("dark-mode", "enabled");
    }
}