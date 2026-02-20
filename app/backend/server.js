const express = require ("express");

const app = express(); 
const PORT = 3002;

app.get("/",(req,res)=>{
    res.send("coucou backend");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
