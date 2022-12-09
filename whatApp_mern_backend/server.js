import  express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js"
import bodyParser from "body-parser"
import Pusher from "pusher";
import cors from "cors";
//app config
const app=express();
const port=process.env.PORT || 9000;

//db config
const url="mongodb+srv://arhamkhan:Ak03119708281@cluster0.egc7yun.mongodb.net/whatsappdb?retryWrites=true&w=majority"
mongoose.connect(url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    

})
//pusher config


const pusher = new Pusher({
    appId: "1522566",
    key: "e0522f61094a45d2060f",
    secret: "5a4e95fb8b44297fdbc8",
    cluster: "eu",
    useTLS: true
  });
//db
const db =mongoose.connection;
db.once("open",()=>{
    console.log("db is conneted")
    const mesgCollection = db.collection("messagecontents");
    const changeStream=mesgCollection.watch();
    changeStream.on("change",(change)=>{
        console.log(change);
        if(change.operationType==="insert"){
            const messageDetails= change.fullDocument;
            
            pusher.trigger("messages","insert",{
                    name:messageDetails.name,
                    message:messageDetails.message,
                    timeStamp:messageDetails.timeStamp,
                    recieved:messageDetails.recieved
            })
        }else{
            console.log("ERROR: Trigger pusher");
        }
    })
});


//middleware
app.use(express.json());
//middle ware for protection of messages
app.use(cors());
// app.use((req,res,next)=>{
//     res.setHeader("Acess-Control-Allow-Origin","*");
//     res.setHeader("Acess-Control-Allow-Headers","*");
//     next();
// })
//instead of this use can use cors package ;



// app.use(bodyParser.json());

// route
app.get("/message/sync",(req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get("/", (req,res)=>res.status(200).send("hello world"));

app.post("/messages/new",(req,res)=>{
    const dbMessage=req.body;
    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

// liseten
app.listen(port,()=>{
    console.log(`Server is running on : localhost:${port}`)
})




