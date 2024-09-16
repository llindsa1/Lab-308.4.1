// Part 1: Refactoring Old Code

// input - ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);

//What do we know?
// There is ONLY 4 cells per row
// Only "\n" escape character
//  Commas separate cells
// "\n" indicates a new line
// Has to be done in a loop *
// out input is a string, strings are iterable *
// the last row has no '\n
// console.log(cell1, cell2, cell3, cell4);
// 3 things: commas, "\n", characters

//Variables
let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Memory allocation for future values
let cell = ``;
let row = ``;

// for (let i in string) {
//   //For index in string
//   switch (string[i]) {
//     case ',':
//       row = row + cell + ' '; // Add cell to row
//       cell = ``; // Emtying cell to reuse
//       break;
//     case '\n':
//       row += cell; // Add final cell to row
//       cell = ``; // Clear cell
//       console.log(row); // Print row
//       row = ``; // Clear row
//       break;
//     default:
//       cell += string[i]; //If char, add to current cell
//       break;
//   }

//   //If we reach final character in string, print final row
//   if(i == string.length - 1){ 
//     //string.length is length of string - 114 - index is 114
//     row += cell // Add final cell
//     console.log(row) // Print row
//   }
// }

for (let i in string) {
    //For index in string
    if (string[i] == ",") {
        row = row + cell + ' '; // Add cell to row
        cell = ``; // Emtying cell to reuse
    } else if (string[i] == '\n'){
         row += cell; // Add final cell to row
        cell = ``; // Clear cell
        console.log(row); // Print row
        row = ``; // Clear row
    } else {
                cell += string[i]; //If char, add to current cell
    }
  
    //If we reach final character in string, print final row
    if(i == string.length - 1){ 
      //string.length is length of string - 114 - index is 114
      row += cell // Add final cell
      console.log(row) // Print row
    }
  }

  let candidates = ['Bruce', 'Bob', 'Blaine', 'Bill']

  //Part 2
const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

function parseCSV (csvString) {
    const rows = csvString.split('\n')
}

const header = rows[0].split (',');
const numColums = header.length;

const dataArray = [header];

for (let i= 1; i < rows.length; i++) {
    const row = rows[i].split(',');

    if (row.length=== numColumns) { dataArray.push(row);}

}

return dataArray;
const cachedData = parseCSV (csvData);

console.log(cachedData); 

// Part 3
const csvDataArray = [
["ID", "Name", "Occupation","Age"],
["42", "Bruce", "Knight", "41"],
["57", "Bob", "Fry Cook", "19"],
["63", "Blaine", "Quiz Master", "58"]
["98", "Bill" ,"Doctor’s Assistant", "26"]
];

function convertToObjects(dataArray) {
    const headers =
    dataArray[0].map(header =>
        header.toLowerCase());
        const result  = [];

        for (let i= 1; i < dataArray.length; i++) {
            const row = dataArray[i];
            const obj = {};

            headers.forEach ((header, index) =>
            {
                obj[header] = row [index];
            });
            result.push(obj);        }

            return result;
}

const dataObjects = 
convertToObjects(csvDataArray);
console.log(dataObjects);

