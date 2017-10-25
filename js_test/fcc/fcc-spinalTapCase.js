/*将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

RegExp
String.replace()
算法分析：
	1. 先将所有下划线清除
	2.再用函数把大写转换为—小写
	3.将所有空格替换为—
	4.将含有2个及以上-的替换为-
*/
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  function tolower(match){
  	return '-'+match.toLowerCase();
  }

  var reg = /[A-Z]/g;

  str = str.replace(/_/g,"").replace(reg,tolower).replace(/^-/,"");
  str = str.replace(/\s/g,"-").replace(/-{2,}/g,"-");
   console.log(str);
  return str;
}

spinalCase('The_Andy_Griffith_Show');
