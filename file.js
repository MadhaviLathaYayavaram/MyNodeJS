const fs = require('fs');

fs.readFile ('./welcome.txt','utf-8',(err,data)=> {
    console.log (data);
});

const quote = "No beauty shines brighter than that of good heart ❤💕🌹";
fs.writeFile('./awesome.txt', quote,err => 
{
    console.log ("Completed creating a file!!");
});