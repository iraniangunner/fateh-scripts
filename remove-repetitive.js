export function removerRepetitive(string) {
  let result = null;
  result = string.replace(/(.)\1+/g, '$1');
  return result;
}
