
// let A = [ 10,5,7,4,6];

// function changePos(A){

//     for(let i=0;i<=A.length-1;i++){
//         let temp=-1
//         for(let j=i+1;j<A.length;j++){
//             temp = Math.max(temp,A[j]);
//         }
//         A[i]=temp
//     }
//     return A
// }

// console.log(changePos(A))

let s = "A man, a plan, a canal: Panama";

function checkPallindrome(s){

    let S = s.split('');
    let R = S.reverse();
    
    for(let i=0;i<=S.length;i++){
        for(let j=0;j<=R.length;j++){
            if(S[i]==R[j]){
                return true
            }
            else{
                return false
            }
        }
    }
  
}


console.log(checkPallindrome(s));