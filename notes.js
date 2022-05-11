const fs = require('fs');
// const addnote = (title, body) => {
//     const notes = loadNotes()

//     const duplicatedtitle = notes.filter((note) => {
//         return note.title == title
//             //title="title1"
//             //title1="title2"
//     })
//     console.log(duplicatedtitle); //[][]

//     if (duplicatedtitle.length === 0) {
//         //[{title:"title1",b:"body1"}]
//         //[{"title":"title1","b":"body1"},{"title":"title2","b":"body2"}]
//         notes.push({
//             title,
//             b: body
//         })
//         saveNotes(notes)
//         console.log("sucess")
//     } else {
//         console.log("error")
//     }

// }

/////////////////////////////////////////////////////////////////////////////////

const addnote = (title, body) => {
    const notes = loadNotes()

    const duplicatedtitle = notes.find((note) => {
        return note.title == title
            //title="title1"
            //title1="title2"
    })
    console.log(duplicatedtitle); //[][]

    if (!duplicatedtitle) {
        //[{title:"title1",b:"body1"}]
        //[{"title":"title1","b":"body1"},{"title":"title2","b":"body2"}]
        notes.push({
            title,
            b: body
        })
        saveNotes(notes)
        console.log("sucess")
    } else {
        console.log("error")
    }

}
const loadNotes = () => {
    try {
        const data = fs.readFileSync('notes.json').toString()
        return JSON.parse(data)
    } catch (e) {
        return []
    }

}
const saveNotes = (notes) => {
        const saveData = JSON.stringify(notes)
        fs.writeFileSync('notes.json', saveData)
    }
    ///////////////////////////
const removenote = (title) => {
        const notes = loadNotes()
        const notestokeep = notes.filter((el) => {
            return el.title !== title
        })
        console.log(notes)
        console.log(notestokeep)
        saveNotes(notestokeep)
        console.log("removed")
            /////
            // if (notes.length)
    }
    //////////read
const readnote = (title) => {
        const notes = loadNotes()
        const readbody = notes.find((e) => {
            // if (e.title === title) {
            //     console.log(readbody);
            // }
            // return yargs.argv.body
            return e.title === title
        })

        console.log(notes);
        if (readbody) {
            console.log(readbody.b);
        } else {
            console.log('not found')
        }
        saveNotes(notes)
    }
    /////////////////list
const listnote = () => {
        const notes = loadNotes()
        notes.forEach((el) => {
            return el
        });
        console.log(notes)
            // saveNotes(notes)

    }
    // https: //github.com/
    //     https: //git-scm.com/downloads
    //     https: //desktop.github.com/


module.exports = {
    addnote,
    removenote,
    readnote,
    listnote
}