var https = require('https');
module.exports = function getHTML (options, callback) {
        https.get(options, function(response) {
            var buff = [];
            
            response.setEncoding("utf-8")
            
            response.on('data', function(data) {
                buff.push(data.length);
            });
            
        response.on('end', function() {
        console.log('Response stream complete.');
        callback(" Data received " + buff + "\n");
      });
    
        });
    };

