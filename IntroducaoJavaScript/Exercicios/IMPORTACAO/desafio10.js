const { gets, print } = require('./funcoes-auxiliares.js');

let arr ='';

var isValid = function(arr) {    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === String.fromCharCode(40) && arr[(arr.length-1)] === String.fromCharCode(41)) {
            return true;
        } else if ((arr[i] === String.fromCharCode(91) && arr[(arr.length-1)] === String.fromCharCode(93))) {
            return true;
        } else if ((arr[i] === String.fromCharCode(123) && arr[(arr.length-1)] === String.fromCharCode(125))) {
            return true;
        } else {
            return false;
        }
    }
    return true; 
}

print(isValid(arr))

String.fromCharCode(40) //(
String.fromCharCode(41) //)
String.fromCharCode(91) //[
String.fromCharCode(93) //(]
String.fromCharCode(123) //{
String.fromCharCode(125) //} */