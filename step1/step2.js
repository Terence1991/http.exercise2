var https = require('https');


function getAndPrintHTML () {
    
    
    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
  
    /* Add your code here */

    https.get(requestOptions, function(response) {

        var buff = []; 
        response.setEncoding("utf-8")
        
        response.on('data', function(data) {
            buff.push(data.length);
        })
        
    response.on('end', function() {
    console.log('Response stream complete.');
    console.log(buff)
  });

    });


//  return buff;  
  
  }

  console.log(getAndPrintHTML());