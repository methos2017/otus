function sum() {
  let layer = Array.prototype.slice

  let sum = 0

  closure = function() {
    let args2 = layer.call(arguments)

    let l = args2.length

    for (let i = 0; i < l; i++) {
      sum += args2[i]
    }

    //  on second and others call
    return args2.length ? closure : sum
  }

  //    on first call
  return closure.apply(null, layer.call(arguments))
}

sum(6)(5)(7)(7, 8, 0.5, -1)() // 32,5
