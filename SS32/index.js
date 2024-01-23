
// Object literal - {}
// let person = {
//     //Properties : thuộc tính - tính chất
//     //dùng để chỉ đến các đối tượng cần mô tả
//     // key : value
//     // key2: value2
//     // keyN: valueN
//     name: "CG",
//     age: 25,
//     school: "PTIT",
//     favoriteFoods: ["gr"],
//     bestFriends: ["gb"],
//     exBoyFriends: ["HJ"],
//     height: 160,
//     weight: 45,
//     single: true,
//     // Methods: Phương thức - hành động mà các đối tượng có thể thực hiện đc
//     // key: value(function),
//     // keyN: valueN(function)
//     eat: function(){
//         console.log("Ăn món ăn này ngon lắm...");
//     },
//     seeFriends: function(){
//         console.log("Mày bị điên à !!!!");
//     },
// };
// let person2 = {
//     age: 19,
//     gender: ["nữ"],
//     name: ["Thu quỳnh"],
//     email: ["nttq@gmail.com"],
//     phone: ["0774674649"],
//     address: ["567- Thanh Xuân"],
//     eat: function(){
//         console.log("Thích ăn cơm rang");
//     }
// };
// let person3 = {
//     age: 18,
//     gender: ["nam"],
//     name: ["Thu Quang"],
//     email: ["nttq@gmail.com"],
//     phone: ["8736766467"],
//     height: 176,
//     weight: 457,
// };
// let student1 ={
//     id: 1,
//     name: "BN",
//     age: 18,
//     school: "PTIT",
// };
// let student12 ={
//     id: 2,
//     name: "jod",
//     age: 20,
//     school: "PTIT",
// };
// let student3 ={
//     id: 3,
//     name: "Nvs",
//     age: 19,
//     school: "PTIT",
// };
// function Student(name, id, age, school) {
//     //keyword "this"
//     //khi đc use trong construstor function sẽ đc ngầm ràng buộc tới chính constructor function đó
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.school = school;
// }
// let student1 = new Student("eddeAG", 1, 18, "PTIT");
// let student2 = new Student("ĐeeM", 2, 17, "PTIT");
// let student3 = new Student("PedN", 3, 20, "PTIT");

// console.log("Student 1", student1);
// console.log("Student 2", student2);
// console.log("Student 3", student3);

//Từ khóa class
// class Student {
    //Khi khởi tạo đối tượng bằng từ khóa new
    //Từ class
    //--> constructor luôn đc chạy đầu tiên
//     constructor(name, id, age, school) {
//     this.name = name;
//     this.id = id;
//     this.age = age;
//     this.school = school;
//     }
//     introduce() {
//         console.log("Xin chào!!!!");
//     }
// };
// let student1 = new Student("NP", 1, 19, "PTIT");
// let student2 = new Student("XQ", 2, 20, "PTIT");
// let student3 = new Student("NL", 3, 17, "PTIT");
// console.log("student 1", student1);
// console.log("student 2", student2);
// console.log("student 3", student3);
// thuộc tính prototype là gì ???
// Thuộc tính prototype-based inheritance (Kế thừa dạng Prototype)
//trong js là ntn ????


let person = {
//Properties : thuộc tính - tính chất
        //dùng để chỉ đến các đối tượng cần mô tả
        // key : value
        // key2: value2
        // keyN: valueN
        name: "CG",
        age: 25,
        school: "PTIT",
        favoriteFoods: ["gr", "hug", "kj"],
        bestFriends: ["gb"],
        exBoyFriends: ["HJ"],
        height: 160,
        weight: 45,
        single: true,
        // Methods: Phương thức - hành động mà các đối tượng có thể thực hiện đc
        // key: value(function),
        // keyN: valueN(function)
        eat: function(){
            console.log("Ăn món ăn này ngon lắm...");
        },
        seeFriends: function(){
            console.log("Mày bị điên à !!!!");
        },
    };
// Dot Notation(.)
console.log(
    `Xin chào, tôi là ${person.name}, tôi thích món ${person.favoriteFoods}`
);
//Bracket Notation ([])
console.log(
    `Xin chào, tôi là ${person["name"]}, tôi thích món ${person["favoriteFoods"][2]}`
);
person["height"];
//Read All - duyệt qua toàn bộ thuộc tính trong một đối tượng 
//for ... in
for(let key in person){
    person[key]
    //person.key
    //Cú pháp person.key không sử dụng đc ????
    console.log(key);
    person.key
    // person[key] -- person["name"]
    // person[key] -- person["age"]
    //...
    // person[key] -- person["age"]
}





