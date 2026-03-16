

import express from "express"
import cors from "cors"
import http from "http"
import expressStaticGzip from "express-static-gzip";

const distPath = __dirname + "/dist"
console.log("DIST PATH: ", distPath)
const app = express()




app.use(express.json())
app.use(cors({origin:"*"}))


app.use(expressStaticGzip(distPath,{
  orderPreference: ['br', 'gz']
}))






app.get("/", async (req,res)=>{
return res.sendFile(distPath + "/index.html")
})

app.get(/.*/, async (req,res)=>{
return res.redirect("/")

})

const PORT =  6001

app.listen(PORT,()=>{
    console.log(`LISTENING ON PORT ${PORT}`)
})
