const express = require('express')
require("dotenv").config()
const bodyparser = require('body-parser')
const cors = require("cors")
const fileupload = require('express-fileupload')
const routes = require("./routes/route.js")


const app = express()
app.use(cors({
   "access-control-allow-origin": "*"
}))
app.use(fileupload())
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use("/api",routes)

app.use("/image", express.static("src/upload"));

app.get("/*", (_, res) => {
return res.status(404).send({message: "Not Found"})
})


const PORT = process.env.PORT || 5000;

app.use = (err, req, res , next) =>{
   if(err){
      return res.status(404).send({message:"Not Found"})
   }
   next()
}

app.listen(PORT, () =>{
   console.log(`listening on ${PORT}`);
})      