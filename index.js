
const express = require('express');
const morgan = require('morgan');
const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')


//bodyParser
server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'));
server.use('/product',productRouter.router)
server.use('/user',userRouter.router)




server.listen(8080, () => {
  console.log('server started');
});
