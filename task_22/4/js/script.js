'use strict';
//findIndex
Array.prototype.myFindIndex = function(callback,context) {
    context = context || window
    var len = this.length
    var i = 0
    while (i < len) {
      if(callback.call(context,this[i],i,this))
        return i
      i++
    }
    return -1
  }