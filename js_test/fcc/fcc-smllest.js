
/*创建一个计算两个参数之和的 function。如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果。

例如，add(2, 3) 应该返回 5，而 add(2) 应该返回一个 function。

调用这个有一个参数的返回的 function，返回求和的结果：

var sumTwoAnd = add(2);

sumTwoAnd(3) 返回 5。

如果两个参数都不是有效的数字，则返回 undefined
算法分析：
  1.对每个参数进行判断，typeof 如果得到的不是number，则返回undefined
  2.如果参数为长度为1，则返回一个函数，这个函数利用闭包获取保存了外部的值
  3.如果有2个值，则直接返回求和结果
*/

function add() {
  for(var i=0,len=arguments.length;i<len;i++){
      if(typeof arguments[i] !== 'number'){
            return undefined;
      }
  }

  if(arguments.length==1){
    var _arg = arguments[0];
      return function func(num){
            if(typeof num !=='number'){
              return undefined;
            }
            return num+_arg;
      };
  }else{
     return arguments[0]+arguments[1];
  }

}

console.log(add(2)(3));