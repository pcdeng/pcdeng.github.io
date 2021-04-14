const url = 'http://hotelapi.pcdeng.com';
var req = new XMLHttpRequest();
req.open('GET', url);
req.onload = function(e) {
  console.log(e);
};

req.onerror = function(err) {
  console.log(err);
};

req.send();
