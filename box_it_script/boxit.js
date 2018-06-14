/*
Program that takes an array of strings and returns 
a string where each is in a single column table.
*/
const args = process.argv.slice(2);

const line_unicode = '\u2501';
const space_unicode = '\u0020';
const top_corner_left_unicode ='\u250F'
const top_corner_right_unicode ='\u2513'
const middle_line_left_unicode = '\u2523'
const middle_line_right_unicode = '\u252B'
const bottom_corner_left_unicode = '\u2517'
const bottom_corner_right_unicode = '\u251B'
const vertical_bar_unicode = '\u2503'

/*
Function that takes an array of strings and 
returns a string where each is in a single column table.
*/
function boxIt(str_arr){
    let maxLength = 0;
    let unified_arr =[];
    if(str_arr.length > 0){
        maxLength = str_arr[0].length;
        str_arr.forEach(item => maxLength = item.length > maxLength ? item.length : maxLength);
        unified_arr = unifyLength(str_arr, maxLength);
    }

    let result = drawTopBorder(maxLength)+ "\n";
    for(let i=0; i<str_arr.length; i++){
        result += drawBarsAround(unified_arr[i])+ "\n";
        if(i < unified_arr.length -1){
            result += drawMiddleBorder(maxLength)+ "\n";
        }
    }
    return (result+drawBottomBorder(maxLength));
}

/*
Function that takes an array of strings and the maxlength
and returns a new array of strings where each string length
is equal to given maxLength. 
*/
function unifyLength(str_arr, maxLength){
    return (str_arr.map(item => item + space_unicode.repeat(maxLength - item.length)));
}


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
Function that takes a string, surrounds it with 
vertical lines and then returns it.
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

console.log(boxIt(args));



