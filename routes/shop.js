const path = require('path')
const express = require('express');
const router = express.Router()
const rootDir = require('../util/path')

router.get('/',(req, res, next)=> {
  console.log("In the middleware 2!");
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))

})

module.exports = router;