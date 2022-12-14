console.log('start notes.js');
const fs = require('fs');

var fetchNote = () => {
     try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
     } catch (error) {
         return []
    }
}


var saveNotes = (notes) => {
   fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
    var notes = fetchNote();
    var note = {
        title,
        body
    }

   
  
    var duplicateNotes = notes.filter((note) => note.title === title)
    if (duplicateNotes.length == 0) {
        notes.push(note)
        saveNotes(notes)
        return note
    }
    
}

var getNotes = () => {
    console.log('Getting All Notes')
}
 

var getNote = (title) => {
    var notes = fetchNote();
    var filteredNotes = notes.filter((note) => note.title === title)
    return filteredNotes[0]
}

var removeNote = (title) => {
    var notes = fetchNote();
    var filteredNotes = notes.filter((note) => note.title !== title)
    saveNotes(filteredNotes)
    return notes.length!=filteredNotes.length
}

var logNotes  = (note) => {
    
    console.log('-------')
    console.log(`Title: ${note.title}`)
    console.log(`Body: '${note.body}`)
}
module.exports = {
    addNote,
    getNotes,
    getNote,
    removeNote,
    logNotes
}