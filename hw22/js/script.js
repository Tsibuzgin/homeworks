'use strict';
// 1.indexOf
// let array = [2, 5, 9];

// Array.prototype.myIndexOf = function(search,fromIndex){
//     fromIndex = fromIndex ? typeof fromIndex === 'number' ? fromIndex 
//                   : typeof fromIndex === 'string' ? (fromIndex-=0) && fromIndex === fromIndex ? fromIndex 
//                   : 0 : 0 : 0;
//     var index = -1;
//     var len = this.length;
//     var i = fromIndex < 0 ? len + fromIndex : fromIndex;
//     while (i < len) {
//       if(search == this[i]){
//         index = i;
//         break;
//       }
//       i++;
//     }
//     return index;
// };

// console.log(array.myIndexOf(7));

//2.lastIndexOf
// arr = [2, 5, 9, 2];
// Array.prototype.myLastIndexOf = function(search,fromIndex){
//     fromIndex = fromIndex ? typeof fromIndex === 'number' ? fromIndex 
//                 : (fromIndex-=0) && fromIndex === fromIndex ? fromIndex 
//                 : 0 
//                 : 0
//     var index = -1
//     var i = fromIndex < 0 ? fromIndex + this.length > 0 ? fromIndex + this.length : 0 : fromIndex > this.length ? this.length : fromIndex
//     while (i > 0) {
//       if(search == this[i]){
//         index = i
//         break
//       }
//       i--
//     }
//     return index
// }

//3.find
// Array.prototype.myFind = function(callback,context) {
//     context = context || window
//     var len = this.length
//     var i = 0
//     while (i < len) {
//       if(callback.call(context,this[i],i,this))
//         return this[i]
//       i++
//     }
//     return undefined
// }

//4.findIndex
// Array.prototype.myFindIndex = function(callback,context) {
//     context = context || window
//     var len = this.length
//     var i = 0
//     while (i < len) {
//       if(callback.call(context,this[i],i,this))
//         return i
//       i++
//     }
//     return -1
//   }

//5.includes
// Array.prototype.myIncludes = function(valueToFind,findIndex) {
//     var len = this.length
//     findIndex = typeof findIndex === 'number' ? findIndex < 0 ? Math.abs(findIndex) > len ? len : len + findIndex : findIndex > len ? len : findIndex : 0
//     while (findIndex < len) {
//       var now = this[findIndex]
//       if(valueToFind === now)return true
//       if(valueToFind !== valueToFind && now !== now)return true
//       findIndex++
//     }
//     return false
//   }

//6.every
// Array.prototype.myEvery = function(callback){
//     var every = true
//     var len = this.length
//     var index = 0
//     var context = arguments[1] || this
//     while (index < len) {
//       if(!callback.call(context, this[index], index, this)) {
//         every = false 
//         break 
//       }
//       index++
//     }
//     return every
//   }

//7.some
// Array.prototype.mySome = function(callback){
//     var every = false
//     var len = this.length
//     var index = 0
//     var context = arguments[1] || this
//     while (index < len) {
//       if(callback.call(context, this[index], index, this)) {
//         every = true 
//         break 
//       }
//       index++
//     }
//     return every
//   }