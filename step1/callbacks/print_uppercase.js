var getHTML =  require('./http-functions.js');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };

  function upperCase (html) {
    console.log(html.toUpperCase());
  }

 getHTML(requestOptions, upperCase) 