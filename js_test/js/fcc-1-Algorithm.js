function sumAll(arr) {
  var max=Math.max.apply(null,arr),
       min=Math.min.apply(null,arr);
  
  while(min!==max-1){
  	min++;
    arr.push(min);
  }
  
  console.log(arr);
  return arr.reduce(function(sum,value){
      return sum+value;
  });
}

console.log(sumAll([5, 10]));