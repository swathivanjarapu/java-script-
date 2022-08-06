// var i=0;
// while (i<10){
//     console.log(i);
//     i++;
// }
// var a=[1,4,6,8,9,12];
// a.forEach(element => {console.log(element)
    
// });
// var a="1";
// var b="5";
// var c=3;
// console.log(a+b+c)
// var b=[1,2,3,2,3,4];
// // var a=new Set(b);
// console.log([...new Set(b)])


function maps(x){
    a=[]
    for(let i of x){
      b=i*2
      a.push(b)
    }
    return a
}
console.log(maps([1,2,3]))