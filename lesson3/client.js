const http = require('http');





someGetWork = () => {

  // http.get('http://127.0.0.1:3000', (resp) => {
  //   let data = '';
  //   resp.on('data', (chunk) => {
  //     data += chunk;
  //   })
  //   resp.on('end', () => {  
  //     console.log('lets rock and parse some data: ' + data)
  //   })
  // }).on("error", (err) => {
  //   console.log("Error: " + err.message);
  // })

  return new Promise(function (resolve, reject) {

    http.get('http://127.0.0.1:3000', resp => {

      let data = ''
      resp.on('data', (chunk) => {
        data += chunk;
      })

      resolve(
        resp.on('end', () => {
          console.log('lets rock and parse some data: ' + data)
        })

      )
    })

    // http.get('http://127.0.0.1:3000', (resp) => {
    //   let data = ''
    //   resp.on('data', (chunk) => {
    //     data += chunk
    //   })
    //   resp.on('end', () => {  
    //     console.log('lets rock and parse some data: ' + data)
    //   })
    // }).on("error", (err) => {
    //   console.log("Error: " + err.message)
    // })

  })
}

makeSequence = async (amount, mode) => {

  let i
  let res


  for (i = 0; i < amount; i++) {

    if (mode === 'parallel') {

      someGetWork()

    }
    else if (mode === 'onebyone') {

      await someGetWork()



    }
  }

}



// makeSequence(50, 'parallel')
makeSequence(50, 'onebyone')


