var getHTML =  require('./http-functions.js');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };

  function reverse (html) {
    console.log(html.split('').reverse().join(''));
  }

 getHTML(requestOptions, reverse) 