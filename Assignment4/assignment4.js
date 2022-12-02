function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function maxOfThree(num1, num2, num3) {
    return max(max(num1, num2), num3);
}

function isVowel(v) {
    return ("aeiouAEIOU".indexOf(v) != -1);
}

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function multiply(arr) {
    let res = 1;
    for (let i = 0; i < arr.length; i++) {
        res *= arr[i];
    }
    return res;
}

function reverse(str) {
    return str.split("").reverse().join("");
}

function findLongestWord(arr) {
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(longest.length < arr[i].length) {
            longest = arr[i];
        }
    }
    return longest.length;
}

let a = [1, 3, 5, 3, 3];
function multiply10(n) {
    return n * 10;
}

let x = a.map(multiply10)
let equal3elements = a.filter(function (elem, i, a) {
    return elem == 3;
});

function product(a, b) {
    return a * b;
}

let produceElements = a.reduce(product);
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED";
    }
}

const objectsEqual = (o1, o2) =>
    Object.keys(o1).length === Object.keys(o2).length
    && Object.keys(o1).every(p => o1[p] === o2[p]);


console.log("Expected value of max(50,44) is 50  " + myFunctionTest(50, max(50, 44)));

console.log("Expected value of maxOfThree(7,5,9) is 9  " + myFunctionTest(9, maxOfThree(7, 5, 9)));

console.log("Expected value of isVowel(u) is true  " + myFunctionTest(true, isVowel("u")));

console.log("Expected value of sum([1,5,6,2]) is 14  " + myFunctionTest(14, sum([1,5,6,2])));

console.log("Expected value of multiply([10,5,2,2]) is 200  " + myFunctionTest(200, multiply([10,5,2,2])));

console.log("Expected value of reverse('jag testar') is 'ratset gaj'  " + myFunctionTest("ratset gaj", reverse("jag testar")));

console.log("Expected value of (hi, hello, hey) is 5  " + myFunctionTest(5, findLongestWord(["hi", "hello", "hey"])));
