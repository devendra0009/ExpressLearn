const express=require('express')
const path=require('path')
// const hbs=require('hbs')
const port=process.env.port||8000
const app=express()



//this is to add staic files in server
// const staticPath=path.join(__dirname,"/public")
// app.use(express.static(staticPath))

//this is to set tempelate engine which also can be used to add dynamic content in express

const tempelate=path.join(__dirname+'/tempelate')  //if you want to change by default "views" ditectory name of tempelate files ,you first have to specify its path, then using app.set function change views to tempelate(here) then simply run as before
app.set("view engine","hbs")
app.set('views',tempelate) 
app.get('/',(req,res)=>{
    res.render('index',{
        dynamicContent:"I Am Dynamic"  //this is the main use of tempelate engine, dekho kse dynamically add krdia content me
    })
})

//indono m se vo phle vo get request run krega jo phle ari hai

// app.get('/',(req,res)=>{
//     res.send('Hi')
// })

app.listen(port,()=>{
    console.log(`Server running at ${port}`);
})
