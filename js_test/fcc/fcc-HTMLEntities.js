/*将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

RegExp
HTML Entities
算法分析：
	1.正则表达式的2种创建方式：new RegExp(arg1(表达式),arg2(附加范围));/ 正则表达式 / 
	2.正则方法 test:返回true 或者false  replace() 替换匹配到的文字
*/

function convert(str) {
  // &colon;&rpar;
  	var a =new RegExp(/&/,"g");
  	var b =new RegExp(/>/,"g");
  	var c =new RegExp(/</,"g");
  	var d =new RegExp(/"/,"g");
  	var e =new RegExp(/'/,"g");

  	str=str.replace(a,"&amp;").replace(b,"&gt;").replace(c,"&lt;").replace(d,"&quot;").replace(e,"&apos;"); 


  	console.log(str);
  return str;
}

convert(" ' < < & Dolce & > Gabbana");
