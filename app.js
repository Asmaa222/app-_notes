// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'hello');
// console.log(fs.readFileSync('notes.txt').toString());
// fs.appendFileSync('notes.txt', "   sasoooooo");
// console.log(fs.readFileSync('notes.txt').toString());
// ////////////////
// const file = require("./data");
// console.log(file)
// console.log(file.first)
// console.log(file.last)
// console.log(file.sum(5, 5))
// console.log(file.addfun(5, 5));
// ///////////////////////////
// var validator = require('validator');

// console.log(validator.isEmail('foo@bar.com')); //true
// console.log(validator.isEmail('foo')); //false
// ////////////////////////////////////////////////////////////////
// const fss = require('fs');
// fss.writeFileSync('notes', 'ballllllllllllllll');
// console.log(fss.readFileSync('notes').toString());
// fss.appendFileSync('notes', '\n hiiiiiiiiiiiiiiiiii mody');
// /////////////
// const d = require('./d.js');
// console.log(d)
// console.log(d.h);
// console.log(d.hf);
// console.log(d.add(3, 3));
/////////////
// console.log(process.argnov);
// if (process.argv[2] == "add") {
//     console.log("additem")
// } else {
//     console.log("error")
// }
///////////////////////////////////////////////////////////
const notes = require('./notes.js')
const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: "add note",
    builder: {
        title: {
            describe: 'this is the title desription in  add command',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'this is the body desription in  add command',
            type: 'string',
            demandOption: true
        }
    },
    handler: () => {
        //console.log("add")
        notes.addnote(yargs.argv.title, yargs.argv.body)
    }
})
yargs.command({
    command: 'delete',
    describe: "delete notes",
    builder: {
        title: {
            describe: 'this is the delete title in command',
            type: 'string',
            demandOption: true
        },
    },
    handler: () => {
        //console.log("delete")
        notes.removenote(yargs.argv.title)
    }
})
yargs.command({
    command: "read",
    describe: "read note",
    builder: {
        title: {
            describe: 'this is the title desription in  read command',
            type: 'string',
            demandOption: true
        },
    },
    handler: () => {
        // console.log("read")
        notes.readnote(yargs.argv.title)
    }
})
yargs.command({
        command: 'list',
        describe: "add list",

        handler: () => {
            // console.log("list")
            notes.listnote()
        }
    })
    //console.log(yargs.argv)
yargs.parse();