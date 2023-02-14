// //using Constructor Function
// function createCar(_name, _color){
//     this.name = _name;
//     this.color = _color;
//     this.drive = function(){
//         console.log(`I am driving ${this.name} whos color is ${this.color}`);
//     }
// }


// let car1 = new createCar('BMW', 'Black')
// console.log(car1)


//using Class - added in ES6 for devs coming from OOP background like C++, Java
// class Person{
//     sayHi(){
//         console.log(this)
//     }
//     constructor(_name, _age){
//         this.name=_name
//         this.age=_age
//     }
//     sayBye(){
//         console.log(this)
//     }
// }

// let person1 = new Person('pranav',30)
// person1.sayHi()
// person1.sayBye()


//classical inheritance - properties and methods of the parent class are passed down to the child class
// class Person{
//     constructor(_name, _age){
//         this.name = _name
//         this.age = _age
//     }
//     welcome(){
//         console.log(`Welcome ${this.name}`)
//     }
// }

// class Teacher extends Person{
//     constructor(name, age, _classStrength){
//         super(name, age)
//         this.classStrength = _classStrength
//     }
//     sayHi(){
//         super.welcome()
//     }
// }

// let person1 = new Person('pranav',23)
// console.log(person1)
// let teacher1 = new Teacher('Samar',1,75)
// console.log(teacher1)
// teacher1.sayHi()


////Polymorphism - same method but behaves differently based on where it is declared
// class Animal{
//     sound(){
//         console.log('Animals make different sounds')
//     }
// }

// class Dog{
//     sound(){
//         console.log('Dog Barks')
//     }
// }

// class Cat{
//     sound(){
//         console.log('Cat Mews')
//     }
// }

// let animal1 = new Animal()
// let tommy = new Dog()
// let miny = new Cat()
// animal1.sound()
// tommy.sound()
// miny.sound()


//Encapsulation - when you don't want to expose some properties to the outside word to avoid manipulation of it
// class Person{
//     constructor(_name, _age, _mobile){
//         this.name = _name
//         this.age = _age
//         var mobile = _mobile
//         this.getMobile = function(){
//             return mobile // you can only get mobile, can't update it
//         }
//     }
// }


// let mike = new Person('Mike',20,9922)
// console.log(mike)//Person { name: 'Mike', age: 20 }
// console.log(mike.getMobile()) //9922

//Prototypal Inheritance
// function Person(_name,_age){
//     this.name = _name
//     this.age = _age
// }
// Person.prototype.welcome = function(){
//     //if we don't return anything, undefined is returned by default
//     return `Hello ${this.name}`
// }

// let p1 = new Person('pranav',30)
// console.log(p1)
// console.log(p1.welcome())