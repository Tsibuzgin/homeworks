let bind = function(fn, context) {
    // truncate unnecessary arguments (function and context)
    let bindArgs = [].slice.call(arguments, 2);
    return function() {
      // here all arguments will be needed
      let fnArgs = [].slice.call(arguments);
      // collect everything 
      return fn.apply(context, bindArgs.concat(fnArgs));
    };
  };