export function removerRepetitive(string) {
  let result = null;
  result = [...new Set(string.split(""))].join("");
  return result;
}
