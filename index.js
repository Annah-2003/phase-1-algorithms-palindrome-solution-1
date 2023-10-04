function isPalindrome(word) {
  // Write your algorithm here function isPalindrome(str) {
  // Convert the string to lowercase
  word = word.toLowerCase();

  // Initialize pointers for the start and end of the string
  let left = 0;
  let right = word.length - 1;

  // Loop through the string, comparing characters from both ends inward
  while (left < right) {
    // If characters at the left and right pointers are different, it's not a palindrome
    if (word[left] !== word[right]) {
      return false;
    }
    // Move the pointers towards the center of the string
    left++;
    right--;
  }

  // If the loop completes without finding a mismatch, it's a palindrome
  return true;
}



/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
