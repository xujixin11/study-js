/**
 * 2017-9-22 Xu Jixin
 */
const cow = require('./cow')

const dog = require('./dog')

const tortoise = require('./tortoise')

const crocodile = require('./crocodile')

var mm = new cow();

var nn = new dog();

var oo = new tortoise();

var pp = new crocodile();

console.log(mm.m)
mm.eat();