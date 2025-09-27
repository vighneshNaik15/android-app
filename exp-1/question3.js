const arr = [10, 5, 2, 8, 4];

let i = 0;
let min = arr[0];
let sum = 0;

while (i < arr.length) {
  if (arr[i] < min) {
    min = arr[i];
  }
  sum += arr[i];
  i++;
}

console.log("Smallest:", min); 
console.log("Sum:", sum);