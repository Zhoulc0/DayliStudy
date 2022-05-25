// function test (){
//     var arr = [];
//     for (var i = 0; i < 10; i ++){
//         (function (j) {
//              arr[j] = function(){
//                 console.log(j);
//             }
//         }(i));
//     }
//     return arr
// }
// var myArr = test();
// for(var j = 0; j < 10; j ++){

//     myArr[j]();
// }



// function a() {
//     function b() {
//         var bbb = 234;
//         console.log(aaa);
//     }
//     var aaa = 123;
//     return b;
// }
// var glob = 100;
// var dome = a();
// dome();

// function tesp(){
//     var tesp = 100;
//     function a(){
//         console.log(tesp)
//     }
//     return a;
// }
// var demo = tesp();
// demo();


// var dmoe;
// function tyst(){
//      var doms = 100;
//     function a() {
//         console.log(doms);
//     }
//     dmoe = a
// }
//  tyst();
//  dmoe();

// function sun() {
//     var num = 0;
//     function a(){
//         console.log(++ num);
//     }
//     return a;
// }
// var muAdd = sun();
// muAdd();
// muAdd();
// muAdd();


function test() {
    var food = 'apple';
    var obj = {
        eatFood : function (){
            if(food != "") {
                console.log("I am eating" + food);
                food = "";
            }else{
                console.log("There is nothing! empty!");
            }
        },
        pushFood : function (myFood) {
            food = myFood;
        }
    }
    return obj;
}
var person =test();
person.eatFood();
person.eatFood();
person.pushFood('banana');
person.eatFood();