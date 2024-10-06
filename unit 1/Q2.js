//Javascript Array Manipulation Assignment

const numbers= [5, 3, 8, 1, 2]

// After adding 4: [5, 3, 8, 1, 2, 4]
function addNumber(array,number) {
    array.push(number);
}

// After removing 3: [5, 8, 1, 2, 4]
function removeNumber(array,number) {
    const index= array.findIndex((num)=> num===number);
    array.splice(index,1);
}

// Sorted array: [1, 2, 4, 5, 8]
function sortNumbers(array) {
    return numbers.sort();
}

// Sum of numbers: 20
function sumNumbers(array) {
    return array.reduce((sum,current)=> sum+current,0)
}

// Average of numbers: 4
function averageNumbers(array) {
    return sumNumbers(array)/array.length;
}

addNumber(numbers,7);
console.log(numbers);
removeNumber(numbers,3);
console.log(numbers);
sortNumbers(numbers)
console.log(numbers);
console.log(sumNumbers(numbers));
console.log(averageNumbers(numbers));


