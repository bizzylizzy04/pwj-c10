// ***Challenge 10: How to Use Helper Functions
function findMaxHelper(numbers, start) {
    let maximum = numbers[start];
    let max_location = start;
    for (let i = start; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
            max_location = i;
        }
    }
    return {max_number: maximum, max_index: max_location};
}

// console.log(findMaxHelper([5, 2, 9, 3, 7], 3));

function sortBestWithHelper(numbers) {
    // Run as many times as there are items
    for (let j = 0; j < numbers.length - 1; j++) {

        // Find max nuber & max location starting from j
        max = findMaxHelper(numbers, j);
        max_num = max['max_number'];
        max_location = max['max_index'];

        // Swap the first & max item in an array
        numbers[max_location] = numbers[j];
        numbers[j] = max_num;
    }

    return numbers;
}

console.log(sortBestWithHelper([5, 8, 2, 9, 3, 10]));
console.log(sortBestWithHelper([9, 8, 1, 12, 3, 10]));
console.log(sortBestWithHelper([5, 9, 8, 1, 12, 3, 10]));