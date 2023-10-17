const express=require("express"); // importing express 
const app=express(); // invoke the express method
const routes=require("./controllers/routes");

app.use(express.json()); // middleware that allows us to read incoming request as a JSON object

const PORT= 4000; // the port number the server will listen to

app.use("/Blog-Server", routes);

app.get("/Blog-Server/test", (req, res) => { // test to see if the port is working with postman
    res.send("Hello World!");
});

app.use(express.static(`${__dirname}/public`)); // Serve static files from the server. 

app.listen (PORT, () => {
    console.log("server is running on port", PORT); // console.log that the server is running
})

