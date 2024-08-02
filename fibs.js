function fibs(num) {
    let result = [];
    for(let i = 0; i < num; i++) {
        if(i <= 1) {
            result.push(i);
        }
        else {
            result.push(result[i-1] + result[i-2]);
        }
    }
    return result;
}

console.log(fibs(8));

function fibsRec(num) {
    function helper(n, result) {
        console.log("This was printed recursively");
        if (n <= 0) {
            return result;
        }
        if (result.length === 0) {
            result.push(0);
        } else if (result.length === 1) {
            result.push(1);
        } else {
            result.push(result[result.length - 1] + result[result.length - 2]);
        }
        return helper(n - 1, result);
    }
    return helper(num, []);
}

console.log(fibsRec(8));
