console.log (process.argv);
const [,,nums] = process.argv;
console.log (nums);
const arr = JSON.parse(nums);
console.log (arr);
console.log ("The largest number is : ", Math.max(...arr));

// type node max.js [12,34,56,5,23] in terminal