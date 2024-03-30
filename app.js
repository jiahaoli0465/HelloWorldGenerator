const text = document.querySelector("#text");
const btn = document.querySelector("#btn");
let cur = "";

btn.addEventListener("click", async () => {
  await randomLetter("h");
  await randomLetter("e");
  await randomLetter("l");
  await randomLetter("l");
  await randomLetter("o");
  cur += " ";
  await randomLetter("w");
  await randomLetter("o");
  await randomLetter("r");
  await randomLetter("l");
  await randomLetter("d");
});

function randomLetter(letter) {
  return new Promise((resolve, reject) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const generateAndCheckLetter = () => {
      let random = Math.floor(Math.random() * 26);
      let randomLetter = alphabet.charAt(random);

      if (typeof text !== "undefined" && text.innerText !== undefined) {
        text.innerText = cur + randomLetter;
      }

      if (randomLetter !== letter) {
        setTimeout(generateAndCheckLetter, 50);
      } else {
        cur += randomLetter;
        resolve();
      }
    };

    generateAndCheckLetter();
  });
}
