/**
 * 2017-9-22 Xu Jixin
 */
var animal = function(){}

animal.prototype = {
    m : 'respirable',
    n : 'removable', 
    eat : function(){
        console.log('animal.eat')
    }  
}

module.exports = animal;
