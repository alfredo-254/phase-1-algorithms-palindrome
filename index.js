function isPalindrome(word) {
  // Write your algorithm here
}
function isPalindrome(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();
  
  // Remove non-alphabetic characters
  str = str.replace(/[^a-z]/g, '');

  // Check if the string is equal to its reverse
  return str === str.split('').reverse().join('');
}
// Explanation of solution through example
// Example usage:
const inputString = "racecar";
const result = isPalindrome(inputString);

if (result) {
  console.log(`${inputString} is a palindrome.`);
} else {
  console.log(`${inputString} is not a palindrome.`);
}


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("lemon"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("mother"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
