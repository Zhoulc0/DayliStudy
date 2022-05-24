
    function a() {
          var aa =345
        function b() {
            var bb=123
            function c(){
             var cc = 234

            }
            c();
        }
        b();
    }
    a();


function a() {
      var num = 100;
      function b () {
          num++;
          console.log(num)
      }
      return b



}
var demo = a();
demo();
demo();

function test() {
    var num = 100;
    function a() {
        num ++;
        console.log(num);
    }
    function b() {
        num --;
        console.log(num);
        }
        return [a,b];

}
var myArr = test();
 myArr[0]();
 myArr[1]()


function test() {
     
    var arr = []
    for(var i = 0; i < 10; i++) {

        (function (j){
            arr[j] = function () {

        
                console.log(j);
            }
        }(i))
    }
    
    return arr;
}
var myArr = test();
for(var j = 0; j < 10; j ++){
    myArr[j]();
}