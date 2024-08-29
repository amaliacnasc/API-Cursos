// importando 
const http = require("http"); 
const express = require ("express");
const dotenv = require('dotenv'); 
const connectDB = require('./database'); 
const cursoRoutes = require('./routes/cursoRoutes');


dotenv.config(); 
connectDB(); 

// colocando a funcao de chamada do express dentro de uma variavel
const app = express();
app.use(express.json()); 
app.use('/api/cursos', cursoRoutes); 

const PORT = process.env.PORT; 

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
});
