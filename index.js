const names =   ["Jenni", "Sevil", "Robin", "Mike", "Niklas", "Olli", "Roland", "Sarah"];
const daytime = ["Guten Morgen", "Guten Abend", "Hi", "Hallo", "Tach", "Bonjour", "Buenos Dias", "Grüß Gott"];
const temperatur = [-12, -9, -7, -4, 0, 3, 6, 7, 9, 11, 12, 15, 18, 19, 22, 26, 29, 30, 32, 35];


const message = () => {
    if ((names.length > 0) && (daytime.length > 0)) {
        const rand1 =   getRandomInt(0, names.length); // Warum nicht names.length - 1 ?
        const rand2 =   getRandomInt(0, daytime.length);
        const rand3 =   getRandomInt(0, temperatur.length);
        console.log(daytime[rand1] + " " + names[rand2] + "! Die Temperatur heute beträgt " + temperatur[rand3] + " Grad.");
        names.splice(rand2, 1);
        daytime.splice(rand1, 1);
        temperatur.splice(rand3, 1);
        message();
    } else {
        console.log("Alle haben eine Nachricht erhalten.");
    } 
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  message();