/**
 * 2017-9-18 Xu JiXin
 */
var a = 3;
if(a<5){
    var b = 3;
  }
console.log(b);

if(a<5){
    a++;
    
}
console.log(a);

var c;
for(;a < 5;a ++){
     c = a + b;
};
console.log(c);


do{
    a ++
}while(a <= 10)
console.log(a);

var obj = {
   add: function(){
        do{
            a ++
        }while(a <= 5)
        return a;
    }
};
console.log(obj.add());

var obj = {
        sub : function(){
            while(a <= 20){
                return a;
        }
    }
}
console.log(obj.sub());

