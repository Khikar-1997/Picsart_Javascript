//with iterator
console.log("with iterator")
const fibonacciNumbers = {
    [Symbol.iterator] : function (){
        let [prev, curr] = [0, 1];
        console.log(prev);
        console.log(curr);
        return {
            next: function()        {
                [prev, curr] = [curr, curr + prev]
                return {
                    value: curr,
                    done: false
                }
            }
        }

    }
}

for (const number of fibonacciNumbers) {
    if (number > 10){
        break
    }
    console.log(number);
}

//with generator
console.log("with generator")
function* fibonacci() {
    let [prev, curr] = [0, 1];
    console.log(prev);
    console.log(curr);
    while (true){
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let n of fibonacci()) {
    if (n > 10)
        break;
    console.log(n);
}