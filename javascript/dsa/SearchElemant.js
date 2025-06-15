function searchInsertK(arr,k){
    let n = arr.length;
let l = 0;
let r = n-1;
while(l<=r){
    let mid = Math.floor(l+r/2);
   if(arr[mid] === k){
    return mid;
   }
   else if(arr[mid] >k){
    r = mid - 1;
   }
   else{
    l = mid +1;
   }
   return l;
}
}
let arr = [1,3,4,5,7];
let k = 5

console.log(searchInsertK(arr,k));
