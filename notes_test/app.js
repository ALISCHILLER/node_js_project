const note = require('./notes');
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
    note.addNote(argv.title,argv.body)
} else if (commamnd === 'list') {
    console.log('لیست نمایش بده');
} else if(command==='remove') {
    
}else {
     console.log('ارگومانی وارد نشده است');
}