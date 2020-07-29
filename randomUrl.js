//importing filesystem and working with the 'word' txt file
import * as fs from "fs";
const wordsArray = fs.readFileSync("words.txt", "utf8").split("\r\n");

//this is just a function that generates a random number in between min/max params
function randomNumber(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

//function itself
export default function generateUrl() {
  let url = "";
  for (let i = 0; i < 6; i++) {
    url += wordsArray[randomNumber(0, wordsArray.length - 1)];
  }
  return url;
}
