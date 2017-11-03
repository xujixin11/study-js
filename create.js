/**
 * 2017-9-19 Xu JiXin
 */
var person = {
    age : 21
};
person.getage = function(){
    return 0;
}

var a = Object.create(person,{
    age : {
        value : 22
    }
});
console.log(a.__proto__);
console.log(a.getage());

a.__proto__.name = 1;
console.log(person.name);

var b = Object.create(person,{});
b.__proto__.sex = 3;
console.log(a.sex);
console.log(a.age,b.age);

var c = [];
console.log('------------Array-----------');
console.log(typeof c);
console.log(c.__proto__);
console.log(c.__proto__ ===  Object.prototype);
console.log(c.__proto__ ===  Function.prototype);
console.log(c.__proto__.__proto__ ===  Object.prototype);
console.log(c.__proto__ === Array.prototype);
console.log(c.__proto__.constructor);
console.log(c.__proto__.constructor === Function.prototype.constructor);
console.log(c.__proto__.constructor === Function.prototype);
console.log(Object.__proto__.constructor);
console.log(Function.__proto__.constructor);
console.log(Array.__proto__ === Object.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);
var z = new Array();
console.log(z.__proto__);
console.log(z.__proto__ === Array.prototype);
console.log(z.__proto__.__proto__ === Object.prototype);

var d ='';
console.log('------------String------------');
console.log(typeof d);
console.log(d.__proto__);
console.log(d.__proto__ ===  Object.prototype);
console.log(d.__proto__ ===  Function.prototype);
console.log(d.__proto__.__proto__ === Object.prototype);
console.log(d.__proto__ === String.prototype);
console.log(d.__proto__.constructor);
console.log(String.__proto__ === Object.prototype);
console.log(String.prototype.__proto__ === Object.prototype);

var x = 12;
console.log('------------Number------------');
console.log(typeof x);
console.log(x.__proto__);
console.log(x.__proto__ === Number.prototype);
console.log(x.__proto__ === Function.prototype);
console.log(x.__proto__ === Object.prototype);
console.log(x.__proto__.__proto__ === Object.prototype);
console.log(x.__proto__.constructor);
console.log(Number.__proto__ === Object.prototype);
console.log(Number.prototype.__proto__ === Object.prototype);

var y = true;
console.log('-----------Boolean-----------');
console.log(typeof y);
console.log(y.__proto__);
console.log(y.__proto__ === Boolean.prototype);
console.log(y.__proto__ === Function.prototype);
console.log(y.__proto__ === Object.prototype);
console.log(y.__proto__.__proto__ === Object.prototype);
console.log(y.__proto__.constructor);
console.log(Boolean.__proto__ === Object.prototype);
console.log(Boolean.prototype.__proto__ === Object.prototype);

var car = Object.create(null,{
    age : {
        enumerable : false,
        writable :  true,
        configurable : true,
        value : 2,
    }
});
var bike = Object.create (car,{});
console.log('--------1---------');
console.log(bike.age);
console.log(car);

Object.defineProperty(car,'age',{
    enumerable : true,
    writable : true,
    configurable : true,
    value : 10,
});
console.log('--------2---------');
console.log(car.age);


Object.defineProperty(car,'bb',{
        enumerable : true,
        writable : true,
        configurable : true,
        value : 10,
})
console.log(car.bb)

Number.prototype.getB = function(){
    return 1
};
console.log('---------3--------');
console.log(x.getB());

Object.freeze(bike);
bike.name = 21;
console.log('---------4--------');
console.log(bike.name);
Object.seal(car);
car.sex = 3;
car.age = 5;
console.log(car.sex,car.age);

