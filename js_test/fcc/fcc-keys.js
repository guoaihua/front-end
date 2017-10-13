/*
写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。

例如，如果第一个参数是 [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]，第二个参数是 { last: "Capulet" }，那么你必须从数组（第一个参数）返回其中的第三个对象，因为它包含了作为第二个参数传递的属性-值对。

如果你被难住了，记得使用 Read-Search-Ask编写你自己的代码。

这是一些对你有帮助的资源:

Global Object
Object.hasOwnProperty()
Object.keys()*/

/*fcc中级算法题*/

/*方案一：*/
/*function where(collection, source) {
	  	console.log(Object.keys(collection));
  		console.log(Object.keys(source));
  var arr = [];
  var sourcearr=Object.keys(source);
 arr= collection.filter(function (item,index) {  // 遍历数组collections
 		for(var i=0;i<sourcearr.length;i++){     //遍历数组sourearr
 			if(source[sourcearr[i]]!==item[sourcearr[i]]){   //当前item 中的i属性值是否相等
 				console.log("jinru"+index+"."+i);
 				return false;
 			}
 		}
 		return true;
 });


  console.log(arr);
  return arr;
}
*/
/*方案二：*/
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

function where(collection, source) {
	  	console.log(Object.keys(collection));
  		console.log(Object.keys(source));
  var arr = [];
/*  var sourcearr=Object.keys(source);*/
 arr= collection.filter(function (item,index) {  // 遍历数组collections
 		for(var i in source){
 			if(source[i]!==item[i]){         // 直接判断调用该值 不存在自然不会相等 有一个不想等即返回为false
 				return false;
 			}
 		}

 		return true;
 });


  console.log(arr);
  return arr;
}