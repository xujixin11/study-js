/**
 * 2017-9-22 Xu Jixin
 */
const animal = require('./animal')

var mammal = function(){}

mammal.prototype = {
    a : 'viviparity'
}
mammal.prototype.__proto__ = animal.prototype;

module.exports = mammal;


