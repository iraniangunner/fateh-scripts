export function operations(ops) {
  let result = null;
  const newOps = ops.replaceAll(" ", "");
  const mainArr = newOps.split("");

  let arr = [];

  for (let i = 0; i < mainArr.length; i++) {
    if (parseInt(mainArr[i])) {
      arr.push(parseInt(mainArr[i]));
    } else if (mainArr[i] === "D") {
      arr.push(arr[arr.length - 1] * 2);
    } else if (mainArr[i] === "R") {
      arr.pop();
    } else if (mainArr[i] === "+") {
      const newItem = arr[arr.length - 1] + arr[arr.length - 2];
      arr.push(newItem);
    } else if (mainArr[i] === "-") {
      mainArr[i + 1] = `-${mainArr[i + 1]}`;
    }
  }

  result = arr.reduce((acc, curr) => acc + curr, 0);
  return result;
}
