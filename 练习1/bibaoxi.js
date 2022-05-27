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



// a = 100;
// function deno(e) {
//     function e() {}
//         arguments[0] = 2;
//         console.log(e);
//         if(a) {
//             var b = 123;
//             function c(){

//             }
//         }
//         var c;
//         a = 10;
//         var a;
//         console.log(b);
//         f = 123;
//         console.log(c);
//         console.log(a);
// }
// var a;
// deno(1);
// console.log(a);
// console.log(f);



var f = (
    function f(){
        return "1";
    },
    function g() {
        return 2;
    }
)();
console.log(typeof f);




var x = 1;
if(function f() {}){
    x += typeof f;
}
console.log(x);