/**
 * 2017-9-22 Xu Jixin
 */
const amphibian = require('./amphibian')

var tortoise = function(){}

tortoise.prototype = {
    e : 'swimming'
}
tortoise.prototype.__proto__ = amphibian.prototype;

module.exports = tortoise;