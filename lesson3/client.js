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
}

makeSequence = async (amount, mode) => {

    let i
    let res



      if (mode === 'parallel') {

        for (i = 0; i < amount; i++) {


          someGetWork()


        }
      }
      else if(mode === 'onebyone') {

        [...Array(amount)].reduce( (p, _, i) => 
        p.then(_ => new Promise(resolve =>
            setTimeout(function () {
                // console.log(i)
                someGetWork()
                resolve()
            }, Math.random() * 1000)
        ))
    , Promise.resolve() )
        

      }
    }





// makeSequence(50, 'parallel')
makeSequence(50, 'onebyone')


