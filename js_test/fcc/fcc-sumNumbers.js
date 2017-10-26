/*给一个正整数num，返回小于或等于num的斐波纳契奇数之和。

斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。

例如，sumFibs(4)应该返回 5，因为斐波纳契数列中所有小于4的奇数是 1、1、3。

提示：此题不能用递归来实现斐波纳契数列。因为当num较大时，内存会溢出，推荐用数组来实现。

参考文档：博客园，Issue

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

Remainder
算法分析：
	1.斐波纳契数列，前一项与后一项的表示  a=1,b=1  b=a+b,a=b-a;  位置交换
	2.利用数组的reduce方法计算数组的和
*/

function sumFibs(num) {
	var arr = [1];
	var a =1,b=1;
	if(num<2){
		return 1;
	}
	while(b<=num){
		b=a+b;
		a=b-a;
		if(a%2!==0){
			arr.push(a);
		}
	
	}
	console.log(arr);
	var nums = arr.reduce(function(sum,value){
		return sum+value;
	})
	console.log(nums);

  return num;
}

sumFibs(1000);