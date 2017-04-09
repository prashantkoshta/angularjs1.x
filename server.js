var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 3000));
app.use(express.static('.'));

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.get('/testservice',function (req, res, next) {
  res.send({'data':'Got data now'});
})

// all of our routes will be prefixed with /api
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
