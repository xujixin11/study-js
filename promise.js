/**
 * 2017-9-23 Xu Jixin
 */
function asyncFunction() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('Async Hello world');
      }, 2000);
    });
  }
  
asyncFunction().then(function (value) {
    console.log(`1-${value}`);
    return 'aaaa';
  }).then(function(value){
    console.log(`2-${value}`);
    return {
      value : value,
      age : 2
    }
  }).then(function(v){
    console.log(`3-${v.value} - ${v.age}`);
    console.log(a);
  }).catch(function (error) { 
    console.log(`catch-${error}`);
    return 'hello';
  }).then(function(v){
    console.log(`4-${v}`);
  })
asyncFunction();









