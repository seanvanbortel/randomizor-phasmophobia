// ARRAYS
var mapArray = ['Edgefield', 'Tanglewood', 'Ridgeview', 'Bleasdale Farmhouse', 'Grafton Farmhouse', 'High School', 'Asylum'];
var lightsArray = ['Candle', 'Flashlight', 'Strong Flashlight'];
var equipmentArray = ['EMF-reader', 'Spirit Box', 'Ghost Writing Book', 'Photo Camera', 'Video Camera', 'Crucifix', 'UV-flashlight', 'Head Mounted Camera', 'Lighter', 'Smudge Sticks', 'Glow Sticks', 'Infrared Light Sensor', 'Motion Sensor', 'Sound Sensor', 'Salt', 'Parabolic Microphone', 'Sanity Pills', 'Thermometer', 'Tripod'];

let button = document.querySelector('button');
let result = document.getElementById("randomizer");
let resultOnPage = document.getElementById("result");

// FUNCTIONS
randomNumber = (min, max) => {
    let a = max - min + 1
    let b = Math.random() * a;
    let result = Math.floor(b) + min;
    return result;
}

var randomizeMap = () => {
    var counter = 0;
    setInterval(() => {
        for (let i = 0; i < mapArray.length; i++) {
            if (counter === 50) {
                clearInterval();
            }
            if (counter < 50) {
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
            if (counter === 300) {
                clearInterval();
            }
            if (counter < 300) {
                let index = randomNumber(0, lightsArray.length - 1);
                result.innerText = lightsArray[index];
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
                result.innerText = equipmentArray[index];
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
            resultOnPage.innerHTML = temp[i] + '<br>' + temp[i - 1] + '<br>' + temp[i - 2] + '<br>';
        }

        console.log(element);
    });
    console.log("Counter: " + counter + " Result: " + result.innerText + " Temp: " + temp);

}