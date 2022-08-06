let a=[4,7,8,12,156,78]
let b=a.reduce((n,m)=>{
    if(n>=m){
        return n
    }else{
        return m
    }

})
console.log(`${b}`)


// let numbers = [4, -4, 10, 203, 53, 11];
// let maximumValue = numbers.reduce((acc, curr)=>{
//     if(acc>=curr){
//         return acc;
//     }else{
//         return curr;
//     }
// }, 0);
// console.log(`The maximum value in an array: ${maximumValue}`);