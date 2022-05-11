//create object person name age
const person = {
    name: "asmaa",
    age: 24
}
console.log(person);
//change object to json
const personjson = JSON.stringify(person);
console.log(personjson)
    //write filesync
const fs = require('fs');
fs.writeFileSync('test.json', personjson);
//json change object
const personobject = JSON.parse(personjson);
//edit object
personobject.age = 25;
personobject.name = " asmaa elafas"
    //change object to json
    //const personnj = JSON.stringify(personobject);
    // write
fs.writeFileSync('test.json', JSON.stringify(personobject));