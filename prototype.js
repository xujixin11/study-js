/**
 * 2017-9-19 Xu JiXin
 */
console.log(`typeof Function -- ${typeof Function}`);
console.log(`typeof Object  -- ${typeof Object}`);
console.log(`typeof Function.prototype  --  ${typeof Function.prototype}`);
console.log(`typeof Function.__proto__  --  ${typeof Function.__proto__}`);
console.log(`typeof Object.__proto__  --  ${typeof Object.__proto__}`);
console.log(`typeof Object.prototype  --  ${typeof Object.prototype}`);
console.log(`Function.__proto__ === Object.__proto__ -- ${Function.__proto__ === Object.__proto__}`);
console.log(`Function.prototype === Object.prototype -- ${Function.prototype === Object.prototype}`);
console.log(`Function.__proto__ === Function.prototype -- ${Function.__proto__ === Function.prototype}`);
console.log(`Object.__proto__ === Object.prototype -- ${Object.__proto__ === Object.prototype}`);
console.log(`Function.__proto__ === Object.prototype -- ${Function.__proto__ === Object.prototype}`);
console.log(`Function.prototype === Object.__proto__ -- ${Function.prototype === Object.__proto__}`);
console.log(`Function.prototype.prototype  -- ${Function.prototype.prototype}`);
console.log(`typeof Object.prototype.__proto__ -- ${typeof Object.prototype.__proto__}`);
console.log(`typeof Function.prototype.__proto__  -- ${typeof Function.prototype.__proto__}`);
console.log(`Object.prototype.__proto__ ===  Object.prototype  --  ${Object.prototype.__proto__ ===  Object.prototype}`);
console.log(`Object.prototype.__proto__ ===  null  --  ${Object.prototype.__proto__ ===  null}`);

var bike = function(){

}
console.log(`typeof bike.prototype -- ${typeof bike.prototype}`);
console.log(`typeof bike.__proto__ -- ${typeof bike.__proto__}`);
console.log(`typeof bike.prototype.__proto__ -- ${typeof bike.prototype.__proto__}`);
console.log(`bike.prototype === Object.prototype -- ${bike.prototype === Object.prototype}`);
console.log(`bike.__proto__ === Function.prototype -- ${bike.__proto__ === Function.prototype}`);
console.log(`typeof bike.__proto__.__proto__ -- ${typeof bike.__proto__.__proto__}`);

var car = new bike();
bike.prototype = car;
console.log(`typeof car.prototype -- ${typeof car.prototype}`);
console.log(`typeof car.__proto__ -- ${typeof car.__proto__}`);
console.log(`typeof car.__proto__.__proto__ -- ${typeof car.__proto__.__proto__}`);
