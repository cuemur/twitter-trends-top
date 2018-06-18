var express = require('express');
var twit = require('twit');

app = express();
var Twitter = new twit({
  consumer_key:         'AF9D5rNAObrPsQIxBNyU6fVJO',
  consumer_secret:      'wiIDjonPU3z9Q3m0pjlU0DErNOk6vW46zJKo5Z0DFKMtFL33dU',
  access_token:         '902835441522675712-CCLZi9nSOLfb9R5eQV9uFm6a4RksMxu',
  access_token_secret:  'MrgQqWAHCaiJHgNV2Oxtdm7GQlyI1HOS6nu8XEhyYNyfa',
  timeout_ms:           60*1000, 
  strictSSL:            true,    
});

app.use('/static', express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/trends/:id', function(req, res) {
  var query_decoded = decodeURIComponent(req.params.id);
  var params = {
    id: query_decoded,
  };
  Twitter.get('trends/place', params, function(err, data) {
    if (err) res.status(500).json({error: err})
    return res.json({ trends: data });
  })
});

app.listen(3333, function(err) {
  if (err) return console.log(err);
  console.log('Listening on port 3333');
  console.log('There was no logic how to select items, and not all locations will work, because of lack of woeid countries.');
  console.log('Ive hope u like it ant put star for this rep.');
})
