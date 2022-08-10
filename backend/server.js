const express = require('express');
const cors = require('cors')
const axios = require('axios');
const path = require('path');

const mongoose = require('mongoose');
require('dotenv').config();

/*mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  ).then(() => console.log("MongoDB has been started.")).catch((err) => console.log(err));
*/  

const app = express();
const PORT = process.env.PORT || 3001
  
app.use(cors())
app.use(express.json())
  
app.use(express.static(path.resolve(__dirname, "../frontend/public")));



app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

  
app.listen(PORT, function(){
    console.log("Server is running on port "+ PORT)
    
});



app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../frontend/public", "index.html"));
});