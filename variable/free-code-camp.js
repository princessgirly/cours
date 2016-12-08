.pop()supprime toujours le dernier élément d'un tableau
.shift() supprime toujours le premier élément d'un tableau

.unshift() ajoute l'élément au début du tableau
.push() ajoute l'élément à la fin du tableau

////////////////////////////////////////////////////////////////////////////////////////////////////////

var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); 
// removedFromOurArray now equals 3, and ourArray now equals [1,2]


var myArray = [["John", 23], ["cat", 2]];

var removedFromMyArray = myArray.pop();         // Enlève et Récupère les dernières données du tableau
// removedFromMyArray = ["John", 23]
// myArray = ["cat", 2]


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Une façon de penser d'un multi-dimensionnelle tableau, est comme un tableau de tableaux . Lorsque vous utilisez des crochets pour accéder à votre tableau, la première série de crochets se réfère aux entrées dans l'extrême extérieur (le premier niveau) tableau,
et chaque paire supplémentaire de parenthèses renvoie au prochain niveau d'entrées à l' intérieur. */

var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11


//Fais en sorte que myData soit = à 8


var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[0][0];

myData = myArray[2][1];








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
