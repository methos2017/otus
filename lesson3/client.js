const http = require('http');

const fetch = require("node-fetch");

var request = require("request");


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

makeSequence = async (amount) => {

  var map = new Map;
  map.set('France', 'Paris', 'Moscow')

    for (let i = 0; i < amount; i++) {

      new Promise(function(resolve, reject) {
        // Do async job
        someGetWork()
        // resolve(()=>console.log('запрос прошел'))
       })
    }

}



makeSequence(50)

