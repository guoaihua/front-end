/*写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。

换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。

非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序。

请参照下面验证判断中的例子。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

Arguments object
Array.reduce()
算法分析：
  1.解析传递的参数arguments，它是一个伪数组
  2.遍历每一个参数，对每一个参数数组进行遍历，在初始的数组中查找，返回不存在的item，
  构建新数组（filter方法）
  3.数组拼接 concat
*/
function unite(arr1, arr2, arr3) {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments.length);
  var arr = [];
  for(var i=0,len=arguments.length;i<len;i++){
        var newArr = arguments[i].filter(function(item,index){
                if(arr.indexOf(item)===-1){
                    return item;
                }
        })
        arr = arr.concat(newArr);
  }
 return arr;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);