/**
 * 2017-9-22 Xu Jixin
 */
const amphibian = require('./amphibian')

var crocodile = function(){}

crocodile.prototype = {
    f : 'carnivore'

}
crocodile.prototype.__proto__ = amphibian.prototype;

module.exports = crocodile;