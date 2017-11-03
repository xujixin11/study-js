/**
 * 2017-9-22 Xu Jixin
 */
/*
 function animal(){
};

animal.prototype.species = 'mammal'

function cat(name){
    animal.apply(this, arguments);
    this.name = name
};

var c = new cat('a');
console.log(c)

cat.species = 'bird';
console.log(animal.prototype.species)
*/

/*
console.log('-----------构造函数绑定-----------')

function Animal() {
    this.species = 'animal';
}

function Cat(name,color) {
    Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}

var  a = new Cat('x', 'y')
console.log(a)
*/

/*
console.log('-----------prototype模式-----------')

function Animal() {
    this.species = 'animal';
}
  
function Cat(name,color) {
    this.name = name;
    this.color = color;
}
  
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;    // 必须要加，否则 Cat.prototype.constructor === Animal
  
var  a = new Cat('x', 'y')
console.log(a)
*/

/*
console.log('----------直接继承prototype---------')

function Animal() { }
Animal.prototype.species = "animal";
  
function Cat(name,color) {
    this.name = name;
    this.color = color;
}

Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;    // 会把 Animal.prototype.constructor 修改为 Cat

var  a = new Cat('x', 'y')
console.log(a)
*/


/*console.log('--------利用空对象---------')

function Animal() {
    this.species = 'animal';
}
  
function Cat(name,color) {
    this.name = name;
    this.color = color;
}

var F = function(){};
F.prototype = Animal.prototype;

Cat.prototype = new F();
Cat.prototype.constructor = Cat;

console.log(F)*/


console.log('---------拷贝继承------------')

function Animal() {
    this.species = 'animal';
}
  
function Cat(name,color) {
    this.name = name;
    this.color = color;
}

function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
      c[i] = p[i];
    }
    c.uber = p;
}

console.log('---------object方法----------')

function object(o) {
    function F() {}
  
    F.prototype = o;
    return new F();
}

console.log('--------浅拷贝-----------')// 拷贝了p的内容，指针指向地址与p指向地址为同一个内存小格

function extendCopy(p) {
    var c = {};
  
    for (var i in p) {
      c[i] = p[i];
    }
  
    c.uber = p;
    return c;
  }

console.log('--------深拷贝----------')//拷贝时拷贝了内容，同时指向了一个新的内存小格，互不影响

function deepCopy(p, c) {
    var c = c || {};
  
    for (var i in p) {
      if (typeof p[i] === 'object') {
        c[i] = (p[i].constructor === Array) ? [] : {};
        deepCopy(p[i], c[i]);
      } else {
        c[i] = p[i];
      }
    }
    return c;
  }