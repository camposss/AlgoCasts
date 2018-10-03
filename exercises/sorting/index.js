// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// Usually people don't get asked as much for interviews
// Focus on this LAST
function bubbleSort(arr) {
    // O(n^2)
    for(let i = 0 ; i< arr.length; i++){
        for(let j = 0; j < (arr.length-i-1); j++){
            if(arr[j] > arr[j+1]){
                const lesser = arr[j+1];
                arr[j+1] = arr[j];
                arr[j]= lesser;
            }
        }
    }
}

function selectionSort(arr) {
    // O(n^2)
    for(let i = 0 ; i<arr.length; i++){
        let indexOfMin = i;
        // Prove me WRONG!
        for (let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[indexOfMin]){
                indexOfMin = j;
            }
        }
        if(indexOfMin !== i){
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }
}

function mergeSort(arr) {
    // n*log(n)
    if(arr.length ===1){
        return arr;
    }
    const center = Math.floor(arr.length /2);
    // [0, center), doesn't include center
    const left = arr.slice(0,center);
    // everything after center inclusive
    const right = arr.slice(center);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const results = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            results.push(left.shift());
        }else {
            results.push(right.shift());
        }
    }
    // same as calling concat function
    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort };
