# Book Search

[This app is deployed on Heroku](https://jamison-book-search.herokuapp.com)! 

Book Search uses the [Google Books API](https://developers.google.com/books/) to find volumes which match a given search query.


### My approach to building this app

* I started by exploring the Google Books API and testing out calls in postman

* Once I understood what data to expect from the JSON response I moved this into a function with vanilla JS

* I started working with index.html in VS Code's live server to create a view with some basic styling

* I then installed Express and hit a snag-- my server worked, but the search script wasn't running from the view

* I wondered if there was a way to push to Heroku without setting up a server and quickly learned this isn't possible

* I reverted to Express and EJS, researching and troubleshooting client side scripting

* After realizing I was simply missing line 7 of `server.js` I was able to add `app.use(express.static(path.join(__dirname, 'client')))` and have the same functionality on localhost:3000 that I had in VS Code's live server

* I reorganized my file tree and deployed to Heroku.
