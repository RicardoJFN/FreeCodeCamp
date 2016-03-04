/**
 * Created by ricardon on 03-03-2016.
 */
/**
 * Created by ricardon on 10-02-2016.
 */

/*
 One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

 A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

 Write a function which takes a ROT13 encoded string as input and returns a decoded string.

 All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 Here are some helpful links:

 String.charCodeAt()
 String.fromCharCode()
 */


function rot13(str){


    var firstArray = [32, 33, 34, 35, 36 ,37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
    var secondArray = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77];
    var thirdArray = [78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];


    var decipher = "";


    //Verificar se a letra pertence ao array se sim então trocar a letra por outro array

    for(var i = 0; i < str.length; i++){
        for (var j = 0; j < firstArray.length; j++){
            if (str.charCodeAt(i) === firstArray[j]){
                //console.log("Pertence ao primeiro array");
                decipher += String.fromCharCode(firstArray[j]);
            }

        }
        for (var k = 0; k < secondArray.length; k++){
            if(str.charCodeAt(i) === secondArray[k]){
                //console.log("Pertence ao segundo array");
                decipher += String.fromCharCode(thirdArray[k]);
            }
        }
        for (var y = 0; y < thirdArray.length; y++){
            if(str.charCodeAt(i) === thirdArray[y]){
                //console.log("Pertence ao terceiro array");

                    decipher += String.fromCharCode(secondArray[y]);

            }
        }
    }




    return decipher;


    //A cifra troca sempre a posição independenmtente da letra que é por exemplo se for N então é igual a A se for A então é igual a N


}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));