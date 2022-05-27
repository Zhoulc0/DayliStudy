// var mrXiao = {
//     neme : "MrXiao",
//     age : 39,
//     sex  : "male",
//     health : 100,
//     smoke : function (){
//         console.log('I am smoking ! cool!!!');
//         this.health --;
//     },

//     drink : function () {
//         console.log('I am drink');
//         this.health ++;
//     }
// }
// console.log(mrXiao.smoke());
// console.log(mrXiao.health);
// console.log(mrXiao.drink());
// console.log(mrXiao.drink());
// console.log(mrXiao.drink());
// console.log(mrXiao.drink());
// console.log(mrXiao.health);

// mrXiao.wife = 'xiawang';
// console.log(mrXiao.wife);
// console.log(mrXiao);

function Car(color) {
    this.color = color;
    this.name = "BMW";
    this.height = "1400";
    this.lang = "4800";
    this.weight = 1000;
    this.health = 100;
    this.run = function (){
        this.health --;
    }
}

var car = new Car('silver pink');
var car1 = new Car(' apricot');
console.log(car);
console.log(car1)
console.log(car.run());
console.log(car.health);
console.log(car.run());
console.log(car.health);
console.log(car.run());
console.log(car.health);
console.log(car1.health);



function Student(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.grade = 2022;
}

var student = new Student('zhangsan', 23, 'mele');
console.log(student)


