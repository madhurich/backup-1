//https://www.codewars.com/kata/53c235e4d5cd9c397200021d/train/javascript

var obj1 = {
  name: 'mad',
  age: 23
};

var obj2 = {
  age: 23,
  name: 'mad'
};

function deepCompare(obj1, obj2){
  var c = 0;
    if(typeof(obj1) == 'object' && typeof(obj2) == 'object'){
      if(Object.keys(obj1).length >= Object.keys(obj2).length){
      for(var x in obj1){
        if(obj1.hasOwnProperty(x) && obj2.hasOwnProperty(x) && obj1[x] == obj2[x]){
          c++;
        }
      }
      if(c == Object.keys(obj1).length){
        return true;
      }else{
        return false;
      }
    }else if(Object.keys(obj2).length > Object.keys(obj1).length){
      for(var y in obj1){
        if(obj1.hasOwnProperty(y) && obj2.hasOwnProperty(y) && obj1[y] == obj2[y]){
          c++;
        }
      }
      if(c == Object.keys(obj2).length){
        return true;
      }else{
        return false;
      }      
    }
  }else{
    return 'they are not objects';
  }
}

deepCompare(obj1, obj2);