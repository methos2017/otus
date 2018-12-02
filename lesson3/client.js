const http = require('http');

// const fetch = require("node-fetch");

// var request = require("request");


someGetWork = () => {

    http.get('http://127.0.0.1:3000', (resp) => {
        let data = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          // console.log(JSON.parse(data).explanation);
      
          console.log('lets rock and parse some data: ' + data)
      
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });

      return "We made it!"

}

makeSequence = async (amount, mode) => {

    let i
    let res


    for (i = 0; i < amount; i++) {

      if (mode === 'parallel') {
        let res = new Promise(function(resolve, reject) {
          resolve(someGetWork())
        })

        console.log('the res is ' + res)
      }
      else if(mode === 'onebyone') {

        let res = await new Promise(function(resolve, reject) {
          resolve(someGetWork())
        })

        console.log('the res is ' + res)
        

      }
    }

}



makeSequence(50, 'parallel')
makeSequence(50, 'onebyone')


