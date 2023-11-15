const fibonacci = function(num) {
    num = parseInt(num);
    let arr = [0, 1];
    if(num < 0 || isNaN(num)){
        return "OOPS"
    }
    else {
        for (i = 0; i<=num; i++){
            arr.push(arr[i] + arr[i+1])
            console.log(arr)
            if (arr.length == num+2 ){
                return arr[num];
            }
        }
    } 
};
fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(-25);
fibonacci("1");
fibonacci("2");
fibonacci("8");
// Do not edit below this line
module.exports = fibonacci;
