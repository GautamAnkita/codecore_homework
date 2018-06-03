/*
Program that takes an array of strings and returns 
a string where each is in a single column table.
*/
const args = process.argv.slice(2);
let num = parseInt(args[0]);

const line_unicode = '\u2501';
const top_corner_left_unicode ='\u250F'
const top_corner_right_unicode ='\u2513'
const middle_line_left_unicode = '\u2523'
const middle_line_right_unicode = '\u252B'
const bottom_corner_left_unicode = '\u2517'
const bottom_corner_right_unicode = '\u251B'
const vertical_bar_unicode = '\u2503'

/*
 Function that takes a length as an input and 
 returns a top border including the line of the 
 given length.
*/
function drawTopBorder(num){
   return(top_corner_left_unicode + drawLine(num)+  top_corner_right_unicode);
}

/*
Function that takes a length as an input and 
returns a middle border including the line of the 
given length.
*/
function drawMiddleBorder(num){
    return(middle_line_left_unicode+ drawLine(num)+ middle_line_right_unicode);
}

/*
Function that takes a length as an input and 
returns a bottom border including the line of 
the given length.
*/
function drawBottomBorder(num){
    return(bottom_corner_left_unicode+ drawLine(num) + bottom_corner_right_unicode);
}
/*
Function that takes a string, surrounds it with vertical lines and then returns it.
*/ 
function drawBarsAround(str){
    return (vertical_bar_unicode + str + vertical_bar_unicode);
}

/*Function that take a number as an argument 
that returns that number of horizontal bars 
(i.e. ━) as a string.
*/
function drawLine(num){
    return(line_unicode.repeat(num));
}

console.log(drawTopBorder(num));
console.log(drawMiddleBorder(num));
console.log(drawBottomBorder(num));
console.log(drawBarsAround("My name is Dan")); // returns "┃My name is Dan┃"
console.log(drawBarsAround("You are Jane  ")); // returns "┃You are Jane  ┃"
console.log(drawBarsAround("  You are Bill"));// returns "┃  You are Bill┃"

