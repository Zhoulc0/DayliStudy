// function Pereson(name, height){
//     this.name = name;
//     this.height = height;
//     this.say = function(){
//         console.log(this.say);
//     }
// }
// console.log(new Pereson('xiaozhang', 178).name);


// function Pereson(name, height){
//     var that = {};
//     that.name = name;
//     that.height = height;
//     that.say = function(){
//         console.log(this.say);
//     }
//     return that;
// }
//  var pereson = Pereson('xiaoxu',175);
// var pereson1 = Pereson('xiaozhou',178);
// console.log(pereson);
// console.log(pereson1);


// var str = "abc";
// str += 1;
// var test = typeof(str);
// if(test.length == 6){
//     test.sign ="typef的返回结果可能为String";
// }
// console.log(test.sign);



// function employee(name, code) {

//     this.name = "zhangsan";
//     this.code = "a001";
// }
// var newemp = new employee("lisi",'a002');
// console.log(newemp);


// function Pereson(name, age, sex) {
//     var a = 0;
//     this.name = name;
//     this.age = age;
//     this.sex = sex; 
//     function sss() {
//         a ++;
//         console.log(a);
//     }
//     this.say = sss;
// }

// var oPerson = new Pereson();
// oPerson.say();
// oPerson.say();
// var oPerson1 = new Pereson();
// oPerson1.say();
// oPerson1.say();


// var x = 1, y = z = 0;

// function add(n) {
//     return n = n + 1;
// }
// y = add(x);

// function add(n) {
//     return n = n + 4
// }
// z = add(x);

// console.log(x);

// console.log(y);

// console.log(z);

