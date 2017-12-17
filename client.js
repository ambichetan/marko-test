const hello = require('./hello');
hello.renderSync({
  name: 'chetan'
}).appendTo(document.body);
