//import required modules

const express = require("express")
const cors = require("cors")

//load environmental variables from .env file 

//Express application 
const app = express();
const PORT = process.env.PORT || 5000;

//middleware 
app.use(cors());//Enables CORS 
app.use(express.json()); //parse JSON bodies

//API Endpoint 
app.get('/api/data', (req, res) =>{
    res.json({message: "Hello from backend"});
});

app.post('/api/data', (req, res) =>{
    res.json({message: "Update here"});
});

app.put('/api/data', (req, res) =>{
    res.json({message: "Edit here"});
});

app.delete('/api/data', (req,res) =>{
    res.json({message: "Delet here"});
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost: ${PORT}`);
});