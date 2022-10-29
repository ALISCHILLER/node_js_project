const notes = require('./notes');
const _ = require('lodash');

const yargs = require('yargs');
console.log(note.age)

console.log(_.isString(true)); //boolean == string ->fals
console.log(_.isString('masood salahi'));//string == string -> true
console.log(_.uniq([1, 2, 4, 5, 6, 2]));

//console.log(process.argv);
var argv = yargs.argv;

console.log('Yargs: ', argv)

// console.log(process.argv[2]);
var commamnd = process.argv[2];
console.log('commamnd :', commamnd);
console.log('Yargs :', argv);

if (commamnd === 'add') {
   var note=notes.addNote(argv.title, argv.body)
    if (note) {
        console.log('Note Created!');
        console.log('------')
        console.log('Title ${note.title}')
        console.log('Body ${note.body}')
    } else {
        console.log('Note title taken .')
    }
} else if (commamnd === 'list') {
    console.log('لیست نمایش بده');
} else if (command === 'remove') {

    var noteRemoved = notes.removeNote(argv.title)
    var message = noteRemoved ? 'Note was removed ' : 'Note not found'
    console.log(message)
    
}else {
     console.log('ارگومانی وارد نشده است');
}