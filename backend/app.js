var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = process.env.PORT || 9000;

//Using Scehmas to handle post and get request _____________________________________________________________________________________________
var Blogbit = require('./models/blogbit');
var Bookbit = require('./models/bookbit');
var Clipbit = require('./models/clipbit')
var Snipod = require('./models/snipod');
//Connecting with database _____________________________________________________________________________________________
var db = require('./db/index');
//___________________________________________________________________________________________

var blogRouter = require("./routes/blogRoute")
var bookRouter = require("./routes/bookRoute")
var clipRouter = require("./routes/clipRoute")
var cors = require('cors');
// const { link } = require('fs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/compose', blogRouter);

app.post('/composeblogbit', async (req, res) => {
  titl = req.body.title;
  cont = req.body.content;
  catg = req.body.category;
  try {
    Blogbit.insertMany({title: titl, content: cont, category: catg}, (err, data)=>{
      if (err) {
        console.log(err);
      }
    })
  } catch (err) {
    console.log(err);
  }
})

app.post('/composebookbit', async (req, res) => {
  bname = req.body.bookName;
  btitle = req.body.bitTitle;
  bcontent = req.body.bitContent;
  bchapter = req.body.chapter;
  bgenre = req.body.genre;
  try {
    Bookbit.insertMany({bookName: bname, bitTitle: btitle, bitContent: bcontent, chapter: bchapter, genre: bgenre}, (err, data)=>{
      if (err) {
        console.log(err);
      }
    })
  } catch (err) {
    console.log(err);
  }
})

app.post('/composeclipbit', async (req, res) => {
  title = req.body.ClipTitle;
  link = req.body.ClipLink;
  stime = req.body.startTime;
  etime = req.body.endTime;
  desc = req.body.ClipDesc;
  tag = req.body.ClipTag;
  try {
    Clipbit.insertMany({ClipTitle: title, ClipLink: link, startTime: stime, endTime: etime, ClipDesc: desc, ClipTag: tag}, (err, data)=>{
      if (err) {
        console.log(err);
      }
    })
  } catch (err) {
    console.log(err);
  }
})

app.use('/', blogRouter);
app.use('/', bookRouter);
app.use('/', clipRouter);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// _______________________________________________________________________________________________________________
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {

//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(port, () => console.log("hello"));

module.exports = app;