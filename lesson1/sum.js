function sum() {
  var layer = Array.prototype.slice,
    sum = 0,
    closure = function() {
      var args2 = layer.call(arguments)
      for (var i = 0, l = args2.length; i < l; i++) {
        sum += args2[i]
      }
      // проверка - вызов closure

      console.log("the args length .. " + args2.length)

      return args2.length ? closure : sum
    }
  return closure.apply(null, layer.call(arguments))
}

sum(2)(5)(9)(8)() // 14

console.log("Greetings, mortal!" + sum(2)(5)(7)(8)())
