const repeatString = function(heyString, n) {
    let text = "";
    if (n >= 0){
        for (let i = 1; i <= n; i++){
            text += heyString;
        }
    }
    else {
        text = 'ERROR';
    }
    return text;
};
repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);
repeatString('hey', 190);
repeatString('', 10);
// Do not edit below this line
module.exports = repeatString;
