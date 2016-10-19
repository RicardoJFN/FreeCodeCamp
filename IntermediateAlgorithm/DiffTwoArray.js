function diffArray(arr1, arr2) {
    var newArr = [];
    var maxArr;
    //Defining the max array
    if (arr1.length >= arr2.length) {
        maxArr = arr1.length;
    }
    else {
        maxArr = arr2.length;
    }
    for (var i = 0; i != maxArr; i++) {
        for (var j = 0; j != i; j++) {
            for (var k = 0; k != i; k++) {
                if (arr1[j] != arr2[k]) {
                    newArr.push(arr1[j]);
                }
            }
        }
    }
    return newArr;
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
