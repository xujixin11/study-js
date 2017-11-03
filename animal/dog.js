/**
 * 2017-9-22 Xu Jixin
 */
const mammal = require('./mammal')

var dog = function(){}

dog.prototype = {
    d : 'omnivorous'
}
dog.prototype.__proto__ = mammal.prototype;

module.exports = dog;