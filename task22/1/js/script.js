'use strict';
//indexOf
let array = [2, 5, 9];

Array.prototype.myIndexOf = function(search,fromIndex){
    fromIndex = fromIndex ? typeof fromIndex === 'number' ? fromIndex 
                  : typeof fromIndex === 'string' ? (fromIndex-=0) && fromIndex === fromIndex ? fromIndex 
                  : 0 : 0 : 0;
    var index = -1;
    var len = this.length;
    var i = fromIndex < 0 ? len + fromIndex : fromIndex;
    while (i < len) {
      if(search === this[i]){
        index = i;
        break;
      }
      i++;
    }
    return index;
};

console.log(array.myIndexOf(7));