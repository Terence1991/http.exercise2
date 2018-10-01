var getHTML =  require('./http-functions.js');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };

  function lowerCase (html) {
    console.log(html.toLowerCase());
  }

 getHTML(requestOptions, lowerCase) 