

var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11


var lastName = "Lovelace";

// Affiche la dernière lettre
var lastLetterOfLastName = lastName[lastName.length - 1];

// e

//You can also nest arrays within other arrays, like this: 
//[["Bulls", 23], ["White Sox", 45]]. This is also called a Multi-dimensional Array.
var myArray = [["the universe", 42], ["everything", 101010]];


//Attibuer a mon nx array la 1ère valeur du array myArray
// Setup
var myArray = [1,2,3];
var myData = myArray[0];
// Only change code below this line.

//Modify the data stored at index 0 of myArray to a value of 3
var myArray = [1,2,3];
myArray[0] = 3;
