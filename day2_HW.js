console.log('--------- JavaScript Classes and Array Methods ---------')
console.log('Exercise #1')

class Person{
constructor(fullName,age){
    this.fullName=fullName;
    this.age=age;
}
getInfo=function(){
    return`Person's name is ${this.fullName} and they are ${this.age} old`;
}
addAge=function(){
    return this.age+1
}
}

const person1=new Person('john smith', 29);

console.log(person1.addAge())
console.log(person1.getInfo())

console.log('Exercise #2 ')

var capitals = function (word) {
	let a= word.split('')
    let result=[];
   for ( let x of a){
        if (x == x.toUpperCase()){
            result.push(a.indexOf(x))
        }
    }
    return result;
};

/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
let arrr =["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function replaceEvens(arrr){
    for (let i = 0; i < arrr.length; i++) {
        if(i%2==0) arrr.splice(i,1,'even index');   
}

let ans=Object.values(arrr)
return ans
}
console.log(replaceEvens(arrr));


