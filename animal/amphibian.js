/**
 * 2017-9-22 Xu Jixin
 */
const animal = require('./animal')

var amphibian = function(){}

amphibian.prototype = {
    b : 'oviparity'
}
amphibian.prototype.__proto__ = animal.prototype;

module.exports = amphibian;

