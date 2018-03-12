// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //my version of the problem
    // if(n===0){
    //     return 0;
    // }
    // const toString= n.toString();
    // let reversed = toString.split('').reverse().join('');
    // if(Math.sign(n)!==1){
    //     const addNegative = "-"+ reversed
    //     return parseInt(addNegative);
    // }
    // return parseInt(reversed);
    
    const reversed= n.toString().split('').reverse().join('');
    return parseInt(reversed) *Math.sign(n);

}

module.exports = reverseInt;
