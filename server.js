import express from "express"
import http from "http"
//import { WebSocketServer } from "ws"

const app = express();
// const server = http.createServer(app);
// const wss=new WebSocketServer({server});

// wss.on("connection", (ws,req)=>{

//     console.log("User Connected");

//     const userId=req.headers.userid;

//     ws.on("message",(msg)=>{
//         console.log(msg.toString());
//         ws.send("Negap new user");
//         ws.send(userId);
//     });

//     ws.on("close",()=>{
//         console.log("User disconnected");
//     });

//     ws.on("error", (err) => {
//         console.error("❌ Xatolik:", err);
//     });

    

// });

app.get("/",(req,res)=>{
    res.send("PR")
})
app.listen(3000,()=>{
    console.log("Server is running");
})