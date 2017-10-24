/*写一个 function，它遍历数组 arr，并返回数组中第一个满足 func 返回值的元素。举个例子，如果 arr 为 [1, 2, 3]，func 为 function(num) {return num === 2; }，那么 find 的返回值应为 2。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

Array.filter()
算法分析：
 1.遍历数组，对一个元素运行给定函数
 2.符合的返回true
 3.在filter遍历中为true的会返回到数组中
*/

function find(arr, func) {
  var num = 0;
  num = arr.filter(function(item,index){
  	/*	console.log(func(item));*/
  		if(func(item)){
  			return item;
  		}
  });
  console.log(num);

  return num[0]!==""?num[0]:undefined;
}

console.log(find([1, 2, 3, 4], function(num){ return num % 2 === 0; }));