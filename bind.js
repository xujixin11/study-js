/**
 * 2017-9-18 Xu JiXin
 */
var a = [];
var add = function(a, b){
   return this.age = 21;
} 
console.log(add.apply(a, [1, 2]));

console.log(add.bind()()); 

console.log(add.call(a));   