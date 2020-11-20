const express = require('express');
const fetch = require('node-fetch');

// LOCALHOST

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {

    res.render('index',)
});

// LOCALHOST SERVER START

app.listen(process.env.PORT || 3000)
console.log(`Express started on http://localhost:${app.get('port')}; press Ctrl-C to terminate.`);

