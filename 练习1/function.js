// function scream(animal){
//     switch(animal) {
//         case "dog":
//             console.log("wang")
//             return;
//         case "cat":
//                 console.log("miao")
//                 return;
//     }
// }

// function mul(n) {

//    if(n == 1){
//        return 1
//    }
// return n * mul(n - 1)

// }
// mul(5)

function fd(n){
   
    if(n == 1 || n == 2 ){
        return 1
    }
    return fd(n - 1) + fd(n - i)

}