const palindromes = function (string) {
    string.toLowerCase();
    let myRegex = /[a-zA-Z1-9]/g;
    let result = string.match(myRegex);
    let isPalindrome = false;
    let j = result.length - 1;
    for (let i = 0; i < result.length-1; i++){
        if (result[i] === result[j]){
            isPalindrome = true;
        }
        else{
            isPalindrome = false;
        }
        j--;
    }
    return isPalindrome;
};
palindromes('racecar');
palindromes('racecar!');
palindromes('Racecar!');
palindromes('A car, a man, a maraca.');
palindromes('Animal loots foliated detail of stool lamina.');
palindromes('ZZZZ car, a man, a maracaz.');
palindromes('rac3e3car');
palindromes('r3ace3car');


// Do not edit below this line
module.exports = palindromes;
