const names =   ["Jenni", "Sevil", "Robin", "Mike", "Niklas", "Olli", "Roland", "Sarah"];
const daytime = ["Guten Morgen", "Guten Abend", "Hi", "Hallihallo", "Tach", "Bonjour", "Buenos Dias", "Grüß Gott"];


const message = () => {
    const rand1 =   getRandomInt(0, 7);
    const rand2 =   getRandomInt(0, 7);
    const rand3 =   getRandomInt(-10, 35);
    console.log(daytime[rand1] + " " + names[rand2] + "! Die Temperatur heute beträgt " + rand3 + " Grad.");
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  message();