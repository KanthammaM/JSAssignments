//Assignment1
// create fruits array
let fruits = [];
// add fruits to array
fruits = ['apple', 'banana', 'orange'];
// remove 1st fruit
fruits.splice(0,1);
//add grape at the end
fruits.push('grape');
// update 2nd fruit
fruits[1] = 'pear';
// print fruits array
console.log(fruits);

//Assignment2
// crreate empty object
let person = {};
// add properties
person = {
    name: 'John',
    age: '30',
    city: 'New York'
}
// delete age prop
delete person.age;
// add job prop
person.job = 'Engineer';
//update city
person.city = 'San Francisco';
//print person obj
console.log(person);

//Assignment 3
//create car array
let cars = [];
// add 3 car objs
cars = [
    {
        make: 'Toyota',
        model:'Camry',
        year: '2018'
    },
    {
        make: 'Hyundai',
        model:'i20',
        year: '2019'
    },{
        make: 'Honda',
        model:'Elevate',
        year: '2020'
    }
];
// remove first obj
cars.splice(0, 1);
// add new obj
cars.push({
    make: 'Honda',
    model:'Civic',
    year: '2023'
});
// update 2nd obj model
cars[1].model = 'Accord';
console.log(cars);

