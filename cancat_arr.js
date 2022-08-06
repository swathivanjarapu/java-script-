// let primeNumbers = [2, 3, 5, 7, 11];
// let compositeNumbers = [9, 15, 4, 51];
// let primeAndComposite = primeNumbers.concat(compositeNumbers);
// console.log(primeAndComposite);

// let primeNumbers = [2, 3, 5, 7, 11];
// let compositeNumbers = [9, 15, 4, 51];
// let primeAndComposite = [].concat(primeNumbers, compositeNumbers);
// console.log(primeAndComposite)

// let arr1 = [[1, 2, 3], [4, 5, 6]];
// let arr2 = [7, 8, [9, 10]];
// let arr = arr1.concat(arr2);
// console.log(arr);

// let primeNumbers = [2, 3, 5, 7, 11];
// let compositeNumbers = [9, 15, 4, 51];
// let primeAndComposite = [...primeNumbers, ...compositeNumbers];
// console.log(primeAndComposite);

function add(arr){
    for(let i=0; i<arr.length; i++){
      arr[i] = arr[i] + 10;
    }
  }
   
let evenArr = [2,4,6,8,10]
add(evenArr);
   
console.log(evenArr)


