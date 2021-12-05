export function getRepeatedInfo(number) {
  let result = null;
  result = {};
  const convertedNumber = number.toString();
  const arrayOfDigits = convertedNumber.split("");

  for (let i = 0; i < arrayOfDigits.length; i++) {
    if (Object.keys(result).includes(arrayOfDigits[i])) {
      continue;
    }
    let count = 0;
    for (let j = i; j < arrayOfDigits.length; j++) {
      if (arrayOfDigits[i] === arrayOfDigits[j]) {
        count++;
      }
    }

    let arr = [];

    for (let k = 0; k < arrayOfDigits[i] * count; k++) {
      arr.push(arrayOfDigits[i]);
    }
    const myResult = arr.join("");

    result[Number(arrayOfDigits[i])] = myResult;
  }

  return result;
}
