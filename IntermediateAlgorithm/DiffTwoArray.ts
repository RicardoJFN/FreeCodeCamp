function diffArray(arr1: string[], arr2: string[]){
    let newArr: string[];
    let maxArr: number;

    //Defining the max array
    if(arr1.length >= arr2.length){
        maxArr = arr1.length;
    }else{
        maxArr = arr2.length;
    }

    




    return newArr;
}

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