/*Search and Replace
使用给定的参数对句子执行一次查找和替换，然后返回新句子。

第一个参数是将要对其执行查找和替换的句子。

第二个参数是将被替换掉的单词（替换前的单词）。

第三个参数用于替换第二个参数（替换后的单词）。

注意：替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。

如果你被难住了，记得使用 Read-Search-Ask尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

Array.splice()
String.replace()
Array.join()*/


function myReplace(str, before, after) {
  var arr = str.split(" ");
  if(before.charAt(0)>='A' && before.charAt(0)<='Z'){ // 判断一个字母大小写 大写字母位于 'A' 和 'Z' 之间 小写字母在 'a'和'z'之间
  		after = after.replace(after.charAt(0),after.charAt(0).toUpperCase());   // 获取字符串的一个字符 charAt()
  		console.log(after);
  }

  var num =arr.indexOf(before);
  arr.splice(num,1,after);
  str=arr.join(" ");
  console.log(str);
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");