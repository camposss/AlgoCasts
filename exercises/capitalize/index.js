// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
   let result = str[0].toUpperCase();

   for(let i =1; i<str.length; i++){
       if(str[i-1]=== ' '){
           result+=str[i].toUpperCase();
       }else{
           result+=str[i];
       }
   }
   return result;
}

//First Grider Solution/////
// function capitalize(str) {
//     const words = [];

//     for (let word of str.split(' ')){
//         //everything from index 1 and beyond
//         words.push(word[0].toUpperCase()+ word.slice(1));
//     }
//     return words.join(' ');
// }

//MY answer brute force
// function capitalize(str) {
//     let newStr= ""
//     for(var i =0; i<str.length; i++){
//         if(i===0){
//            newStr+=str[0].toUpperCase();
//         }
//         else if(str[i-1]===' '){
//             newStr+=str[i].toUpperCase();
//         }
//         else{
//             newStr+= str[i];
//         }
//     }
//     return newStr;
// }

module.exports = capitalize;
