const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'unknown.html'));
});













// // const http = require('http');

// const express = require('express');
// const bodyParser = require('body-parser')
// // console.log(routes.someText);

// const router = express.Router()

// router.get

// const app = express();

// // app.use((req, res, next)=> {
// //   console.log("In the middleware!");
// //   next();

// // })
// app.use(bodyParser.urlencoded({extended: false})); 

// // app.use('/', (req, res, next)=>{
// //   console.log('This always runs!');
// //   next()
// // })
// app.use((req, res, next)=> {
//   console.log("In the middleware 3!");
//   res.send('<h1>Hello from Express!</>')

// })
// // app.use('/add-product',(req, res, next)=> {
// //   console.log("In the middleware 1!");
// //   res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
// // })

// //get
// // app.get('/product', (req, res, next)=> {
// //   console.log(req.body);
// //   res.redirect('/')

// //post
// // app.post('/product', (req, res, next)=> {
// //   console.log(req.body);
// //   res.redirect('/')})
  

// // app.use('/product', (req, res, next)=> {
// //   console.log(req.body);
// //   res.redirect('/')
  
// // })

// // app.use('/',(req, res, next)=> {
// //   console.log("In the middleware 2!");
// //   res.send('<h1>Hello from Express!</>')

// // })


// // const server = http.createServer(app);

// // server.listen(3000);

app.listen(3000)