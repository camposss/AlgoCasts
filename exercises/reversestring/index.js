// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // return str.split('').reverse().join('');

    // this only works if you want to iterate in order
    //if you want to go for every 3rd or 5th for example you would need to use a regular for loop.
    // let reversed = '';
    // for (let character of str){
    //     reversed = character+reversed;
    // }
    // return reversed;

    //Using an array helper

    return str.split('').reduce((reversed, character)=>{
        return character+reversed;
    }, '');


}
reverse('asdf');

module.exports = reverse;
