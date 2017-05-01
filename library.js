var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

			 
var books =   [{}]

var bookIndex = 1;


app.use(express.static('public')) 

	  router.route('/books')
      .get(function(req,res){ 
		  res.json(books)
	  })  
	  .post(function(req, res) {
	  var book = {};
      book.id = bookIndex++
	  book.name_book = req.body.name_book;
	  book.name = req.body.name;
	  book.surname = req.body.surname;
	  book.DD = req.body.DD;
	  book.MM = req.body.MM;
	  book.YY = req.body.YY;  
      books.push(book);
      res.json(books); 
      });

router.route('/books/:book_id')
	  .get(function(req,res){ 
		  res.json(books[req.params.book_id])
	  })  
	  .put(function(req, res) {
	  var id = req.params.book_id
	  books[id].name_book = req.body.name_book
	  book.name = req.body.name;
	  book.surname = req.body.surname;
	  book.DD = req.body.DD;
	  book.MM = req.body.MM;
	  book.YY = req.body.YY;  
	  res.json(books[id])
	  })
	  
	  .delete(function(req,res){
	  var id = req.params.book_id
	  delete books[id]
	  res.json(book)
	  })
	  



app.use('/api', bodyParser.json(), router);

app.listen(80, function() {
console.log('web server is running')
})
