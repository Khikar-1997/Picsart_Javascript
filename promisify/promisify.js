let array = [1, 1, 2, 3, 12, 1];

//my promisify function
function addElementWithoutCallback(callBack) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            callBack(...args, (err, data) => {
                try {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                } catch (e) {
                    reject(e);
                }
            })
            console.log(args)
        })
    }
}

//example one
let sumOfArraysElements = function (err, array) {
    console.log(array)
    return array.reduce((sum, element) => sum + element, 0);
}
console.log(array)

//function with callback
function addElement(number, callback) {
    let res;
    let err;
    try {
        array.push(number);
        res = array;
        callback(null, res)
    } catch (e) {
        err = e;
        callback(err, null)
    }
}

//result with callback
addElement(45,(err,res) => {
    if (err) throw err;
    else console.log(sumOfArraysElements(null,array));
})

//result with Promise
let value = addElementWithoutCallback(addElement);
value(5)
    .then(res => console.log(res.reduce((sum, element) => sum + element, 0)))
    .catch(rej => console.log(rej));

console.log(array)

//example two
function sum(a, b, callback) {
    let res;
    let error;
    try {
        res = a + b;
        callback(null, res)
    } catch (e) {
        error = e;
        callback(error, null)
    }
}

//result with callback
sum(1, 2, (err, res) => {
    if (err) throw err;
    else console.log("this is my result " + res);
})

//result with Promise
let value1 = addElementWithoutCallback(sum);
value1(4, 2)
    .then(console.log)
    .catch(console.log);