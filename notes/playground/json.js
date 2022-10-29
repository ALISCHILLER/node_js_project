const fs = require('fs');


var originalNotes = {
    title: 'Some title',
    body: 'Good Morning'
}

var stringNotes = JSON.stringify(originalNotes);
fs.writeFileSync("notes.json", stringNotes);


var  note =fs.readFileSync('notes.json')
var notePars = JSON.parse(note)
console.log(typeof notePars);
console.log(notePars);
