/**
 * 2017-9-19 Xu JiXin
 */
var person = function(age){
     this.age = age;
}
var xu = new person(21);
var xin = new person(22);
person.prototype.getAge = function(){
    return this.age;
};
console.log(xu.getAge(),xin.getAge());

xu.getName = function(){
    return this.name;
};

xin.getSex = function(){
    return this.sex;
};

console.log(xin.getSex());
console.log(typeof xu.getName.prototype);
console.log(xu.getName.__proto__  === Function.prototype);
console.log(xin.getSex.__proto__  === Function.prototype);
console.log(xu.getName.__proto__  === person.prototype);
console.log(xin.getSex.__proto__  === person.prototype);
console.log(person.__proto__  === Function.prototype);

//xu.__proto__ = null;
//console.log(xu.getAge());
xu.getAge = function(){
    return this.age + 1;
}
console.log(xu.getAge());

Object.prototype.good = function(){
    console.log(2);
}
xu.good();

Function.prototype.well = function(){
    console.log(3);
}
person.well();

Function.prototype.__proto__.aa = function(){
    console.log(4);
}
xu.aa();

var b = new xu.getName();
xu.getName.prototype.c = function(){
    return  5; 
};
console.log(b.c());



