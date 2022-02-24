console.log ("Hi There! This is Madhavi!!");
console.log ("Run this program in 'New Terminal' using the code: node numbers.js!!");
function myName(nm) {
    console.log ("My name is:"+nm);
}

console.log (myName('Madhavi Latha Yayavaram'));

const sum = (a,b) => a+b;
console.log (sum(4,8));

console.log (process.argv); // run it using 'node index.js 6 7'
const [ , ,n1,n2] = process.argv;
console.log ("Your first number is "+ n1);

console.log ("Your second number is "+ n2);

console.log (globalThis);