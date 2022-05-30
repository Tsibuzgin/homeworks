'use strict';
//every
Array.prototype.myEvery = function(callback){
    var every = true
    var len = this.length
    var index = 0
    var context = arguments[1] || this
    while (index < len) {
      if(!callback.call(context, this[index], index, this)) {
        every = false 
        break 
      }
      index++
    }
    return every
  }