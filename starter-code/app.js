const express = require('express');
const app = express();
const Chuck  = require('chucknorris-io');
const client = new Chuck();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {

});
app.get('/random', (req, res, next) => {
  // Retrieve a random chuck joke
  client.getRandomJoke()
    .then((response) => {
      // res.render ("random")
      res.render ("random", response);
    }).catch((err) => {
      res.send ("There is an error");
    });
});
app.get('/categories', (req, res, next) => {
  client.getJokeCategories()
    .then((response)=>  {
      res.render ("categories", {categories: response});
    })
    .catch((err)=> {
      res.send ("There is an error");
    });
});
app.get('/search', (req, res, next) => {

});

app.listen(3000, () => {
  console.log('listening on port 3000!')
});
