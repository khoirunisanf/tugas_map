const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numb.filter(checkAdult);

function checkAdult(age) {
  return age >= 5;
}
console.log(result);