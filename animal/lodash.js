/**
 * 2017-9-21 Xu Jixin
 */
const _ = require('lodash');

console.log('---------1 : chunk--------------')//讲数组进行拆分
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
console.log(_.chunk(['a', 'b', 'c', 'd'], 3));

console.log('---------2 : compact-------------')//输出一个新的数组，组内元素除去0、false、空、未定义
console.log(_.compact([0, 1, false, 2, '', 3]));

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log('---------3 : concat---------------')//将俩个数组链接到一起
console.log(other);
console.log(array);

console.log('---------4 : difference------------')//输出第一个数组中，第二个数组没有的值
console.log(_.difference([2,1], [2,3]));

console.log('---------5 : differenceBy----------')//输出俩个数组不相等的值
console.log(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(_.differenceBy([{'x' : 2}, {'x' : 1}], [{'x' : 1}], 'x'));

var objects = [{'x' : 1, 'y' : 2},{'x' : 2, 'y' : 1}];
console.log('---------6 : differenceWith---------')//输出俩个数组不相等的部分
console.log(_.differenceWith(objects,[{'x' : 1, 'y' : 2}], _.isEqual));

console.log('----------7 : drop------------------')//从前往后删
console.log(_.drop([1, 2, 3]));
console.log(_.drop([1, 2, 3], 2));
console.log(_.drop([1, 2, 3],5));
console.log(_.drop([1, 2, 3], 0));

console.log('----------8 : dropRight-----------')//从后往前删
console.log(_.dropRight([1, 2, 3]))
console.log(_.dropRight([1, 2, 3],2))
console.log(_.dropRight([1, 2, 3],5))
console.log(_.dropRight([1, 2, 3,],0))

var users = [
    {'user' : 'barney', 'active' : true},
    {'user' : 'fred', 'active' : false},
    {'user' : 'pebbles', 'active' : false}
];
console.log('----------9 : dropRightWhile--------')//从下到上查找，true就删除,直到找到false
console.log(_.dropRightWhile(users,function(o) {return !o.active;}));
console.log(_.dropRightWhile(users,{'user' : 'pebbles', 'active' : false}));
console.log(_.dropRightWhile(users, ['active', false]));
console.log(_.dropRightWhile(users, 'active'));

var users1 = [
    {'user' : 'barney', 'active' : false},
    {'user' : 'fred', 'active' : false},
    {'user' : 'pebbles', 'active' : true}
];
console.log('----------10 : dropWhile--------')//从上到下查找
console.log(_.dropWhile(users1,function(o) {return !o.active;}));
console.log(_.dropWhile(users1,{'user' : 'pebbles', 'active' : false}));
console.log(_.dropWhile(users1, ['active', false]));
console.log(_.dropWhile(users1, 'active'));

var array = [1, 2, 3];
console.log('----------11 : fill-------------')
console.log(_.fill(array, 'a'))
console.log(_.fill(Array(3), 2))
console.log(_.fill([4, 6, 8, 10], '*', 1, 3))

var users2 = [
    {'user' : 'barney', 'active' : false},
    {'user' : 'fred', 'active' : false},
    {'user' : 'pebbles', 'active' : true}
];
console.log('----------12 : findIndex---------')//从上到下查找，返回数组的位置
console.log(_.findIndex(users2,function(o) {return o.user == 'barney';}));
console.log(_.findIndex(users2,{'user' : 'fred', 'active' : false}));
console.log(_.findIndex(users2, ['active', false]));
console.log(_.findIndex(users2, 'active'));

var users3 = [
    {'user' : 'barney', 'active' : true},
    {'user' : 'fred', 'active' : false},
    {'user' : 'pebbles', 'active' : false}
];
console.log('--------13 : findLastIndex--------')//从下到上查找，返回数组的位置
console.log(_.findLastIndex(users3, function(o){return o.user == 'pebbles'}))
console.log(_.findLastIndex(users3, {'user' : 'barney', 'active' : true}))
console.log(_.findLastIndex(users3, ['active', false]))
console.log(_.findLastIndex(users3, 'active'))

console.log('---------14 : flatten-------------')//降低数组的一个维度
console.log(_.flatten([1, [2, [3, [4]], 5]]))

console.log('---------15 :flattenDeep-------------')//降低至只有一个维度
console.log(_.flattenDeep([1, [2, [3, [4]], 5]]))

var array = [1, [2, [3, [4]], 5]];
console.log('---------16 : flattenDepth------------')//降低至最大深度
console.log(_.flattenDepth(array, 1));
console.log(_.flattenDepth(array, 2))

console.log('---------17 : fromPairs---------------')//返回键值对
console.log(_.fromPairs([['a', 1],['b', 2],['c', 3]]))

console.log('---------18 : head--------')//获取数组的第一个元素
console.log(_.head([1, 2, 3]))
console.log(_.head([]))

console.log('---------19 : indexOf---------')//给出数组中的值，从特定的位置查找，返回数组中的位置
console.log(_.indexOf([1, 2, 1, 2], 2))
console.log(_.indexOf([1, 2, 1, 2], 2, 2))

console.log('--------20 : initial---------')//返回除了最后一个元素的数组
console.log(_.initial([1, 2, 3]))
console.log(_.initial([1, 2, 3, 4]))

console.log('--------21 : intersection-------')//返回俩个数组相等的部分
console.log(_.intersection([2, 1], [2, 3]))

console.log('--------22 : intersectionBy------')//返回俩数组相等的部分
console.log(_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor))
console.log(_.intersectionBy([{'x' : 1 }], [{'x' : 2}, {'x' : 1}], 'x'))

var objects = [{'x' : 1, 'y' : 2}, {'x' : 2, 'y' : 1}]
var others = [{'x' : 1, 'y' : 1}, {'x' : 1, 'y' : 2}]
console.log('--------23 : intersectionWith-------')//俩个数组相交
console.log(_.intersectionWith(objects, others, _.isEqual))

console.log('--------24 : join-----------')//将数组中的元素用分隔符分开
console.log(_.join(['a', 'b', 'c'], '~'))

console.log('-------25 : last--------')//返回数组的最后一个元素
console.log(_.last([1, 2, 3]))

console.log('-------26 : lastIndexOf--------')//从右向左，从特定的位置查找给定的值，返回数组中的位置
console.log(_.lastIndexOf([1, 2, 1, 2], 2))
console.log(_.lastIndexOf([1, 2, 1, 2], 1, 3))

var array = ['a', 'b', 'c', 'd'];
console.log('-------27 : nth-------------')//获取数组下标n的元素。如果n为负，则从尾部返回的第n个元素。
console.log(_.nth(array, 1))
console.log(_.nth(array, -2))

var array = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log('-------28 : pull------------')//删除给定的数组元素
console.log(_.pull(array, 'a', 'c'))
console.log(_.pullAll(array, ['a', 'c']))

var array = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log('-------29 : pullAll----------')//删除给定的数组元素，给定的参数为一个数组
console.log(_.pullAll(array, ['a', 'c']))
console.log(_.pullAll(array, 'a', 'c'))

var array = [{'x' : 1}, {'x' : 2}, {'x' : 3}, {'x' : 1}];
console.log('-------30 : pullAllBy---------')//迭代比较是否相等，返回不相等的数组
console.log(_.pullAllBy(array, [{'x' : 1}, {'x' : 3}], 'x'))

var array = [{'x' : 1, 'y' : 2}, {'x' : 3, 'y' : 4}, {'x' : 5, 'y' : 6}];
console.log('-------31 : pullAllWith-------')//进行数组间的比较，留下不相等的部分
console.log(_.pullAllWith(array, [{'x' : 3, 'y' : 4}], _.isEqual))

var array = ['a', 'b', 'c', 'd'];
var pulled = _.pullAt(array, [1, 3]);
console.log('-------32 : pullAt------------')//返回的数组为删除的数组元素
console.log(array)
console.log(pulled)

var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n){
    return n % 2 == 0;
});
console.log('--------33 : remove----------')//从数组中删除谓词返回truthy的所有元素，并返回已删除元素的数组。
console.log(array);
console.log(evens);

var array = [1, 2, 3];
console.log('-------34 : reverse----------')//反转数组，使第一个元素变为最后一个元素，第二个元素变成第二个元素，以此类推。
console.log(_.reverse(array));
console.log(array);

var array = [1, 2, 3, 4, 5];
console.log('-------35 : slice-----------')//返回一个数组，从给定位置开始，结束位置为给定位置的前一个
console.log(_.slice(array, 1, 3))

console.log('-------36 : sortedIndex-------')//使用二进制搜索来确定将值插入数组的最低索引，以维持其排序顺序。
console.log(_.sortedIndex([30, 50], 40))
console.log(_.sortedIndex([30, 40, 50], 60))

var objects = [{ 'x': 4 }, { 'x': 5 }];
console.log('-------37 : sortedIndexBy---------')//返回数组中匹配的特定值得位置
console.log(_.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }));
console.log(_.sortedIndexBy(objects, { 'x': 4 }, 'x'));

console.log('-------38 : sortedIndexOf---------')//返回匹配元素在数组中的第一个位置
console.log(_.sortedIndexOf([4, 5, 5, 5, 6], 5));
console.log(_.sortedIndexOf([1, 2, 3, 3, 4], 3));

console.log('------39 : sortedLastIndex--------')//返回元素插入数组中的最后位置
console.log(_.sortedLastIndex([4, 5, 5, 5, 6], 5))
console.log(_.sortedLastIndex([1, 2, 2, 2, 3], 2))
console.log(_.sortedLastIndex([1, 2, 2, 2, 3], 4))

var objects = [{ 'x': 4 }, { 'x': 5 }];
console.log('------40 : sortedLastIndexBy--------')//返回所给参数应该插入到数组中的最后位置
console.log(_.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }))
console.log(_.sortedLastIndexBy(objects, { 'x': 4 }, 'x'))

console.log('------41 : sortedLastIndexOf---------')//返回所匹配元素在数组中最后的位置
console.log(_.sortedLastIndexOf([4, 5, 5, 5, 6], 5))

console.log('------42 : sortedUniq-------')//返回删除重复元素后的数组
console.log(_.sortedUniq([1, 1, 2]))
console.log(_.sortedUniq([1, 1, 2, 2, 3]))

console.log('------43 : sortedUniqBy------')
console.log(_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor))

console.log('------44 : tail--------')//返回删除了第一个元素的数组
console.log(_.tail([1, 2, 3]))
console.log(_.tail([2, 3]))

console.log('------45 : take--------')//从数组的第一个元素开始，返回给定个数的数组
console.log(_.take([1, 2, 3]));
console.log(_.take([1, 2, 3], 2));
console.log(_.take([1, 2, 3], 5));
console.log(_.take([1, 2, 3], 0));

console.log('-----46 : takeRight------')//从数组的最后一个元素开始，返回给定个数的数组
console.log(_.takeRight([1, 2, 3]))
console.log(_.takeRight([1, 2, 3], 2))
console.log(_.takeRight([1, 2, 3], 5))
console.log(_.takeRight([1, 2, 3], 0))

var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];
console.log('------47 : takeRightWhile------')//创建从末端提取的元素的数组。元素被采用，直到谓词返回falsey。
console.log(_.takeRightWhile(users, function(o) { return !o.active; }))
console.log(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }))
console.log(_.takeRightWhile(users, ['active', false]))
console.log(_.takeRightWhile(users, 'active'))

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

console.log('-----------48 : takeWhile-----------')//创建从一开始就提取的元素的数组。元素被采用，直到谓词返回falsey。
console.log(_.takeWhile(users, function(o) { return !o.active; }))
console.log(_.takeWhile(users, { 'user': 'barney', 'active': false }))
console.log(_.takeWhile(users, ['active', false]))
console.log(_.takeWhile(users, 'active'))

console.log('-----------49 : union------------')//俩个数组相比较，第一个数组中的元素全部返回，第二个数组中返回和第一个数组不相等的元素
console.log(_.union([2], [1, 2]))
console.log(_.union([2], [1, 2, 3]))
console.log(_.union([3], [1, 2, 3]))
console.log(_.union([2, 3], [1, 2, 3]))

console.log('-----------50 : unionBy----------')//俩个数组相比较，第一个数组中的元素全部返回，第二个数组中返回和第一个数组不相等的元素
console.log(_.unionBy([2.1], [1.2, 2.3], Math.floor))
console.log(_.unionBy([{'x' : 1}], [{'x' : 2}, {'x': 1}], 'x'))

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
console.log('-----------51 : unionWith---------')//比较两个数组，返回他们不相等的元素重新组合成新的数组
console.log(_.unionWith(objects, others, _.isEqual))

console.log('-----------52 : uniq-------------')//返回数组元素中不相等的元素
console.log(_.uniq([2, 1, 2]))
console.log(_.uniq([1, 2, 2, 3, 3, 4]))

console.log('-----------53 : uniqBy-----------')//返回数组元素中不相等的元素
console.log(_.uniqBy([2.1, 1.2, 2.3], Math.floor))
console.log(_.uniqBy([{'x' : 1}, {'x' : 2}, {'x' : 1}], 'x'))

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
console.log('-----------54 : uniqWith----------')//对数组进行比较，相等的元素只返回一个
console.log(_.uniqWith(objects, _.isEqual))

var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
console.log('------------55 : unzip-------------')//对组合后的数组进行拆分
console.log(_.unzip(zipped))
console.log(zipped)

var zipped = _.zip([1, 2], [10, 20], [100, 200]);
console.log('------------56 : unzipWith----------')//按给定的方式进行分组
console.log(_.unzipWith(zipped, _.add))
console.log(_.unzipWith(zipped))
console.log(_.unzipWith(zipped, _.subtract))

console.log('------------57 : without------------')//返回排除指定元素的数组
console.log(_.without([2, 1, 2, 3], 1, 2))
console.log(_.without([1, 2, 2, 3], 2))

console.log('-------------58 : xor----------------')//返回数组中相互不重复的元素
console.log(_.xor([2, 1], [2, 3]))
console.log(_.xor([1, 2, 3], [2, 4, 5], [2, 6, 7]))
console.log(_.xor([1, 2, 3], [2, 3, 4], [2, 5, 6]))

console.log('------------59 : xorBy--------------')//同xor
console.log(_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor))
console.log(_.xorBy([{'x' : 1}], [{'x' : 2}, {'x' : 1}], 'x'))
 
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
console.log('------------60 : xorWith------------')//同xor
console.log(_.xorWith(objects, others, _.isEqual))

console.log('------------61 : zip---------------')//每个数组选出一个元素进行重新组合
console.log(_.zip(['a', 'b'], [1, 2], [true, false]))
console.log(_.zip(['a', 'b', 'c'], [1, 2]))

console.log('------------62 : zipObject---------')//返回新的对象，每个变量有一个属性标识符和相应的值
console.log(_.zipObject(['a', 'b'], [1, 2]))
console.log(_.zipObject(['a', 'b', 'c'], [1, 2, 3]))

console.log('------------63 : zipObjectDeep----------')
console.log(_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]))

console.log('------------64 : zipWith-------------')//返回重新组合的数组
console.log(_.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c){
    return a + b + c;
}))
