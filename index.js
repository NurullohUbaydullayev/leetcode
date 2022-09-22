// 1. Two Sum
// https://leetcode.com/problems/two-sum/submissions/

/*
var twoSum = function (nums, target) {
  const hashmap = {};
  for (let index = 0; index < nums.length; index++) {
    let complement = target - nums[index];
    if (complement in hashmap) {
      return [hashmap[complement], index];
    }
    hashmap[nums[index]] = index;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
*/

// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/

/*
var addTwoNumbers = function (l1, l2) {
  const result = [];
  let carry = 0;

  for (let i = 0; i < l1.length || i < l2.length; i++) {
    const x = l1[i] ? l1[i] : 0;
    const y = l2[i] ? l2[i] : 0;
    const sum = x + y + carry;
    carry = Math.floor(sum / 10);
    const mod = sum % 10;
    result.push(mod);
  }

  return result;
};

console.log(addTwoNumbers([0], [0]));
*/

// TODO 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/


