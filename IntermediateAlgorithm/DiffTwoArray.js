function diffArray(arr1, arr2) {
    var arrMerge = [];
    var newArr = [];
    //Merge the arrays
    arrMerge = arr1.concat(arr2);
    //Use the filter (Continue from here!!)
    return arrMerge;
}
console.log("The new array is: " + diffArray(["teste1", "teste2", "ola2"], ["ola", "teste1", "ola3"]));
/**
 * Compare two arrays and return a new array with any items
 * only found in one of the two given arrays, but not both.
 * In other words, return the symmetric difference of the
 * two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()
 *
 */ 
