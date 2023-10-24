const reverseString = function(text) {
    let reverseText = '';
    for (let i = text.length - 1; i >= 0; i--){
        reverseText += text[i]
    }
    return reverseText;
};
reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');
reverseString('');
// Do not edit below this line
module.exports = reverseString;
