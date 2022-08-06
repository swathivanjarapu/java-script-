let a =require("readline-sync");
var b= a.questionInt("enter number")
var c= a.questionInt("enter number")
// for (let i = b; i <= c; i++) {
//         let flag = 0;
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 flag = 1;
//                 break;
//             }
//         }
//         if (i > 1 && flag == 0) {
//             console.log(i);
//         }
// }


// var i=b
// while(i<=c){
//     let c=0
//     let j=2
//     while(j<i){
//         if(i%j==0){
//             c=1
//             break
//         }
//         j++
//     }
//     if(i>=2 && c==0){

//         console.log(i)
//     }
//     i++
    
// }

for(var i=b;i<=c;i++){
    if(i>2){
        for(var j=2;j<=i;j++){
            if(i%j==0){
                break
            }
        else{
            console.log(i)
        }
        }
       
    }
}