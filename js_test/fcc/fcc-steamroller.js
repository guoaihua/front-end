function steamroller(arr) {
  var newArr = [];
  func(arr,newArr);
  return newArr;
}

function func(isarr,newArr){
        for(var i=0,len=isarr.length;i<len;i++){
          if(Array.isArray(isarr[i])){
              func(isarr[i],newArr);
          }else{
            newArr.push(isarr[i]);
          }
      }
      return newArr;
  }

 
console.log(steamroller([[["a"]], [["b"]]]));
