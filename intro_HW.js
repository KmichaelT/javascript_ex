//==================Exercise #1 ==========//
/*Write a function that finds the index of the first non-consecutive element in the array. 
For example, if we have an array [1, 2, 3, 5, 6, 7] then this will return 3 since the array
at index 3 is 5 which is not consecutive. If every element in the array is consecutive, return -1
*/
console.log('--------- JavaScript - Intro ---------')
console.log('Exercise #1')
const arr=[1, 2, 3, 5, 6, 7];

for (let i = 0; i < arr.length; i++) {
if (arr[i]+1 != arr[i+1]) {
    console.log(arr.indexOf(arr[i+1]))
    break
 } }




//============Exercise #2 ============//
/*Write an arrow function that when given an array of numbers, returns the sum of all of the positives ones.*/
console.log('Exercise #2')
let nums=[10, 12, -9, 3, -1, 0, 15] ;
const pos = nums.filter(num => num > 0);
let x=0;
pos.forEach(function(p){
    x+=p;
})
console.log(x);