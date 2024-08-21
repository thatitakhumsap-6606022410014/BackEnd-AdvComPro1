function longestUniqueSubarrayWithTargetSum(arr, targetSum) {
    let maxLength = 0;
    let maxSubarray = [];
    let start = 0;
    let currentSum = 0;
    let seen = new Set();

    for (let end = 0; end < arr.length; end++) {

        while (seen.has(arr[end])) {
            seen.delete(arr[start]);
            currentSum -= arr[start];
            start++;
        }

        seen.add(arr[end]);
        currentSum += arr[end];

        if (currentSum === targetSum) {
            let currentLength = end - start + 1;
            if (currentLength > maxLength) {
                maxLength = currentLength;
                maxSubarray = arr.slice(start, end + 1);
            }
        }
    }

    return {
        maxLength,
        subarray: maxLength > 0 ? maxSubarray : []
    };
}

console.log(longestUniqueSubarrayWithTargetSum([2, 3, 4, 5, 6, 2, 3, 4, 7], 15)); 
console.log(longestUniqueSubarrayWithTargetSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 15)); 
console.log(longestUniqueSubarrayWithTargetSum([4, 5, 6, 7, 7, 8, 9, 10, 11], 26)); 
console.log(longestUniqueSubarrayWithTargetSum([1, 1, 1, 1], 2)); 