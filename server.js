const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/sw.js', (req, res) => {
    res.sendFile(__dirname + '/app/sw.js');
});
app.get("*", (request, response) => {
  response.sendFile(__dirname + '/app/index.html');
});



const listener = app.listen(process.env.PORT,  () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

