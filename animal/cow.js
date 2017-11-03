/**
 * 2017-9-22 Xu Jixin
 */
const mammal = require('./mammal')

var cow = function(){}

cow.prototype = {
    c : 'herbivorous'
}
cow.prototype.__proto__ = mammal.prototype;

module.exports = cow;