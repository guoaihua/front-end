/*
从传递进来的字母序列中找到缺失的字母并返回它。

如果所有字母都在序列中，返回 undefined。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

String.charCodeAt()
String.fromCharCode()

算法分析：
	1.获取首尾的ascll码
	2.将字符串的ascll存入数组中
	3.从第一个ascll值递归，每次加1，直到加到最后一个。在已有的数组中查找数值，如果不存在返回-1
	则自动返回这个数值的字符
*/

function fearNotLetter(str) {
	var starNum = str.charCodeAt(0);
	var endNum =  str.charCodeAt(str.length-1);
	var arr = str.split("");
	var numArr=[],
		nowArr=[];
	arr.forEach(function(item,index){
		 numArr.push(item.charCodeAt(0));
	});
	while(starNum!==endNum){
		starNum++;
		if(numArr.indexOf(starNum)==-1){
			nowArr.push(String.fromCharCode(starNum));
		}
	}
	console.log(nowArr);
	str = nowArr.join("");
  return str!==""?str:undefined;
}

console.log(fearNotLetter("aeefghjl"));
