//	***	///

var fn1 = () => {
  console.log("fn1 work")
  return Promise.resolve(1)
}

var fn2 = () =>
  new Promise(resolve => {
    console.log("fn2")
    setTimeout(() => resolve(2), 1000)
  })

async function promiseReduce(asyncFunctions, reduce, initialValue) {
  // const args = Array.from(arguments)

  let memo = initialValue

  let res

  for (let i = 0; i < asyncFunctions.length; i++) {
    console.log("the memo is " + memo)

    let val = await asyncFunctions[i]()

    !res ? (res = reduce(memo, val)) : (res = reduce(res, val))

    console.log("The result is " + res)

    // memo += val
  }
}

promiseReduce(
  [fn1, fn2],
  function(memo, value) {
    console.log("reduce")

    return memo * value
  },
  1
)
