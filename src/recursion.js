// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

var factorial = function (n) {
  // the base case condition needs to greater than 0 to be positive  
  if (n < 0) {
    //throw new Error("Factorials don't have negitive numbers");
    return null
  }
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function (array) {
  // let arr = [].reduce(sum,0)
  //   //return arr.reduce(sum,0)
  //     return array 
  if (array.length === 0) {
    return 0
  }
  return array[0] + sum(array.slice(1))
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array) {
  let num = 0
  // loop through everyting in the array
  for (let i = 0; i < array.length; i++) {
    //check if the array is storing numbers 
    if (typeof array[i] === "number") {
      //add the index to a stored number 
      num += array[i]
    }
    else if (Array.isArray(array[i])) {
      num += arraySum(array[i]); // Recursively call for nested arrays
    }
  }
  return num
};

// 4. Check if a number is even.
var isEven = function (n) {

  if (n < 0) {
    return isEven(-n)
  }
  if (n === 0) {
    return true
  }
  if (n === 1) {
    return false
  }
  return isEven(n - 2)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {

  if (n === 0) {
    return 0
  }
  if (n > 0) {
    return (n - 1) + sumBelow(n - 1); // does the positive inputs
  }
  else {
    return (n + 1) + sumBelow(n + 1); // handles negative input
  }

};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function (x, y) {
  // make a var that stores and empty arr
  // var results = []
  // do my condition but not hard coded 
  if (x === y) {
    return []
  }
  if (x + 1 === y || y + 1 === x) {
    return []
  }
  //if(x + 1 < y)return
  if (x > y) {
    return [x - 1].concat(range(x - 1, y)) // count down
  }
  if (x < y) {
    return [x + 1].concat(range(x + 1, y)) // count up

  }
  /* all test are passing exept the second to last one 
  if (x + 1 >= y) {
    // return the arr
    return [];
  }
  return [x + 1].concat(range(x + 1, y))
  if(x === y-1{
  [x-1].concat(range(x - 1, y))}
  */
  //return the a range between x+1 and y -1
};

// // 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (x, n) {
  //take in an input and multip-ly its's self by whatever number then return a number 
  // if (base - exp === 0){
  //   return base
  // }
  if (n === 0) {
    return 1
  }
  if (n > 0) {
    return x * exponent(x, n - 1);
  }
  else { return 1 / exponent(x, n * -1) }
  // else {return base * exponent(base, exp -1)}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {
  //return Math.pow(Math.round(Math.log(n)/ Math.log(2)))
  if (n === 1) {
    return true
  }
  // If n is not divisible by 2 or is less than 1, it's not a power of two
  if (n < 1 || n % 2 !== 0) {
    return false
  }
  return powerOfTwo(n / 2)
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function (string) {
  if (!string.length) {
    return "";
  }
  return string[string.length - 1] + reverse(string.slice(0, -1));

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {
  /*
  input a string 
  output is a boolean based on if the string is a palindrome
  constrant: recursion
  edge case: ignore spaces and capital letters 
  */
  // check if the frist letter is not the same as the last letter 
  // we need to make this case insensitive
  string = string.toLowerCase()
  // If the first character is a space skip it
  if (string[0] === ' ') {
    return palindrome(string.slice(1));
  }
  // If the last character is a space skip it
  if (string[string.length - 1] === ' ') {
    return palindrome(string.slice(0, -1));
  }

  if (string[0] !== string[string.length - 1]) {
    return false
  }
  if (string.length <= 1) {
    return true
  }
  // check if the frist letter is the same as the last letter 
  //take away the values at the first and last index
  // string.splice()


  // the new string should be the arguement for the function call 


  return palindrome(string.slice(1, -1))
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {
  // make a var that stores an amount 
  // let total = x / y;

  //   return total
  // modulo()
  //return x - y * Math.floor(x / y)

  // if (y === 0) throw new Error("Division by zero");

  // // Handle negative numbers
  // if (x < 0) return -modulo(-x, y);
  // if (y < 0) return modulo(x, -y);

  // // Base case: if x < y, remainder is x
  // if (x < y) return x;

  // // Recursive step: subtract y and call again
  // return modulo(x - y, y);
};

// 5* 11
// 5 +5 +5...
//4*11
//4 + 4 +4 ...


// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function (x, y) {
  if (y === 0) {
    return 0;
  }
  if (y < 0) {
    return -multiply(x, -y);
  }
  return x + multiply(x, y - 1)
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function (x, y) {
  if (x === y) {
    return 1
  }
  if (x || y === 0) {
    return undefined
  }
  return 1 + divide(x - y, y)
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
  // var total = x/y
  // if(!isEven)
  // if(x/y)return total
  // //we want no remainder
  // if(x % y === 0 ){
  //   return total
  // }

  if (y === 0) {
    return x;
  }


  return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.

var compareStr = function (str1, str2) {
  //do stop conditions first
  // check if the legth is the same first
  console.log(str1, str2)
  //if(str1.length !== str2.length)return false 
  if (str1.length === 0 && str2.length === 0) return true //empty string
  if (str1[0] !== str2[0]) return false//checking first letter
  //recursive case
  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str) {
  //if string is empty return an empty arr
  if (str.length === 0) { return [] } //stop condition/ base case
  // starts at the begining of the string and to the rest of the string
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
//if the 0 or 1 element it cant be reverse
var reverseArr = function (array) {
  if (array.length <= 1) { return array } // base case
  //start from the last index and keep going down till be are at the first index
  return [array[array.length - 1]].concat(reverseArr(array.slice(0, -1)));

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length) {
  // if the length is 0 return an empty arr
  if (length === 0) { return [] }
  return [value].concat(buildList(value, length - 1))
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value) {
  //if array is empty return 0
  if (array.length === 0) { return 0 }
  //check the first element, then recurse on the rest of the array
  const countForFirst = array[0] === value ? 1 : 0;
  //recursive call on the remaining elements
  return countForFirst + countOccurrence(array.slice(1), value);

};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback) {
  //check if array is empty an return an empty array
  if (array.length === 0) { return [] }
  //apply the callback to the first element
  const firstResult = callback(array[0]);
  //recursively map the rest of the array
  const restResult = rMap(array.slice(1), callback);
  //combine and return
  return [firstResult].concat(restResult);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function (obj, key) {
  let count = 0;

  //loop through all keys in the current object
  for (let k in obj) {
    //if the key matches, increase count
    if (k === key) { count++; }
    //if the value is an object, recurse deeper
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      count += countKeysInObj(obj[k], key);
    }
  }
  return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function (obj, value) {
  let count = 0;

  //loop through all keys in the current object
  for (let k in obj) {
    //if the key matches, increase count
    if (k === value) { count++; }
    //if the value is an object, recurse deeper
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      count += countKeysInObj(obj[k], value);
    }
  }
  return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, key, newKey) {
  if (Array.isArray(obj)) {
    // If it's an array, iterate and recurse into each element
    for (let i = 0; i < obj.length; i++) {
      if (typeof obj[i] === 'object' && obj[i] !== null) {
        // Use splice if you want to replace the object at this position (optional)
        obj.splice(i, 1, replaceKeysInObj(obj[i], oldKey, newKey)); // i used splice to keep the original array but it makes an alternate array keep our original 
      }
    }
  } else if (typeof obj === 'object' && obj !== null) {
    for (let key in obj) {
      if (key === oldKey) {
        obj[newKey] = obj[key]; // copy value to new key
        delete obj[key];        // delete old key
        key = newKey;           // update the key variable
      } 
      // Recurse deeper if the value is an object or array
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        replaceKeysInObj(obj[key], oldKey, newKey);
      }
    }
  }

  return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function (n) {
  if (n === 0) return [0, 1];  // start sequence
  if (n === 1) return [0, 1, 1];
  const seq = fibonacci(n - 1);
  //takes the previos idex and adds it to the current index
  seq.push(seq[seq.length - 1] + seq[seq.length - 2]);

  return seq;

};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n) {
  if (n === 0) return 0;
  if (n < -1) return null  // start sequence
  if (n === 1) return 1;
  return nthFibo(n - 1)+ nthFibo(n - 2)

  //  NOT DONE YET
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (input) {
  //checks if the array is empty
  if(input.length === 0 ){return []}
  //capitalizes the first word
  let firstWord = input[0].toUpperCase()
  //capitalizes the rest of the rest of the array/ string
 let restCap = capitalizeWords(input.slice(1))
 //add the vars and recurse
 return [firstWord].concat(restCap)
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']

// INPUT: an array of strings
// OUTPUT: an array of the strings with the first letter capitalized
// CONSTRANTS: 
//EDGE CASES: if the array is empty return an empty arr
var capitalizeFirst = function (array) {
  // if the length of the array is 0 return false
  if(array.length === 0){return []}
   //String(array).charAt(0).toUpperCase() + String(array).slice(1);
 // at every index of the arr, we want the first char to be capitalized
  let first = array[0].charAt(0).toUpperCase() + array[0].slice(1)
  console.log(array,first)
  let rest = capitalizeFirst(array.slice(1))
  return [first].concat(rest)
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function (str, obj = {}) {
  //check if theirs any letters in the array and return obj
  if (str.length === 0) {
    return obj;
  }

  var char = str[0];
  obj[char] = (obj[char] || 0) + 1;

  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function (list) {
  let result =[]
  //check if the length is 0 and return an empty arr
  if(list.length === 0){return result}
 //if result is empty or if the first index of list doesn't equal results last index
  if (result.length === 0 || list[0] !== result[result.length - 1]) {
    result.push(list[0]);}
      return compress(list.slice(1), result);

};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function (tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function (array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function (array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
