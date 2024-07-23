const arr = [1, 2, 3];
console.log("Original array:", arr); // [1, 2, 3]
const newArr = [5, 6, ...arr];
console.log("New array (after spread operator):", newArr); // [5, 6, 1, 2, 3]