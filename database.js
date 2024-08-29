// importando o mongoose 
const mongoose = require("mongoose"); 

// fazendo a conexao com o mongo da minha maquina 
const connectDB = async ()=> {
    try{
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONGODB connected ${con.connection.host}`);
    }catch(error){
        console.error(`Error: ${error.message}`);
         process.exit(1);
    }
}
// exportando a conexao para que ela possa ser acessada em outros arquivos 
module.exports = connectDB;