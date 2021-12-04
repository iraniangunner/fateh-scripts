export function encoder({inputString, repeatCount}) {
  let result = null;
  let n = 0;
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const myString = inputString.split("");

  myString.unshift(myString[myString.length - 1]);

  myString.pop();

    while (n < repeatCount) {
      for (let i = 0; i < myString.length; i++) {   
        if (alphabets.includes(myString[i]) && myString[i] !== "z") {
          const indexOfItem = alphabets.indexOf(myString[i]);
          myString[i] = alphabets[indexOfItem + 1];
        }else if(myString[i] === "z"){
          myString[i] = "a";
        }
      }
      n++;
    }
    result = myString.join("");
    return result;   
}
