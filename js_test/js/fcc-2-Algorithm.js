function diff(arr1, arr2) {
  var newArr = [];
  newArr = arr1.filter(function(item){
        return (arr2.indexOf(item)=== -1);
  });

  var newArr2 = arr2.filter(function(item){
        return (arr1.indexOf(item)=== -1);
  });
  return newArr.concat(newArr2);

}

console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));