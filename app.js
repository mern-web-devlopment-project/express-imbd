const express=require('express')
const app=express()
const moviesPage=require('./routes/movies')
app.get('/',(req,res)=>{

  res.send("This is App Page");
  
})
app.use('/api/v1/movies',moviesPage)
app.listen(8080);