// ARRAYS
var mapArray = ['Edgefield', 'Tanglewood', 'Ridgeview', 'Bleasdale Farmhouse', 'Grafton Farmhouse', 'High School', 'Asylum'];
var lightsArray = ['Candle', 'Flashlight', 'Strong Flashlight'];
var equipmentArray = ['EMF-reader', 'Spirit Box', 'Ghost Writing Book', 'Photo Camera', 'Video Camera', 'Crucifix', 'UV-flashlight', 'Head Mounted Camera', 'Lighter', 'Smudge Sticks', 'Glow Sticks', 'Infrared Light Sensor', 'Motion Sensor', 'Sound Sensor', 'Salt', 'Parabolic Microphone', 'Sanity Pills', 'Thermometer', 'Tripod'];

let button = document.querySelector('button');
let result = document.querySelector('div');

// FUNCTIONS
randomNumber = (min, max) => {
    let a = max - min + 1
    let b = Math.random() * a;
    let result = Math.floor(b) + min;
    return result;
}

var randomizeMap = () => {
    // var temp = [];
    var counter = 0;
    setInterval(() => {
        for (let i = 0; i < mapArray.length; i++) {
            if (counter === 1000) {
                break;
            } else {
                let index = randomNumber(0, mapArray.length - 1);
                result.innerText = mapArray[index];
                counter++;
            }
            console.log(i);
        }
    }, 10);
    // result = temp.push(result.innerText).toString();
    // console.log(temp);
}

var randomizeLight = () => {
    var counter = 0;
    var interval = setInterval(() => {
        for (let i = 0; i < lightsArray.length; i++) {
            if (counter === 500) {
                clearInterval(interval);
            } else {
                let index = randomNumber(0, lightsArray.length - 1);
                result.innerText = lightsArray[index];
                counter++;
            }
            console.log(i);
        }
    }, 10);
}

var randomizeEquipment = () => {
    var counter = 0;
    var interval = setInterval(() => {
        for (let i = 0; i < equipmentArray.length; i++) {
            if (counter === 3000) {
                clearInterval(interval);
            } else {
                let index = randomNumber(0, equipmentArray.length - 1);
                result.innerText = equipmentArray[index];
                counter++;
            }
            console.log(i);
        }
    }, 10);
}
