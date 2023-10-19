console.log('test')

const ifArrIsNull = (arr) => arr.length === 0

function findBestMatch(n, arr) {
  if(ifArrIsNull(arr)){
    console.log('Array is null');
    return null;
  }

  let close = arr[0]
  let midDiff = Math.abs(n - arr[0])
  
  for(let i = 1; i < arr.length; i++){
    const dif = Math.abs(n - arr[i])
    if(dif < midDiff){
      midDiff = dif;
      close = arr[i]
    }
  }

  return close;
}

const num = 22;
const arr = [10, 15, 18, 24, 38];
const findClosest = findBestMatch(num, arr);
console.log(findClosest); // Output: 24