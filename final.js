// 1.find fibonacci number
// let n =10;

// function findFibonaci(n){

    
//     if(n<=1){
//         return n
//     }

//     let map = new Array(n+1);

//     map[0]=0;
//     map[1]=1;

//     for(let i=2;i<=n;i++){
//         map[i]=map[i-1]+map[i-2];

//     }

//     return map[n];

// }

// console.log(findFibonaci(n));
// time and space complexity O(n)

// let N =['a','b','c','d','e','f','g','h'];
// let k = 5;


// function displacedKposition(N,k){


//  let n = N.length;
//      k=k%n;

//     reversed(N,0,n-1);
//     reversed(N,0,k-1);
//     reversed(N,k,n-1);

// }

// function reversed (n,left,right){

//     while(left<=right){

//         let temp = n[left];
//         n[left]=n[right];
//         n[right]=temp;
//         left++;
//         right--;
//     }


// }

// displacedKposition(N,k)
// console.log(N);

// let nums = [4,5,6,7,0,1,2,3];
// let target = 3;

// function findtarget(nums,target){

//     let left =0;
//     let right = nums.length-1;

//     while(left<=right){
//         let mid = Math.floor((left+right)/2);

//         if(nums[mid]==target){
//             return mid
//         }

//         if(nums[left]<=nums[mid]){
//             if(nums[left]<=target && target<nums[mid]){
//                 right=mid-1;
//             }
//             else{
//                 left=mid+1;
//             }
//         }
//         else{
//             if(nums[mid]<target && target<=nums[right]){
//                 left=mid+1
//             }
//             else{
//                 right=mid-1;
//             }
//         }
//     }
//     return -1
// }

// console.log(findtarget(nums,target));

// let X = 121;

//  function sqrtX(X){

//     if(X==0 || X==1){
//         return X
//     }

//     let left =1;
//     let right=Math.floor(X/2);

//     while(left<=right){
//         let mid = Math.floor((left+right)/2);
//         let square = mid*mid;

//         if(square==X){
//             return mid
//         }

//         else if(square<X){

//             left=mid+1;
//         }
//         else{
//             right=mid-1
//         }

//     }

//      return right

// }

// console.log(sqrtX(X));

// let arr = [1,2,3,4,5,7,6];

// function searchArr(arr){

//     if(arr.length<=1){
//         return true
//     }

//     let map =new Set(arr);

//     if(map.size!==arr.length){
//         return false
//     }

//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>arr[i-1]){
//             return false
//         }
//         else{
//             return true
//         }
//     }
// }

// console.log(searchArr(arr));

// let s = 'hello fox!';
// let k = 4;

// function encryptstr(s,k){

//     let result = '';

//     for(let char of s){
//         if(char.match(/[a-zA-Z]/)){
//             let base = char==char.toUpperCase()?'A'.charCodeAt(0):'a'.charCodeAt(0);
//             let encryptedcharcode = (char.charCodeAt(0)-base+k)%26+base;
//             let encrypt = String.fromCharCode(encryptedcharcode);
//             result+=encrypt;
//         }
//         else{
//             result+=char    
//         }
//     }
//     return result
// }
// console.log(encryptstr(s,k));

// let str = ['bat','tea','ate','tan','eat','nat'];

// function groupOfAnagram(str){

//     let anagramMap = new Map();

//     for(let word of str){
//         let sortedWord = word.split('').sort().join('');

//         if(!anagramMap.has(sortedWord)){
//             anagramMap.set(sortedWord,[])
//         }
//         anagramMap.get(sortedWord).push(word)
//     }

//     return Array.from(anagramMap.values())
// }

// console.log(groupOfAnagram(str));

// let nums= '14300219';
// let k = 3;

// function retrunSmalest(nums){

//     let stack= [];
//     for(let digit of nums){

//         while(stack.length>0 && k>0 && stack[stack.length-1]>digit){
//          stack.pop();
//          k--;
//         }
//         stack.push(digit)
//     }

//     while(k>0){
//         stack.pop();
//         k--;
//     }


//     let result= stack.join('').replace(/^0+/,'');

//     return result || '0'
    
// }

// console.log(retrunSmalest(nums));

// let str = 'kbx*di*gi*ta*l';

// function removestar(str){


//     let result = [];

//     for(let i = 0;i<str.length;i++){
//         if(str[i]!=='*'){
//          result.push(str[i])
//         }
//         else{
//             result.pop()
//         }
//     }
//     return  result.join('')
// }

// console.log(removestar(str));


// let arr = [1,2,3,4,2,4,3,2,1];

// function findPeak(arr){

//     let left = 0;
//     let right =arr.length-1;

//     while(left<right){
//         let mid = Math.floor((left+right)/2);
//         if(arr[mid]>arr[mid+1]){
//         right = mid
//         }
//         else{
//             left=mid+1
//         }
//     }
// return left
// }

// console.log(findPeak(arr));

// let nums=[3,30,34,5,9];

// function arangeLarge(nums){

//     nums.sort((a,b)=>{
//         let num1 = ''+a+b;
//         let num2 = ''+b+a;
        
//         return num2.localeCompare(num1)
//     })

//     if(nums[0]==0) return 0;

//     return nums.join('')
// }

// console.log(arangeLarge(nums));

let arr  = [2,5,-2,4,4,4];

function productsarr(arr){
    let max = arr[0];
    let min = arr[0];
    let result =arr[0];

    for(let i =1;i<arr.length;i++){
        let tempmax = Math.max(arr[i],min*arr[i],max*arr[i]);
        let tempmin = Math.min(arr[i],max*arr[i],min*arr[i]);

        max = tempmax;
        min=tempmin;

        result= Math.max(result,max)
    }
    return result
}
console.log(productsarr(arr));