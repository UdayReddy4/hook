var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
]; 

test.forEach(function(element, index) {
    if (element % 3 === 0) { // Check if the element is divisible by 3
        test[index] += 100; // Add 100 to the element if it is divisible by 3
    }
});

console.log(test);git 