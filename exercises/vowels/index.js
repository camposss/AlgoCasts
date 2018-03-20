// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//using regex///
function vowels(str) {
    //g means to keep going after first match
    //i means case insensitive
    //returns an array of matches or will return null
   const matches = str.match(/[aeiou]/gi);
   return matches ? matches.length: 0;
}

//first iterative solution///
// function vowels(str) {
//     let vowels =0;
//     const checker = ['a','e','i','o','u'];
//     for(let char of str.toLowerCase()){
//        if(checker.includes(char)){
//            vowels++;
//        }
//     }
//     return vowels;
// }


////My function using a switch statement

// function vowels(str) {
//     let vowels =0;
//     for(letter of str){
//         switch(letter){
//             case 'a':
//             case 'A':
//             case 'e':
//             case 'E':
//             case 'i':
//             case 'I':
//             case 'o':
//             case 'O':
//             case 'u':
//             case 'U':
//                 vowels++;
//                 break;
//         }
//     }
//     return vowels;
// }
module.exports = vowels;
