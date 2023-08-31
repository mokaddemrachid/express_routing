// const http=require('http')
// const fs=require('fs')
// const port=8091
// const server=http.createServer((req,res)=>{
//     res.setHeader("Content-type","text/txt")
//     fs.readFile("content.txt","Utf8",(err,data)=>{
//         if(err){
//             res.statusCode=500
//             res.end("server error")
//         }else{
//             res.end(data)
//         }
//     })
// })
// server.listen(port,()=>{
//     console.log(`http://localhost:${port}`)
// })

// const express = require('express')
// const app = express()
// const port = 5800

// app.use(express.json());
// var array = []
// app.use(cors({
//     origin:'http://localhost:3000',
//     Credentials:true,
//     optionSuccessStatus:200,
// }))
// app.get('/home', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`http://localhost: ${port}`)
// })


const express=require("express")
const app=express()
const port=5800
const cors=require('cors')
const validate=()=>{
  const now=new Date()
  const day=now.getDay()
  const hour=now.getHours()
  console.log(day,hour)
  if ((day > 0 && day < 6) && (hour >= 9 && hour < 17)){
      return true
  }else{
      return ("we are closed")
  }

}
//  const validate=(req,res,next)=>{
//     var date=new Date()
//    var mydate=date.toString().split('GM')[0]
//    var time=mydate.toString().split('2023')[1]
// //    console.log(time.split(':')[0]<9 && time.split(':')[0]<17)
//    if(time.split(':')[0]>9 && time.split(':')[0]<17){
//         // next()
//         res.send('we are open')
//    }else{
//     res.send('we are close')
//    }

//  }
// var date=new Date()
// console.log(time.split(':')[0]>9 && time.split(':')[0]<17)
app.use(express.json())

app.use(cors({
    origin:'http://localhost:3000/', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}))
app.use(validate)
app.get("/",(req, res) => {
// res.redirect("/service")
   })
app.listen(port,()=>{
    console.log("server run")
})