function hasTargetSum(numberArray, target) {
  // Write your algorithm here

  // Iterate through array first time to  pick each number for comparison with other numbers
  for (let i = 0; i < numberArray.length; i++) {

  // Assign each chosen number a variable 'firstNumber'
    let firstNumber = numberArray[i],
  // Find the value that the second number should take for the sum of the pair to be equal to the target sum
    secondNumber = target - firstNumber;

  // Iterate through array once more to find a value that matches the second required number without counting the first number again
    for (let x = i+1; x < numberArray.length; x++) {

  // Return true  if second number exists
      if (numberArray[x] === secondNumber) {
        return (numberArray[x] === secondNumber)
      }
    }
  }
  // if second number does not exist, return false.
  return false;
}


console.log(hasTargetSum([22, 19, 4, 6, 30], 25));
console.log(hasTargetSum([1,2,3], 7));

/* 
  Write the Big O time complexity of your function here

  0(n**2) - quadratic
*/

/* 
  Add your pseudocode here

  // Iterate through array first time to  pick each number for comparison with other numbers

  // Assign each chosen number a variable 'firstNumber'

  // Find the value that the second number should take for the sum of the pair to be equal to the target sum

  // Iterate through array once more to find a value that matches the second required number without counting the first number again
  // Return true  if second number exists else return false.



*/

/*
  Add written explanation of your solution here

  The function created should compare every unique pair of values in the array and find their sum, checking if it matches the provided target sum. So I choose the first number from the array, subtract the number from the target sum to know what the second number should be, then search for the second number among the remaining ones. If none is found, the second number in the array is chosen and the process repeated.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log('');

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5, 3, 8], 12));

  console.log('');

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1,5.5,9,2.5,8], 8));
}

module.exports = hasTargetSum;
