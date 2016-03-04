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


    var charArray = [
        [32, 33, 34, 35, 36 ,37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77],
        [78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
    ];


    var decipher = "";



    for(var i = 0; i < charArray[2].length; i++){

        //A funcionar

        for (var j = 0; j < str.length; j++){
            if(str.charCodeAt(j) === charArray[0][i]){
                decipher += charArray[0][i] + " ";

            }
            if(str.charCodeAt(j) === charArray[1][i]){
                decipher += charArray[1][i] + " ";
            }
            if (str.charCodeAt(j) === charArray[2][i]){
                decipher += charArray[2][i] + " ";

            }

        }

        //Segunda parte da verificação

        /*for (var i = 0; i < decipher.length; i++){
            for (var j = 0; j < charArray[2]; j++){
                if (decipher[i] === charArray[2][j]){
                    decipher[i] = charArray[1][j];
                    break;
                }
            }
        }*/




    }




    /*for (var i in str){
        for (var j in charArray){
            if (str.charCodeAt(i) === charArray[0][j]){

                decipher += String.fromCharCode(charArray[0][j]);

            }if(str.charCodeAt(i) === charArray[1][j]){

                decipher += String.fromCharCode(charArray[1][j]);


            }if(str.charCodeAt(i) === charArray[2][j]){

                        decipher += String.fromCharCode(charArray[1][j]);


            }
        }
    }*/

    //Problema é que o ciclo só vai 3 vezes

    return decipher;

    //return charArray[1][5];
}

console.log(rot13("SRR VN"));
//console.log(rot13("SERR CVMMN!"));
//console.log(rot13("SERR YBIR?"));
//console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));