/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const result = [];
  nums.reduce((acc, curr) => {
    acc = acc + curr;
    result.push(acc);
    return acc;
  }, 0);
  return result;
};
