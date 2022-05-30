'use strict';
//lastIndexOf
let arr = [2, 5, 9, 2];
Array.prototype.myLastIndexOf = function(search,fromIndex){
    fromIndex = fromIndex ? typeof fromIndex === 'number' ? fromIndex 
                : (fromIndex-=0) && fromIndex === fromIndex ? fromIndex 
                : 0 
                : 0
    var index = -1
    var i = fromIndex < 0 ? fromIndex + this.length > 0 ? fromIndex + this.length : 0 : fromIndex > this.length ? this.length : fromIndex
    while (i > 0) {
      if(search === this[i]){
        index = i
        break
      }
      i--
    }
    return index
}

console.log(arr.lastIndexOf(2, -1));