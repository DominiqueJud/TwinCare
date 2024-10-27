const express =require('express');
const app = express();
const userRouter = require('./controller/userRouter')
const drugRouter= require('./controller/drugRouter')

app.use(express.json())
app.use('/api/user',userRouter)
app.use('/api/drug',drugRouter)

module.exports = app;
