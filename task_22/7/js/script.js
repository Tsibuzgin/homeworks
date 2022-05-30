'use strict';
//some
Array.prototype.mySome = function(callback){
    var every = false
    var len = this.length
    var index = 0
    var context = arguments[1] || this
    while (index < len) {
      if(callback.call(context, this[index], index, this)) {
        every = true 
        break 
      }
      index++
    }
    return every
  }