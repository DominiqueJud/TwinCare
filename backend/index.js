const app=require('./app');
const port = process.env.PORT | 3007;

const db= require('./models')


db.sequelize.sync().then(req => {
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
  
})
