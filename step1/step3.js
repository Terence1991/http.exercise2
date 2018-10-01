var https = require('https');

function getAndPrintHTML (options) {

    /* Add your code here */

    https.get(options, function(response) {
        var buff = [];
        
        response.setEncoding("utf-8")
        
        response.on('data', function(data) {
            buff.push(data.length);
        });
        
    response.on('end', function() {
    console.log('Response stream complete.');
    console.log(buff)
  });

    });

}  
    
    var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  
};

console.log(getAndPrintHTML(requestOptions));
  