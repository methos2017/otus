var sum = [1, 2, 3]

smtArrowFunc = (...args) => {
  for (let i = 0; i < args.length; i++) {
    console.log("hello, world!")

    if (args[i] === 0 || undefined) sum.splice(-1, 1)
    else sum.push(args[i])
  }

  console.log("The length of args " + args.length)

  let totalSum = sum.reduce((a, b) => a + b, 0)

  console.log("the total sum is " + totalSum)

  console.log("Greetings, Warlord! " + args[0])
}

smtArrowFunc(5, 7, 8)

smtArrowFunc(1)

smtArrowFunc(0)

smtArrowFunc(2)
