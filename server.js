const express = require('express')
const app = express()
const greetings = ["Howdy, partner!", "Ahoy, matey!", "Hello, sunshine!", "Bonjour", "What's shaking bacon", "Yoo-hoo!", "hello", "hi"];

app.set('port', (process.env.PORT || 8080));

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/greet', function (req, res) {
    let randomIndex = Math.floor(Math.random()*greetings.length);
    let name = req.query.name;
    
    res.send(`${greetings[randomIndex]} ${name}`);
})


app.listen(app.get('port'), function () {
  console.log('Example app listening on port 8080!')
})
