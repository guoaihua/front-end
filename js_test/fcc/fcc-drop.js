/*让我们来丢弃数组(arr)的元素，从左边开始，直到回调函数return true就停止。

第二个参数，func，是一个函数。用来测试数组的第一个元素，如果返回fasle，就从数组中抛出该元素(注意：此时数组已被改变)，继续测试数组的第一个元素，如果返回fasle，继续抛出，直到返回true。

最后返回数组的剩余部分，如果没有剩余，就返回一个空数组。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程。编写你自己的代码。

这是一些对你有帮助的资源:

Arguments object
Array.shift()
Array.slice()
算法分析：
	 1.持续遍历循环用while 设置一个标志位，时刻改变标志位
	 2.break跳出循环
	 3.对数组进行继续测试，每次把结果赋值给flag 如果为真 则继续测试，并shift移除第一个数组元素
	  如果为假，则进行判断跳出循环。中间一个数组为空的检测
*/

function drop(arr, func) {
  // Drop them elements.
  var flag = true;
	while(flag){
		flag = !func(arr[0]);
		/*console.log(flag);*/
		if(!flag){
			break;
		}
		arr.shift();
		console.log(arr[0]);
		if(arr[0]===undefined){
			arr = [];
			break;
		}
		console.log(arr[7]===undefined);
			}
  console.log(arr);
  return arr;
}

drop([1,2,3,4], function(n) {return n >4; });