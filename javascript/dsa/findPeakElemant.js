function findPeakElemant(arr){
let n = arr.length
  for (let i = 0; i < n; i++) {
            
            if ((i == 0 || arr[i] > arr[i - 1]) && (i == n - 1 || arr[i] > arr[i + 1])) {
                return i; 
            }
        }
        return -1; // Return -1 if no peak is found
    }


let arr = [1,2,5,7,8,3];
console.log(findPeakElemant(arr));
