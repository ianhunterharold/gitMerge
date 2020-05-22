var merge = function(nums1, m, nums2, n) {
   

    let addAll = nums1.concat(nums2)
    
    for (let i =addAll.length - 1; i>=0 ;i--){
      if (addAll[i] === 0){
        let rmve = addAll.splice(i,1);
      }
    }

    let sortedArr = addAll.sort((a,b) => a-b);
    
    return sortedArr;
};

//assume array 1 has initialized space to grown
const numOne = [1,2,3,0,0,0];
const initialAmount= 3;
const initialAmount2 = 3;
const numTwo = [2,5,6];

merge(numOne,initialAmount,numTwo,initialAmount2);

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]