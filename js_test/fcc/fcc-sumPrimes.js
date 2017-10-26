/*求小于等于给定数值的质数之和。

只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。

给定的数不一定是质数。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

For Loops
Array.push()*/
function sumPrimes(num) {
  var arr = [];
  var isPrimes = false;
  var sum = 0;
  var i=2; 
  while(i<=num) {
    for(var j=2; j<i; j++) {
      if(i % j === 0) {
        isPrimes = true;
        break;
      }
    }
    
    if(!isPrimes) {
      arr.push(i);
    }
    i++;
    isPrimes = false;
  }
  
  console.log(arr);
  for(var k=0; k<arr.length; k++) {
    sum += arr[k];
  }
  return sum;
}
sumPrimes(14);