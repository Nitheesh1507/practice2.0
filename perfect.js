// 1.Fibonnaci number find

// function fib(n){
//     if(n<=1){
//         return n
//     }

//     let map = new Array(n+1);

//     map[0]=0;
//     map[1]=1;

//     for(let i=2;i<=n;i++){
//         map[i]=map[i-1]+map[i-2];

//     }
//     return map[n]
// }
// console.log(fib(9));
// time and space complexity O(n)


// 2.Displaced the array of words by Kth integer places

// let N = ['a','b','c','d','e','f','g','h'];
// let K = 3;

// function displacedKposition(N,K){

//     let n = N.length;
//     K = K % n;

//     reverse(N,0,n-1);
//     reverse(N,0,K-1);
//     reverse(N,K,n-1);

// }

// function reverse(N,start,end){

//     while(start<=end){
//     let temp = N[start];
//     N[start] = N[end];
//     N[end] = temp;

//     start++;
//     end--
//     }
// }

// displacedKposition(N,K)
// console.log(N);

// // Time Complexity O(n);
// // space Complexity O(1)

// 3. the array of nums it is rotated in some index  then you find the target with O(log n) time complexity
// Input: [4,5,6,7,0,1,2,3]; target:1

// let nums = [4,5,6,7,0,1,2,3];
// let target = 0;

// function findEle(nums,target){

//     let left = 0;
//     let right = nums.length-1;

//     while(left<=right){
//         let mid = Math.floor((left+right)/2);

//         if(nums[mid]==target){
//             return mid
//         }

//         if(nums[left]<=nums[mid]){

//             if(nums[left]<=target && target<nums[mid]){
//                 right = mid-1;
//             }
//             else{
//                 left = mid+1;
//             }
//         }

//         else{
//             if(nums[mid]<target && target <= nums[right]){
//                 left = mid+1
//             }
//             else{
//                 right = mid-1;
//             }
//         }
//     }

//     return -1;
// }

// console.log(findEle(nums,target));

// time complexity O(log n)
// space complexity O(1)

// 4.find the Squre root of X

// let x = 4;

// function sqrtX(x){

//     if(x==0 || x==1){
//         return x
//     }

//     let left = 1;
//     let right = Math.floor(x/2);

//     while(left <= right){

//         let mid = Math.floor((left+right)/2);
//         let square = mid * mid;

//         if(square==x){
//             return mid
//         }
//         else if(square<x){
//             left = mid+1;
//         }
//         else{
//             right = mid-1;
//         }
//     }
//     return right
    
// }

// console.log(sqrtX(24));
// time complexity O(log n)
// space complexity O(1)

// 5.encrypt forward K= charecter ahead no special charecter return
// Input:'Hello fox!', k=4

// let s = 'hello fox!';
// let k = 4;

// function encryptK(s,k){

    // let result = '';

    // for(let char of s){
    //     if(char.match(/[a-zA-Z]/)){
    //         let base = char==char.toUpperCase() ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
    //         let encryptedcharcode = (char.charCodeAt(0)-base+k)%26+base;
    //         let encryptchar = String.fromCharCode(encryptedcharcode);
    //         result+=encryptchar;
    //     }
    //     else{
    //         result+=char
    //     }
    // }
    // return result
// }

// console.log(encryptK(s,k));
// // time and space complexity O(n)

//  6.Draw the 'TIK TOC TOE' grid in html

// 7.Given an array that is represent in traversal of Binary Search Tree 

// let arr = [1,2,3,4,5,4];

// function traversalBstorNot(arr){

//     if(arr.length<=1){
//         return true
//     }

//     let set = new Set(arr);

//     if(set.size!==arr.length){
//         return false
//     }

//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<arr[i-1]){
//             return false
//         }
//         else{
//             return true
//         }
        
//     }
// }

// console.log(traversalBstorNot(arr));
// // time and space complexity O(n)

//let check given two word anagram or Not

// let s ='tea';
// let t ='ate';

// function chckAnagram(s,t){

//     if(s.length!==t.length){
//         return false
//     }

//     let sFrequency={};
//     let tFrequency={};

//     for(let char of s){
//         sFrequency[char]=(sFrequency[char]||0)+1;
//     }

//     for(let char of t){
//         tFrequency[char]=(tFrequency[char]||0)+1;
//     }

//     for(let char in sFrequency){
//         if(sFrequency[char]!==tFrequency[char]){
//             return false
//         }
//     }
//     return true
// }
// console.log(chckAnagram(s,t));

// time complexity O(n);
// space complexity O(n);

// 8.Given an words of array anagram togethar you return answer in any order
// input:['bat','tea','ate','tan','eat','nat'], output:[['bat'],['tea','ate','eat'],['tan','nat']]


// let str = ['bat','tea','ate','tan','eat','nat'];

// function groupOfAnagram(str){
// let anagramMap = new Map();

// for(let word of str){
//     let sortedWotd = word.split('').sort().join('');

//     if(!anagramMap.has(sortedWotd)){
//         anagramMap.set(sortedWotd,[])
//     }
//     anagramMap.get(sortedWotd).push(word)
// }

// return Array.from(anagramMap.values())

// }

// console.log(groupOfAnagram(str));

// // time complexity O(n * n log n)
// // space complexity O(n)

// 9.given sting nums and int k remove the k size int and retrun the smallest num

// let nums= '14300219';
// let k = 3;

// function removeKthele(nums,k){

//   let stack = [];

//   for(let digit of nums){
//     while(stack.length>0 && k>0 && stack[stack.length-1]>digit ){
//         stack.pop();
//         k--;
//     }
//     stack.push(digit)
//   }

//   while(k>0){
//     stack.pop();
//     k--
//   }

//   let result = stack.join('').replace(/^0+/,'');

//   return result || '0'

  

// }

// console.log(removeKthele(nums,k));

// // time complexity O(n)
// // space complexity O(n)

// 10.find element after sorting in array

// let arr = [1,2,5,2,3];
// let target = 2;

// function findelement (arr,target){
//     arr.sort((a,b)=>a-b)

//     let result =[];

//     for(let i=0;i<=arr.length;i++){
//         if(arr[i]==target){
//             result.push(i)

//         }
//     }
//    return result
// }

// console.log(findelement(arr,target));
// // time complexity O(n log n)
// // space complexity O(n)

// 11.Given Integer array nums, rotate the array right k steps
// nums:[1,2,3,4,5,6,7] k = 3 

// let nums = [1,2,3,4,5,6,7];
// let k = 3;

// function rotateArr(nums,k){

//     let n = nums.length;
//     k = k % n;

//     reverse(nums,0,n-1);
//     reverse(nums,0,k-1);
//     reverse(nums,k,n-1);

    
// }

// function reverse(nums,start,end){

//     while(start<=end){
//         let temp = nums[start];
//         nums[start]=nums[end];
//         nums[end]=temp

//         start++;
//         end--;
//     }
// }

// rotateArr(nums,k);
// console.log(nums);
// // time complexity O(n)
// // space complexity O(1)

// 12.Remove the star from string and close non star element remove
//  input:str='kbx*di*gi*ta*l' output:kbdgtl

// let str = 'kbx*di*gi*ta*l';

// function removestar(str){

//     let result = [];

//     for(let i=0;i<=str.length-1;i++){
//         if(str[i]!=='*'){
//             result.push(str[i])
//         }
//         else{
//             result.pop()
//         }
//     }
//     return result.join('')
// }

// console.log(removestar(str));
// // time and space complexity O(n)

// 13.find Peak element in given Array

// let arr = [1,2,3,4,5,4,3,2,1];

// function findPeak(arr){

//     let left = 0;
//     let right = arr.length-1;

//     while(left<right){
//         let mid = Math.floor((left+right)/2);

//         if(arr[mid]>arr[mid+1]){
//             right=mid
//         }
//         else{
//             left=mid+1
//         }
//     }
//     return left
// }

// console.log(findPeak(arr));

// Time complexity O(log n)
// space complexity O(1)

// 14.Given Integer nums arrange that largest number
//   input:nums=[3,30,34,5,9] Output:'9534330'

// let nums = [1,3,7,9,3,55,4];

// function makeLargestStr(nums){


//     nums.sort((a,b)=>{
//         let nums1 = ''+a+b;
//         let nums2 = ''+b+a;

//         return nums2.localeCompare(nums1)
//     })

//     if(nums[0]==0) return 0;

//     return nums.join('')

// }
// console.log(makeLargestStr(nums));

// // time complexity O(n log n)
// // space complexity O(1)

// 15.given array nums and integer K return k largest element of the sorted array

// let nums = [3,2,1,5,6,4];
// let k = 2;

// function kthlargestelem(nums,k){
//     nums.sort((a,b)=>b-a)

//     return nums[k-1]
// }

// console.log(kthlargestelem(nums,k));

// // time complexity O(n log n)
// // space complexity O(1)

// let nums = [3,2,1,5,6,4];
// let k = 2;

// function Kthlargestele(nums){

//     nums.sort((a,b)=>a-b);

//     let start = 0;
//     let end = nums.length;

//     reverse(nums,start,end);

  
 
// }

// function reverse (nums,start,end){
//     while(start<=end){
//         let temp = nums[start];
//         nums[start++]=nums[end];
//         nums[end--]=temp
//     }
// }

// Kthlargestele(nums);;
// console.log(nums[k]);

// 16.Largest product of sub array

// let arr  = [2,5,-2,4,4,4];

// function LargestPro(arr){

//   let max =arr[0];
//   let min =arr[0];
//   let result =arr[0];

//   for(let i =1;i<arr.length;i++){

//     let tempmax = Math.max(arr[i],max*arr[i],min*arr[i]);
//     let tempmin = Math.min(arr[i],max*arr[i],min*arr[i]);

//     max=tempmax;
//     min=tempmin;

//     result = Math.max(result,max)
//   }


//   return result

// }

// console.log(LargestPro(arr));
// // time complexity O(n)
// // space complexity O(1)

// STRING

// 1.Given string two string check anagram or not

// let s = 'vikatakavi';
// let t = 'vikatagavi';

// function findAnagram(s,t){

//     if(s.length!==t.length){
//         return false
//     }
//     let sFrequency = {};
//     let tFrequency = {};

//     for(let char of s){
//         sFrequency[char]=(sFrequency[char]||0)+1
//     }

//     for(let char of t){
//         tFrequency[char]=(tFrequency[char]||0)+1
//     }

//     for(let char in sFrequency){
//         if(sFrequency[char]!==tFrequency[char]){
//           return false
//         }
        
//     }
//     return true
// }

// console.log(findAnagram(s,t));
// time and space complexity O(n)

// 2.given two string that is Subsequence of another str or not

// let s = 'adl';
// let t = 'abcdejkl';


// function subsequence(s,t){

//   let  sIndex = 0;
//   let  tIndex = 0;

    
//     while(sIndex<s.length && tIndex<t.length){

//         if(s[sIndex]==t[tIndex]){
//             sIndex++;
//             tIndex++
//         }
//         else{
//             tIndex++
//         }
//     }
//     return sIndex==s.length
// }

// console.log(subsequence(s,t));
// time complexity O(n+m);
// space complexity O(1)

// // 3.find the largest palindrome
// let s = 'prolevelo'
// var longestPalindrome = function(s) {
    
//     let longest = '';

//     function findPalindrome(left,right){

//         while(left>=0 && right<s.length && s[left]==s[right]){  
//                 left--;
//                 right++
//         }
//         return s.slice(left+1,right)
//     }

//     for(let i = 0;i<s.length;i++){
//         let palindrome1 = findPalindrome(i,i);
//         let palindrome2 = findPalindrome(i,i+1);
        
//         if(palindrome1.length>longest.length){
//             longest = palindrome1
//         }
//         if(palindrome2.length>longest.length){
//             longest= palindrome2
//         }
//     }

//     return longest
// };

// console.log(longestPalindrome(s));

// space complexity O(n)
// time complexity O(n^2)

// 4.given pattern s is a subarray of word

// let patterns = ["a","abc","bc","d"];
// let word = "abc";

// var numOfStrings = function(patterns, word) {
    
//     let count = 0;

//     for(let i of patterns){

//         if(word.includes(i)){
//             count++
//         }
//     }

//     return count
// };
// console.log(numOfStrings(patterns,word));
// space complexity O(1)
// time complexity O(m*n)

// 5.Reverse of string

// 5.I.reverse the letters

// let str = 'Nithish Kumar';

// function reversestr(str){

//     let result ='';

//     for(let i=str.length-1;i>=0;i--){
//         result+=str[i]
//     }
//     return result
// }
// console.log(reversestr(str));

// // space and time complexity O(n)

// 5.II.reverse the word by using space

// let str = 'Nithish Kumar SAI';

// function reverseWord(str){

//     let arr = str.split('');

//     let left = 0;
//     let right = 0;

//     while(right<=arr.length){
//         if(arr[right]==' '){
//             reversed(arr,left,right-1);
//             left=right+1;
//         }
//         right++
//     }
    
//      reversed(arr,left,right-1);

//      return arr.join('')

    
// }

// function reversed(arr,left,right){

//     while(left<right){
//         let temp = arr[left];
//         arr[left++]=arr[right];
//         arr[right--]=temp;
//     }
// }

// console.log(reverseWord(str));
// // time and space complexity O(n);

// 5.III reverse with word

// let str  = 'Nithish kumar IAS Trichy';

// function reverseWord(str){

//     let arr = str.split(' ');

//     arr.reverse()

//     return arr.join(' ')

// }

// console.log(reverseWord(str));
// time and space O(n)

// 6.Roman to Integer

// let s = 'MMII';

// function RomanInt(s){

//     let romanMap = {
//         'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000
//     }

//     let result = 0;

//     for(let i=0;i<s.length;i++){
//         if(romanMap[s[i]]<  romanMap[s[i+1]]){
//             result-=romanMap[s[i]]
//         }
//         else{
//             result+=romanMap[s[i]]
//         }
//     }

//     return result
// }

// console.log(RomanInt(s));
// time complexity O(n)
// space complexity O(1)

// 6.II Int to Roman

// let int = 1998;

// function intRoman(int){

//     let intRomanMap = {
//         1:'I',4:'IV',5:'V',9:'IX',10:'X',40:'XL',50:'L',90:'XC',100:'C',400:'CD',500:'D',900:'CM',1000:'M'
//     }

//    const values = Object.keys(intRomanMap).map(Number).sort((a,b)=>b-a);

//    let result = ''

//    for(let value of values){

//     while(int>=value){
//         result+=intRomanMap[value];
//         int-=value
//     }
//    }

//    return result
// }

// console.log(intRoman(1998));
// // time and space O(1)

// 7.Longest Prefix of the string

// let str = ['flower','flow','flot','flog'];

// function LargestPrefix(str){

//     str.sort();

//     let first = str[0];
//     let last = str[str.length-1];

//     let result = '';

//     for(let i=0;i<first.length;i++){
//         if(first[i]!==last[i]){
//           break
//         }
//         else{
//             result +=first[i]
//         }
//     }

//     return result
// }

// console.log(LargestPrefix(str));

// 8.version number check ignore lead zero vers1<vers2 = -1:1:0

// let version1 = "1.231";
// let version2 = "1.021";

// function versionNumberCheck(version1,version2){
     
//     let v1 = version1.split('.');
//     let v2 = version2.split('.');

//     let maxlen = Math.max(v1.length,v2.length);

//     for(let i=0;i<maxlen;i++){
//         if(i<v1.length){
//             num1 = parseInt(v1[i]);
//         }
//         else{
//             num1 = 0;
//         }

//         if(i<v2.length){
//             num2 = parseInt(v2[i])
//         }
//         else{
//             num2=0
//         }

//         if(num1<num2){
//             return -1
//         }
//         else if(num1>num2){
//             return 1
//         }
//     }

  

//     return 0
// }

// console.log(versionNumberCheck(version1,version2));

// Array

// 1.Set matrix Zero

// let matrix = [[1,2,9],
//               [4,0,6],
//               [1,8,9]
//     ];


// function checkMatrixZero(matrix){
    
//     let firstRow = false;
//     let firstCol = false;

//     for(let i=0;i<matrix.length;i++){
//         for(let j=0;j<matrix[0].length;j++){
//             if(matrix[i][j]==0){
//                 if(i==0) firstRow = true;
//                 if(j==0) firstCol = true;
//                 matrix[i][0]=0;
//                 matrix[0][j]=0;
//             }
//         }
//     }
    
//     for(let i=1;i<matrix.length;i++){
//         for(let j=1;j<matrix[0].length;j++){
//             if(matrix[i][0]==0 || matrix[0][j]==0){
//                 matrix[i][j]=0;
//             }
//         }
//     }
    

//     if(firstRow){
//         for(let j=0;j<matrix[0].length;j++){
//             matrix[0][j]=0
//         }
//     }
//     if(firstCol){
//         for(let i=0;i<matrix.length;i++){
//             matrix[i][0]=0
//         }
//     }

//     return matrix
// }

// console.log(checkMatrixZero(matrix));

// // Best time complexity O(m*n)
// // space complexity O(1)

// kananes algorithm

// 2.maximum Sum of sub Array

// let arr = [2,3,4,-1,9,11,2,5];

// function maxSumof (arr){

//     let currentMax = arr[0];
//     let maxMax = arr[0];

//     for(let i=1;i<arr.length;i++){
//         currentMax = Math.max(arr[i],currentMax+arr[i]);
//         maxMax = Math.max(currentMax,maxMax);
//     }

//     return maxMax
// }

// console.log(maxSumof(arr));

// time complexity O(n)
// space complexity O(1)

// // 3.Stock buy and sell

// let price = [2,1,5,3,100,7,8];

// function findProfit(price){

//     let left =0;
//     let right =1;
//     let maxprofit=0;

//     while(left<price.length){
//         if(price[left]<price[right]){
//             let profit = price[right]-price[left];
//             maxprofit = Math.max(profit,maxprofit);
//         }
//         else{
//             left=right
//         }
//         right++
//     }

//     return maxprofit
// }
// console.log(findProfit(price));

// 4.Rotate Matrix 90*;

// let matrix = [[1,2,3],
//               [4,5,6],
//               [7,8,9]
// ];

// function rotateMatrix(matrix){

//     let n = matrix.length;

//     for(let i=0;i<n;i++){
//         for(let j=i;j<n;j++){
//             [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]]
//         }
//     }

//     for(let i =0;i<n;i++){
//         matrix[i].reverse()
//     }

//     return matrix
// }

// console.log(rotateMatrix(matrix));
// // time complexity O(n^2)
// // space complexity O(1)

// 5.merge two sorted array without ExatraSpace

// let arr1 = [1,2,3,4];
// let arr2 = [1,2,3,4,5,6,7,8];

// function mergeArr(arr1,arr2){

//    let n = arr1.length;
//    let m = arr2.length;

//    let i = n-1;
//    let j = m-1;
//    let k = n+m-1;

//    while(i>=0 && j>=0){
//        if(arr1[i]>arr2[j]){
//         arr1[k]=arr1[i];
//         i--;
//        }
//        else{
//         arr1[k]=arr2[j];
//         j--;
//        }
//        k--;
//    }

//    while(j>=0){
//        arr1[k]=arr2[j];
//        j--;
//        k--;
//    }

//    return arr1
// }

// console.log(mergeArr(arr1,arr2));

// time complexity O(m+n)
// space complexity O(1)

// 6.find Duplicate N+1 Integer

// let arr = [3,324,5,23,33,43,232,11,2332,12,32,23,123];


// function findDuplicate(arr){

//     arr.sort((a,b)=>a-b);

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==arr[i+1]){
//             return arr[i]
//         }
//     }
// }

// console.log(findDuplicate(arr));

// function findDuplicate (arr){

//     let seen = new Set();

//     for(let element of arr){
//         if(seen.has(element)){
//             return element
//         }
//         else{
//             seen.add(element)
//         }
//     }

//     return -1
// }

// console.log(findDuplicate(arr));
// the time and space complexity of this code O(n)


// 7.Search in 2D matrix

// let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
// let target = 3;

// function searchElement(matrix,target){

//     if(!matrix || matrix.length==0 ||matrix[0].length==0){
//         return false
//     }

//     let row = matrix.length;
//     let col = matrix[0].length; 

//     let left = 0;
//     let right = row*col-1;

//     while(left<=right){

//         let mid = Math.floor((left+right)/2);
//         let middleIndex = matrix[Math.floor(mid/col)][mid%col];

//         if(target==middleIndex){
//             return true
//         }
//         else if(target<middleIndex){

//            right=mid-1;

//         }
//         else{
//             left=mid+1;
//         }
//     }

//     return false
// }

// console.log(searchElement(matrix,target));
// // the best case time complexity O(log m * n);
// // the space complexity O(1)

// 8.pow(x,n)

// let x=2;
// let n=10;

// function pow(x,n){

//     if(n==0){
//         return 1
//     }
//     if(n==1){
//         return x
//     }
//     if(n<0){
//         n=-n;
//         x=1/x
//     }
// let result =1;
//     while(n>0){
//         if(n%2===1){
//          result*=x
//         }
//         x*=x;
//         n=Math.floor(n/2);
//     }
//     return result
// }

// console.log(pow(2,10));
// // the best case time comnplexity O(log n);
// // the time complexity of this code O(1)

// 9. find majority of Element n/2

// let nums = [3,1,3];

// function majorityEle(nums){

//     let majority = nums[0];
//     let vote = 1;

//     for(let i=1;i<nums.length;i++){


//        if(vote==0){

//         majority=nums[i];
//         vote++
//         }

//       else if(majority==nums[i]){
//             vote++;
//         }
//         else{
//             vote--;
//         }
//     }
//     return majority
// }

// console.log(majorityEle(nums));
// // best case time complexity O(n);
// // best case space complexity O(1)

// 10.Two sum problem 

// let nums = [2,7,11,15,97], target = 99;

// function twoSum(nums,target){

//     let numMap = new Map();

//     for(let i=0;i<nums.length;i++){
//         let num1 = nums[i];
//         let num2 = target-num1;

//         if(numMap.has(num2)){
//            return [numMap.get(num2),i]
//         }

//         numMap.set(num1,i)
        
//     }
//     return -1
          
// }

// console.log(twoSum(nums,target));

// // time complacity O(n)
// // space complexity O(n)

// // 11.three sum 

// let nums = [-1,0,1,2,-1,-4];
// let target = 0;


//     // nums.sort((a,b)=>a-b);
   
// function quickSort(nums){
//     if (nums.length<2){
//         return nums
//     }

//     let pivot = nums[nums.length-1];
//     let leftarr = [];
//     let rightarr = [];
    
//     for (let i=0;i<nums.length-1;i++){
//         if(nums[i]<pivot){
//             leftarr.push(nums[i]);
//         }
//         else{
//             rightarr.push(nums[i]);
//         }
//     }
//     return [...quickSort(leftarr), pivot,...quickSort(rightarr)]

// }
    


// function threeSum(nums,target){


//     nums=quickSort(nums)
   

//     let result = [];

//     for(let i=0;i<nums.length-2;i++){
//         if(i>0 && nums[i]==nums[i-1]){
//             continue
//         }

//         let left = i+1;
//         let right = nums.length-1;

//         while(left<right){
//             let sum = nums[i]+nums[left]+nums[right];
//             if(sum==target){
//                 result.push([nums[i],nums[left],nums[right]]);
//                 while(left<right && nums[left]==nums[left+1]){
//                     left++
//                 }
//                 while(left<right && nums[right]==nums[right-1]){
//                     right--
//                 }
//                 left++;
//                 right--;
//             }
//             else if(sum<target){
//                left++
//             }
//             else{
//                 right--;
//             }

           
//         }
        
//     }

//     return result
    
// }

// console.log(threeSum(nums,target));
// // time complexity O(n log n)
// // space complexity O(n)

