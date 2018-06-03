/*
Program that takes an array of strings and returns 
a string where each is in a single column table.
*/
const args = process.argv.slice(2);
let num = parseInt(args[0]);

const line_unicode = '\u2501';

/*Function that takes a number as an argument 
that returns that number of horizontal bars 
(i.e. ━) as a string.
*/
 
function drawLine(num){
    return(line_unicode.repeat(num));
}

console.log(drawLine(num));
