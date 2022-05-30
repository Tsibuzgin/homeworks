'use strict';
//includes
Array.prototype.myIncludes = function(valueToFind,findIndex) {
    var len = this.length
    findIndex = typeof findIndex === 'number' ? findIndex < 0 ? Math.abs(findIndex) > len ? len : len + findIndex : findIndex > len ? len : findIndex : 0
    while (findIndex < len) {
      var now = this[findIndex]
      if(valueToFind === now)return true
      if(valueToFind !== valueToFind && now !== now)return true
      findIndex++
    }
    return false
  }